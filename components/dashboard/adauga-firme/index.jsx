"use client";

import { useEffect, useState } from "react";
import BreadCrumb from "@/components/common/BreadCrumb";
import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import CreateList from "./CreateList";
import DetailedInfo from "./DetailedInfo";
import FloorPlans from "./FloorPlans";
import LocationField from "./LocationField";
import PropertyMediaUploader from "./PropertyMediaUploader";
import {
  handleGetFirestore,
  handleQueryFirestore,
  handleQueryFirestoreSubcollection,
  handleUpdateFirestore,
  handleUploadFirestore,
} from "@/utils/firestoreUtils";
import LogoUpload from "./LogoUpload";
import DateContact from "./DateContact";
import GalerieFotoSection from "./GalerieFotoSection";
import selectedFiles from "@/utils/selectedFiles";
import { useParams, useRouter } from "next/navigation";
import CommonLoader from "@/components/common/CommonLoader";
import { uploadImage, uploadMultipleImages } from "@/utils/storageUtils";
import DOMPurify from "isomorphic-dompurify";

const Index = () => {
  // Adăugarea unui nou state pentru mesajul de succes
  const [successMessage, setSuccessMessage] = useState("");
  const [documentId, setDocumentId] = useState(null);
  const [propertySelectedImgs, setPropertySelectedImgs] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);
  const [categorii, setCategorii] = useState([]);
  const [judete, setJudete] = useState([]);
  const [localitati, setLocalitati] = useState([]);
  const [deletedLogo, setDeletedLogo] = useState(null);
  const [fileNames, setFileNames] = useState([]);
  const [oldImageFileName, setOldImageFileName] = useState(null);
  const [oldLogoFileName, setOldLogoFileName] = useState(null);
  const [isNewLogo, setIsNewLogo] = useState(false);
  const [isNewImage, setIsNewImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [logoImg, setLogoImg] = useState([]);

  const [formValues, setFormValues] = useState({
    siteName: "",
    metaTitle: "",
    metaDescription: "",
    articleContentFirst: "",
    articleContentSecond: "",
    stare: "",
    categorie: "",
    judet: "",
    localitate: "",
    telefonUnu: "",
    telefonDoi: "",
    emailUnu: "",
    emailDoi: "",
    websiteUnu: "",
    websiteDoi: "",
    facebook: "",
    googlePlus: "",
    facebookPageId: "",
    codPostal: "",
    adresa: "",
    harta: "",
    idGalerieFoto: "",
    cuvinteCheieImaginiGalerie: "",
    coordonate: {},
  });

  const params = useParams();
  const router = useRouter();

  const id = params.id;

  let isEdit = id && id.length > 0 ? true : false;

  // multiple image select
  const multipleImage = (e) => {
    // checking is same file matched with old stored array
    const isExist = propertySelectedImgs?.some((file1) =>
      selectedFiles(e)?.some((file2) => file1.name === file2.name)
    );

    if (!isExist) {
      setPropertySelectedImgs((old) => [...old, ...selectedFiles(e)]);
      setIsNewImage(true);
    } else {
      alert("You have selected one image already!");
    }
  };

  // delete logo
  const deleteLogo = (name) => {
    if (isEdit) {
      setLogoImg([]); // Clear the selection when deleting
      setDeletedLogo(logoImg[0].fileName);
    } else {
      setLogoImg([]); // Clear the selection when deleting
    }
  };

  // delete image
  const deleteImage = (item) => {
    console.log("itemmm....", item);
    console.log(item);
    // Filtrăm imaginile rămase
    const deleted = propertySelectedImgs?.filter((file) =>
      file instanceof File ? file.name !== item.name : file !== item
    );

    // Setăm imaginile rămase
    setPropertySelectedImgs(deleted);

    // Verificăm dacă elementul șters nu este o instanță a clasei File și, în caz afirmativ, îl adăugăm la setDeletedImages
    const isDeletedNotFile = propertySelectedImgs?.find(
      (file) =>
        (file instanceof File ? file.name === item.name : file === item) &&
        !(item instanceof File)
    );

    if (isDeletedNotFile) {
      setDeletedImages((prevDeletedImages) => [...prevDeletedImages, item]);
    }
  };

  const handleLocationSelect = (lat, lng, adresa, urlMaps) => {
    console.log(`Selected location - Lat: ${lat}, Lng: ${lng}`);
    setFormValues((prevState) => ({
      ...prevState,
      adresa: adresa,
      harta: urlMaps,
      coordonate: { lat, lng },
    }));
    console.log(
      `Adresa setata: ${adresa}, Link harta: ${urlMaps}, Coordonate: Lat: ${lat}, Lng: ${lng}`
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formValues);
  };
  const handleJudetChange = async (e) => {
    const { name, value } = e.target;
    console.log("name...", name);
    console.log("value...", value);
    const loc = await handleQueryFirestoreSubcollection(
      "Localitati",
      "judet",
      value
    );
    setLocalitati(loc);
    console.log("loc...", loc);
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formValues);
  };
  const handleContentChangeFirst = (content) => {
    setFormValues((prevState) => ({
      ...prevState,
      articleContentFirst: cont,
    }));
  };

  const handleContentChangeSecond = (content) => {
    setFormValues((prevState) => ({
      ...prevState,
      articleContentSecond: cont,
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    console.log("Submitting form with values:", formValues);
    if (propertySelectedImgs.length === 0 && !formValues.idGalerieFoto) {
      console.log("No image length...");
      setSuccessMessage("Nu sunt adaugate imagini");
      setIsLoading(false);
      return;
    }
    if (logoImg.length === 0) {
      console.log("No logo length...");
      setSuccessMessage("Nu este logo adaugat");
      setIsLoading(false);
      return;
    }

    try {
      if (isEdit) {
        const logo = await uploadImage(
          logoImg,
          isEdit,
          "LogoFirme",
          deletedLogo
        );

        formValues.logo = logo;

        if (propertySelectedImgs.length !== 0) {
          const imagini = await uploadMultipleImages(
            propertySelectedImgs,
            isEdit,
            "ImaginiFirme",
            deletedImages
          );

          formValues.imagini = imagini;
        }
        console.log("formValues....", formValues);

        await handleUpdateFirestore(`Firme/${documentId}`, formValues).then(
          () => {
            setIsLoading(false);
          }
        );
      } else {
        const logo = await uploadImage(logoImg, false, "LogoFirme");

        formValues.logo = logo;
        let images;
        if (propertySelectedImgs.length !== 0) {
          images = await uploadMultipleImages(
            propertySelectedImgs,
            false,
            "ImaginiFirme",
            deletedImages
          );
        } else {
          const imgs = [];
          images = { imgs };
        }

        formValues.imagini = images;

        await handleUploadFirestore(formValues, "Firme");

        // Așteaptă finalizarea încărcării pentru "Imagini" și apoi dezactivează indicatorul de încărcare
        await handleUploadFirestore(formValues, "Imagini");
        setIsLoading(false);
      }
      // Setarea mesajului de succes după finalizarea cu succes
      setSuccessMessage("Scriere realizată cu succes!");
      // Curățarea mesajului după 3 secunde
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      // Resetarea formularului
      setFormValues({
        siteName: "",
        metaTitle: "",
        metaDescription: "",
        articleContentFirst: "",
        articleContentSecond: "",
        stare: "",
        categorie: "",
        judet: "",
        localitate: "",
        telefonUnu: "",
        telefonDoi: "",
        emailUnu: "",
        emailDoi: "",
        websiteUnu: "",
        websiteDoi: "",
        facebook: "",
        googlePlus: "",
        facebookPageId: "",
        codPostal: "",
        adresa: "",
        harta: "",
        idGalerieFoto: "",
        cuvinteCheieImaginiGalerie: "",
      });
    } catch (error) {
      setIsLoading(false);
      console.error("Eroare la încărcare submit:", error);
      // Setarea mesajului de eroare, care va fi afișat în același loc cu mesajul de succes
      setSuccessMessage("Eroare la încărcare: " + error.message);
      // Opțional, poți decide să nu cureți mesajul de eroare automat după 3 secunde
      // Dacă dorești să cureți mesajul de eroare automat, poți adăuga:
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
  };

  const handleReset = () => {
    setFormValues({
      siteName: "",
      metaTitle: "",
      metaDescription: "",
      articleContentFirst: "",
      articleContentSecond: "",
      stare: "",
      categorie: "",
      judet: "",
      localitate: "",
      telefonUnu: "",
      telefonDoi: "",
      emailUnu: "",
      emailDoi: "",
      websiteUnu: "",
      websiteDoi: "",
      facebook: "",
      googlePlus: "",
      facebookPageId: "",
      codPostal: "",
      adresa: "",
      harta: "",
      idGalerieFoto: "",
      cuvinteCheieImaginiGalerie: "",
    });
  };

  const handleQuery = async () => {
    const numericId = parseInt(id, 10); // Convertește `id` din string în număr întreg.
    console.log("id....", typeof numericId);

    try {
      const c = await handleQueryFirestore("Firme", "id", numericId);
      console.log("course...found..", c);

      // Presupunând că `c` este un obiect care conține datele necesare,
      // actualizează state-ul `formValues` cu aceste date.
      // Asigură-te că structura obiectului `c` corespunde cu cea a `formValues`.
      if (c[0]) {
        setFormValues((prevState) => ({
          ...prevState,
          siteName: c[0].siteName || prevState.siteName,
          metaTitle: c[0].metaTitle || prevState.metaTitle,
          metaDescription: c[0].metaDescription || prevState.metaDescription,
          articleContentFirst:
            c[0].articleContentFirst || prevState.articleContentFirst,
          articleContentSecond:
            c[0].articleContentSecond || prevState.articleContentSecond,
          stare: c[0].stare || prevState.stare,
          categorie: c[0].categorie || prevState.categorie,
          judet: c[0].judet || prevState.judet,
          localitate: c[0].localitate || prevState.localitate,
          telefonUnu: c[0].telefonUnu || prevState.telefonUnu,
          telefonDoi: c[0].telefonDoi || prevState.telefonDoi,
          emailUnu: c[0].emailUnu || prevState.emailUnu,
          emailDoi: c[0].emailDoi || prevState.emailDoi,
          websiteUnu: c[0].websiteUnu || prevState.websiteUnu,
          websiteDoi: c[0].websiteDoi || prevState.websiteDoi,
          facebook: c[0].facebook || prevState.facebook,
          googlePlus: c[0].googlePlus || prevState.googlePlus,
          facebookPageId: c[0].facebookPageId || prevState.facebookPageId,
          codPostal: c[0].codPostal || prevState.codPostal,
          adresa: c[0].adresa || prevState.adresa,
          harta: c[0].harta || prevState.harta,
          idGalerieFoto: c[0].idGalerieFoto || prevState.idGalerieFoto,
          cuvinteCheieImaginiGalerie:
            c[0].cuvinteCheieImaginiGalerie ||
            prevState.cuvinteCheieImaginiGalerie,
        }));

        setDocumentId(c[0].documentId);

        setLogoImg([c[0].logo || c[0].logo]);
        setPropertySelectedImgs(c[0].imagini.imgs || c[0].imagini.imgs);
        const loc = await handleQueryFirestoreSubcollection(
          "Localitati",
          "judet",
          c[0].judet
        );
        console.log("aici...", loc);
        setLocalitati(loc);
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  const handleGetAdiacentData = async () => {
    let categorii = await handleGetFirestore("Categorii");
    console.log("categorii....", categorii);
    setCategorii([...categorii]);
    let judete = await handleGetFirestore("Judete");
    console.log("judete....", judete);
    setJudete([...judete]);
  };

  useEffect(() => {
    handleGetAdiacentData();
    console.log("test......", propertySelectedImgs);
    if (id) {
      if (id.length > 0) {
        handleQuery();
      }
    }
  }, []);

  // Handle single image selection
  const singleImage = (e) => {
    const file = e.target.files[0]; // Get the selected file
    console.log("test..here...", file.name);
    if (file) {
      // Check if the file is already selected
      const isExist = logoImg.some(
        (existingFile) => existingFile.name === file.name
      );

      if (!isExist) {
        setLogoImg([file]); // Replace the current file
        setIsNewLogo(true);
      } else {
        alert("This image is already selected!");
      }
    }
  };

  return (
    <>
      <MobileMenu />
      <div className="dashboard_sidebar_menu">
        <div
          className="offcanvas offcanvas-dashboard offcanvas-start"
          tabIndex="-1"
          id="DashboardOffcanvasMenu"
          data-bs-scroll="true"
        >
          <SidebarMenu />
        </div>
      </div>

      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid ovh">
          <div className="row">
            <div className="col-lg-12 maxw100flex-992">
              <div className="row">
                <div className="col-lg-12 mb10">
                  <div className="breadcrumb_content style2 mb30-991">
                    <BreadCrumb title="Dashboard" subTitle="Adauga Firme" />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="my_dashboard_review">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="mb30">Setari Media</h3>
                      </div>

                      <LogoUpload
                        singleImage={singleImage}
                        deleteLogo={deleteLogo}
                        logoImg={logoImg}
                        isEdit={isEdit}
                        isNewImage={isNewLogo}
                      />
                    </div>
                  </div>
                  <div className="my_dashboard_review mt30">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="mb30">Setari principale</h3>
                      </div>

                      <CreateList
                        handleInputChange={handleInputChange}
                        handleJudetChange={handleJudetChange}
                        formValues={formValues}
                        categorii={categorii}
                        judete={judete}
                        localitati={localitati}
                      />
                    </div>
                  </div>

                  <div className="my_dashboard_review mt30">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="mb30">Setari Date de Contact</h3>
                      </div>

                      <DateContact
                        handleInputChange={handleInputChange}
                        formValues={formValues}
                        handleLocationSelect={handleLocationSelect}
                      />
                    </div>
                  </div>

                  <div className="my_dashboard_review mt30">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="mb30">Galerie foto</h3>
                      </div>

                      <GalerieFotoSection
                        handleInputChange={handleInputChange}
                        formValues={formValues}
                        deleteImage={deleteImage}
                        multipleImage={multipleImage}
                        propertySelectedImgs={propertySelectedImgs}
                        isEdit={isEdit}
                        isNewImage={isNewImage}
                      />
                    </div>
                  </div>

                  <div className="my_dashboard_review mt30">
                    <div className="col-lg-12">
                      <h3 className="mb30">Setari Continut</h3>
                    </div>
                    <PropertyMediaUploader
                      handleContentChangeFirst={handleContentChangeFirst}
                      contentFirst={formValues.articleContentFirst}
                      handleContentChangeSecond={handleContentChangeSecond}
                      contentSecond={formValues.articleContentSecond}
                      successMessage={successMessage}
                    />
                  </div>

                  <div className="col-xl-12 mt-3">
                    <div className="my_profile_setting_input">
                      <button
                        className="btn btn1 float-start"
                        onClick={handleReset}
                      >
                        Resetare
                      </button>
                      {isEdit ? (
                        <button
                          className="btn btn2 float-end"
                          onClick={handleSubmit}
                        >
                          {isLoading ? "Se încarcă..." : "Actualizeaza"}
                        </button>
                      ) : (
                        <button
                          className="btn btn2 float-end"
                          onClick={handleSubmit}
                        >
                          {isLoading ? "Se încarcă..." : "Adaugare"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isLoading && <CommonLoader />}
      </section>
    </>
  );
};

export default Index;
