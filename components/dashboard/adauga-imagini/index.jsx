"use client";

import BreadCrumb from "@/components/common/BreadCrumb";
import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import CreateList from "./CreateList";
import DetailedInfo from "./DetailedInfo";
import FloorPlans from "./FloorPlans";
import LocationField from "./LocationField";
import PropertyMediaUploader from "./PropertyMediaUploader";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { uploadImage, uploadMultipleImages } from "@/utils/storageUtils";
import selectedFiles from "@/utils/selectedFiles";
import {
  handleQueryFirestore,
  handleUpdateFirestore,
  handleUploadFirestore,
} from "@/utils/firestoreUtils";
import GalerieFotoSection from "../adauga-firme/GalerieFotoSection";

const index = () => {
  // const [imaginiData, setFormValues] = useState({
  //   siteName: "",
  // });

  // Adăugarea unui nou state pentru mesajul de succes
  const [successMessage, setSuccessMessage] = useState("");
  const [documentId, setDocumentId] = useState(null);
  const [propertySelectedImgs, setPropertySelectedImgs] = useState([]);
  const [oldImageFileName, setOldImageFileName] = useState(null);
  const [isNewImage, setIsNewImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [deletedImages, setDeletedImages] = useState([]);
  const [imaginiData, setImaginiData] = useState({});

  const params = useParams();
  const router = useRouter();

  const id = params.id;

  let isEdit = id && id.length > 0 ? true : false;

  // Handle single image selection
  const singleImage = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      // Check if the file is already selected
      const isExist = propertySelectedImgs.some(
        (existingFile) => existingFile.name === file.name
      );

      if (!isExist) {
        setPropertySelectedImgs([file]); // Replace the current file
        setIsNewImage(true);
      } else {
        alert("This image is already selected!");
      }
    }
  };

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setImaginiData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    console.log("Submitting form with values:", imaginiData);
    if (propertySelectedImgs.length === 0 && !imaginiData.idGalerieFoto) {
      console.log("No image length...");
      setSuccessMessage("Nu sunt adaugate imagini");
      setIsLoading(false);
      return;
    }

    try {
      if (isEdit) {
        let imagini;
        if (propertySelectedImgs.length !== 0) {
          imagini = await uploadMultipleImages(
            propertySelectedImgs,
            isEdit,
            "ImaginiFirme",
            deletedImages
          );
        }
        console.log("imaginiData....", imaginiData);

        const imageData = {
          idGalerieFoto: imaginiData.idGalerieFoto,
          cuvinteCheieImaginiGalerie: imaginiData.cuvinteCheieImaginiGalerie,
          imagini: imagini,
        };

        await handleUpdateFirestore(
          `Imagini/${imaginiData.documentId}`,
          imageData
        );

        setIsLoading(false);
      } else {
        const logo = await uploadImage(logoImg, false, "LogoFirme");

        imaginiData.logo = logo;
        let imagini;
        if (propertySelectedImgs.length !== 0) {
          imagini = await uploadMultipleImages(
            propertySelectedImgs,
            false,
            "ImaginiFirme",
            deletedImages
          );
        } else {
          const imgs = [];
          imagini = { imgs };
        }

        // Așteaptă finalizarea încărcării pentru "Imagini" și apoi dezactivează indicatorul de încărcare
        const imageData = {
          idGalerieFoto: imaginiData.idGalerieFoto,
          cuvinteCheieImaginiGalerie: imaginiData.cuvinteCheieImaginiGalerie,
          imagini: imagini,
        };
        await handleUploadFirestore(imageData, "Imagini");
        setIsLoading(false);
      }
      // Setarea mesajului de succes după finalizarea cu succes
      setSuccessMessage("Scriere realizată cu succes!");
      // Curățarea mesajului după 3 secunde
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      // Resetarea formularului
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
    if (isEdit) {
      setFormValues({
        siteName: "",
      });
      setPropertySelectedImgs([]);
      setOldImageFileName(propertySelectedImgs[0].fileName);
    } else {
      setFormValues({
        siteName: "",
      });
      setPropertySelectedImgs([]);
    }
  };

  const handleQuery = async () => {
    const numericId = parseInt(id, 10); // Convertește `id` din string în număr întreg.
    console.log("id....", typeof numericId);

    try {
      const c = await handleQueryFirestore("Imagini", "id", numericId);
      console.log("course...found..", c);
      setImaginiData(c[0]);
      // Presupunând că `c` este un obiect care conține datele necesare,
      // actualizează state-ul `imaginiData` cu aceste date.
      // Asigură-te că structura obiectului `c` corespunde cu cea a `imaginiData`.
      if (c[0]) {
        // setFormValues((prevState) => ({
        //   ...prevState,
        //   // Aici exemplific cu câteva câmpuri, ajustează conform structurii obiectului `c[0]`.
        //   siteName: c[0].siteName || prevState.siteName,
        // }));
        console.log("test here...", [c[0].image]);
        setDocumentId(c[0].documentId);
        setPropertySelectedImgs(c[0].imagini.imgs || c[0].imagini.imgs);
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  useEffect(() => {
    console.log("test...");
    if (id) {
      if (id.length > 0) {
        handleQuery();
      }
    }
  }, []);

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      {/* <Header /> */}

      {/* <!--  Mobile Menu --> */}
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
      {/* End sidebar_menu */}

      {/* <!-- Our Dashbord --> */}
      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid ovh">
          <div className="row">
            <div className="col-lg-12 maxw100flex-992">
              <div className="row">
                {/* Start Dashboard Navigation */}
                <div className="col-lg-12">
                  <div className="dashboard_navigationbar dn db-1024">
                    <div className="dropdown">
                      <button
                        className="dropbtn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#DashboardOffcanvasMenu"
                        aria-controls="DashboardOffcanvasMenu"
                      >
                        <i className="fa fa-bars pr10"></i> Dashboard Navigation
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Dashboard Navigation */}

                <div className="col-lg-12 mb10">
                  <div className="breadcrumb_content style2 mb30-991">
                    <BreadCrumb title="Dashboard" subTitle="Adauga Imagini" />
                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-12">
                  <div className="my_dashboard_review">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="mb30">Setari principale</h3>
                      </div>

                      <GalerieFotoSection
                        handleInputChange={handleInputChange}
                        deleteImage={deleteImage}
                        multipleImage={multipleImage}
                        propertySelectedImgs={propertySelectedImgs}
                        isEdit={isEdit}
                        isNewImage={isNewImage}
                        imaginiData={imaginiData}
                      />
                      {/* End .col */}
                      <div className="col-lg-12">
                        <h3>{successMessage}</h3>
                      </div>
                    </div>
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
                          Actualizeaza
                        </button>
                      ) : (
                        <button
                          className="btn btn2 float-end"
                          onClick={handleSubmit}
                        >
                          Adaugare
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
