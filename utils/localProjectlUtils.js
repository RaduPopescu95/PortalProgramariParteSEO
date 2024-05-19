import {
  handleGetFirestore,
  handleQueryDoubleParam,
  handleQueryFirestore,
} from "@/utils/firestoreUtils";
import { replaceDashesWithSpaces } from "./strintText";

export async function fetchFirme(parametri) {
  console.log("parametri..start.....passed..here...", parametri);
  let firme = [];

  if (parametri) {
    console.log("here...hee....", parametri);

    if (parametri.clinici) {
      //   if (parametri.length > 1) {
      //     return null; // Indică faptul că trebuie să facem redirect
      //   }
      console.log("testing...here....test....s", parametri.clinici);
      const parts = parametri.clinici.split("-");
      const decodedPart = replaceDashesWithSpaces(parts[1]);

      if (parts[0] === "clinici") {
        console.log("testing...is....clinici", parametri.clinici);
        let localitate = parts[1];
        let decodedLocalitate = replaceDashesWithSpaces(localitate);
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

        let decodedCategorie = replaceDashesWithSpaces(categorie);
        let decodedLocalitate = replaceDashesWithSpaces(localitate);

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
      console.log(
        "here...hee....is not clinici in parametri.clinici...",
        parametri
      );

      firme = await handleGetFirestore("Firme");
    }
  } else {
    firme = await handleGetFirestore("Firme");
  }

  return firme;
}
