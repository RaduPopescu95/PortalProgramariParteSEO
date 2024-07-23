import {
  handleGetFirestore,
  handleQueryDoubleParam,
  handleQueryFirestore,
  handleQueryFirestoreSubcollection,
} from "@/utils/firestoreUtils";
import { replaceDashesWithSpaces, replaceSpacesWithDashes } from "./strintText";

export async function fetchFirme(parametri) {
  console.log("parametri..start.....passed..here...", parametri);
  let firme = [];

  try {
    if (parametri) {
      console.log("here...hee....", parametri);

      // Preia categoriile din baza de date și construiește un array de categorii
      let cats = await handleGetFirestore("Categorii");
      let categorii = cats.map((cat) =>
        cat.siteName.toLowerCase().replace(/\s+/g, "-")
      );

      if (parametri.clinici) {
        console.log("testing...here....test....s", parametri.clinici);
        const parts = parametri.clinici.split("-");
        console.log("testing...here....test....parts...", parts);

        let matchedCategorie = "";
        let matchedIndex = -1;
        categorii.push("clinici");
        // Identifică cea mai lungă potrivire posibilă pentru categoria din URL
        for (let i = 0; i < parts.length; i++) {
          let potentialCategorie = parts.slice(0, i + 1).join("-");
          if (categorii.includes(potentialCategorie)) {
            matchedCategorie = potentialCategorie;
            matchedIndex = i;
          }
        }

        let localitate = parts.slice(matchedIndex + 1).join("-");
        console.log("Categorie dedusă:", matchedCategorie);
        console.log("Localitate dedusă:", localitate);

        let decodedCategorie = replaceDashesWithSpaces(matchedCategorie);
        console.log("decoded....cat", decodedCategorie);
        console.log("before decoded....loc", localitate);
        let decodedLocalitate = replaceDashesWithSpaces(localitate);
        console.log("decoded....loc", decodedLocalitate);
        let categorieDatorita = decodedCategorie;
        // decodedCategorie.charAt(0).toUpperCase() + decodedCategorie.slice(1);
        let localitateDatorita = decodedLocalitate;
        // decodedLocalitate.charAt(0).toUpperCase() +
        // decodedLocalitate.slice(1);

        if (localitate.length === 0 && parts[0] !== "clinici") {
          firme = await handleQueryFirestore(
            "Firme",
            "categorieQuery",
            categorieDatorita
          );
        }

        // Aplică logica specifică pentru cazul "clinici"
        if (parts[0] === "clinici" && localitate.length !== 0) {
          firme = await handleQueryFirestore(
            "Firme",
            "localitateQuery",
            localitateDatorita
          );
          console.log("Test here localitate....", firme.length);
        } else if (localitate.length !== 0 && parts[0] !== "clinici") {
          console.log("Test here categorieDatorita....", categorieDatorita);
          console.log("Test here localitateDatorita....", localitateDatorita);
          firme = await handleQueryDoubleParam(
            "Firme",
            "categorieQuery",
            categorieDatorita,
            "localitateQuery",
            localitateDatorita
          );
          console.log("Test here localitate....", firme);
        }

        // Verifică dacă localitatea decodificată conține cuvântul "sector"
        // if (decodedLocalitate.includes("sector")) {
        //   console.log("Partea conține 'sector'", decodedLocalitate);
        //   let sectorDorit =
        //     decodedLocalitate.charAt(0).toUpperCase() +
        //     decodedLocalitate.slice(1);
        //   firme = await handleQueryFirestore("Firme", "sector", sectorDorit);
        //   console.log("Test here sector dorit....", firme);
        // }
      } else {
        console.log(
          "here...hee....is not clinici in parametri.clinici...",
          parametri
        );
        firme = await handleGetFirestore("Firme");
      }
    } else {
      firme = await handleGetFirestore("Firme");
    }
  } catch (error) {
    console.error("An error occurred during the fetchFirme execution:", error);
    throw error; // Throw the error to be handled by the caller or logging system
  }
  let firmeActualizate = await transferaImagini(firme);
  console.log("firmeActualizate......", firmeActualizate);
  return firmeActualizate;
}

export async function fetchFirmeParams() {
  console.log("Start.....fetchFirmeParams....");
  // Apelează funcția handleGetFirestore pentru a obține datele din colecția "Firme"
  const firme = await handleGetFirestore("Firme");

  // Folosim un Set pentru a asigura stocarea unor combinații unice
  const uniqueCategoryLocations = new Set();

  // Iterăm prin fiecare firmă pentru a construi și adăuga stringurile necesare
  firme.forEach((firma) => {
    if (firma.categorie && firma.localitate) {
      // Combină categoria și localitatea și adaugă în Set
      const categoryLocation = `${replaceSpacesWithDashes(
        firma.categorie
      ).toLowerCase()}-${replaceSpacesWithDashes(
        firma.localitate
      ).toLowerCase()}`;
      uniqueCategoryLocations.add(categoryLocation);

      // Adaugă și combinația suplimentară pentru clinici și localitate
      // const clinicsLocation = `firme-amenajari-spatii-verzi-${replaceSpacesWithDashes(
      //   firma.localitate
      // ).toLowerCase()}`;
      // uniqueCategoryLocations.add(clinicsLocation);
    }
  });
  console.log("uniqueCategoryLocations...", uniqueCategoryLocations);
  // Convertim Set-ul într-un array pentru a putea fi returnat și utilizat în aplicație
  return Array.from(uniqueCategoryLocations);
}

export async function fetchJudeteParams() {
  // Apelează funcția handleGetFirestore pentru a obține datele din colecția "Firme"
  const firme = await handleGetFirestore("Judete");

  // Folosim un Set pentru a asigura stocarea unor combinații unice
  const uniqueCategoryLocations = new Set();

  // Iterăm prin fiecare firmă pentru a construi și adăuga stringurile necesare
  firme.forEach((firma) => {
    if (firma.siteName) {
      // Combină categoria și localitatea și adaugă în Set
      const judetParam = `${replaceSpacesWithDashes(
        firma.siteName
      ).toLowerCase()}`;
      uniqueCategoryLocations.add(judetParam);
    }
  });

  return Array.from(uniqueCategoryLocations);
}

export async function transferaImagini(firme) {
  console.log("Start........");
  for (const firma of firme) {
    // Verifică dacă lista de imagini este goală

    // Găsește o firmă care are același idGalerieFoto și are imagini

    console.log("firma cu imagini...", firma.idGalerieFoto);

    // Dacă nu există o firmă cu imagini în memoria locală, interoghează baza de date
    const firmWithImage = await handleQueryFirestore(
      "Imagini",
      "idGalerieFoto",
      firma.idGalerieFoto
    );
    console.log("firma cu imagini.........", firmWithImage[0].imagini);

    firma.imagini = firmWithImage[0].imagini;

    console.log("firma cu imagini......s...", firma.imagini.imgs);
  }
  console.log("finall....");
  return firme;
}
