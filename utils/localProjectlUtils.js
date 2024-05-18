import {
  handleGetFirestore,
  handleQueryDoubleParam,
  handleQueryFirestore,
} from "@/utils/firestoreUtils";

export async function fetchFirme(params) {
  let firme = [];

  if (params) {
    console.log("here...hee....", params);

    if (Array.isArray(params)) {
      console.log("testing...here....test", params);
      const parts = params[0].split("-");
      const decodedPart = decodeURIComponent(parts[1]);

      if (parts[0] === "clinici") {
        console.log("testing...is....clinici", params);
        let localitate = parts[1];
        let decodedLocalitate = decodeURIComponent(localitate);
        let localitateDatorita =
          decodedLocalitate.charAt(0).toUpperCase() +
          decodedLocalitate.slice(1);

        firme = await handleQueryFirestore(
          "Firme",
          "localitate",
          localitateDatorita
        );
        console.log("Test here localitate....", firme);
      } else {
        let categorie = parts[0];
        let localitate = parts[1];

        let decodedCategorie = decodeURIComponent(categorie);
        let decodedLocalitate = decodeURIComponent(localitate);

        let categorieDatorita =
          decodedCategorie.charAt(0).toUpperCase() + decodedCategorie.slice(1);
        let localitateDatorita =
          decodedLocalitate.charAt(0).toUpperCase() +
          decodedLocalitate.slice(1);

        firme = await handleQueryDoubleParam(
          "Firme",
          "categorie",
          categorieDatorita,
          "localitate",
          localitateDatorita
        );
        console.log("Test here localitate....", firme);
      }

      // Verifică dacă stringul decodificat conține cuvântul "sector"
      if (decodedPart.includes("sector")) {
        console.log("Partea conține 'sector'", decodedPart);

        let sectorDorit =
          decodedPart.charAt(0).toUpperCase() + decodedPart.slice(1);
        console.log("Test here sector dorit....", sectorDorit);

        firme = await handleQueryFirestore("Firme", "sector", sectorDorit);
        console.log("Test here localitate....", firme);
      }
    } else {
      console.log("here...hee....is not array...", params);

      firme = await handleGetFirestore("Firme");
    }
  } else {
    firme = await handleGetFirestore("Firme");
  }

  return firme;
}
