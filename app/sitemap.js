import { toUrlSlug } from "@/utils/commonUtils";
import {
  handleGetFirestore,
  handleQueryFirestore,
} from "@/utils/firestoreUtils";
import { transferaImagini } from "@/utils/localProjectlUtils";
import { replaceSpacesWithDashes } from "@/utils/strintText";
import { parseDateToISO } from "@/utils/timeUtils";

export const revalidate = 3600;
const URL = `https://firmeamenajarigradina.ro`;

export default async function sitemap() {
  console.log("Fetching 'Judete' data from Firestore...");
  const judeteData = await handleGetFirestore("Judete");
  console.log("Judete Data:", judeteData);

  console.log("Fetching 'Parteneri' from Firestore...");
  const parteners = await handleGetFirestore("Firme");
  let parteneri = await transferaImagini(parteners);
  console.log("Parteneri Data:", parteneri);

  const seenUrls = new Set();

  console.log("Processing 'localitatiCategorii'...");
  const localitatiCategorii = parteneri.reduce((acc, partener) => {
    if (partener.categorie && partener.localitate) {
      const url = `${URL}/${replaceSpacesWithDashes(
        partener.categorie.toLowerCase()
      )}-${replaceSpacesWithDashes(partener.localitate.toLowerCase())}`;
      if (!seenUrls.has(url)) {
        seenUrls.add(url);
        acc.push({
          url: url,
          lastModified: parseDateToISO(partener.firstUploadDate),
        });
        console.log(`Added localicateCategorie URL: ${url}`);
      }
    }
    return acc;
  }, []);
  console.log(
    "Finished processing 'localitatiCategorii'.",
    localitatiCategorii
  );

  console.log("Processing 'localitati'...");
  const localitati = parteneri.reduce((acc, partener) => {
    console.log("partener...sitemap", partener); // pentru verificare
    if (partener.judet) {
      const url = `${URL}/amenajari-gradini-${replaceSpacesWithDashes(
        partener.localitate.toLowerCase()
      )}`;
      if (!seenUrls.has(url)) {
        seenUrls.add(url);

        const imageUrl =
          partener.imagini &&
          partener.imagini.imgs &&
          partener.imagini.imgs[0] &&
          partener.imagini.imgs[0].finalUri
            ? partener.imagini.imgs[0].finalUri
            : null;

        const sitemapEntry = {
          url: url,
          lastModified: parseDateToISO(partener.firstUploadDate),
        };

        if (imageUrl) {
          console.log("has image url....");
          sitemapEntry.image = {
            url: imageUrl,
          };
        } else {
          console.log("does not have image url....");
        }

        acc.push(sitemapEntry);
        console.log(`Added localitate URL: ${url}`);
        if (imageUrl) {
          console.log(`With image: ${imageUrl}`);
        }
      }
    }
    return acc;
  }, []);

  console.log("Finished processing 'localitati'.", localitati);

  console.log("Processing 'judete'...");
  const judete = parteneri.reduce((acc, partener) => {
    if (partener.categorie && partener.localitate) {
      const url = `${URL}/${replaceSpacesWithDashes(
        partener.judet.toLowerCase()
      )}`;
      if (!seenUrls.has(url)) {
        seenUrls.add(url);
        acc.push({
          url: url,
          lastModified: parseDateToISO(partener.firstUploadDate),
        });
        console.log(`Added localicateCategorie URL: ${url}`);
      }
    }
    return acc;
  }, []);
  console.log("Finished processing 'judete'.", judete);

  console.log("Generating static routes...");
  const routes = [
    "/",
    "/despre-noi",
    "/cum-functioneaza",
    "/politica-cookie",
    "/politica-confidentialitate",
    "/cauta",
    "/amenajari-gradini",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: "2024-09-26T00:00:00.000Z",
  }));
  console.log("Static routes:", routes);

  const fullSitemap = [
    ...routes,
    ...judete,
    ...localitatiCategorii,
    ...localitati,
  ];
  console.log("Full Sitemap Generated:", fullSitemap);
  return fullSitemap;
}
