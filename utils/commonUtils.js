import { replaceDashesWithSpaces } from "./strintText";

export const toUrlSlug = (string) => {
  return string
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
};

export function validateEmail(email) {
  const re =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  console.log(lat1);
  console.log(lon1);
  console.log(lat2);
  console.log(lon2);
  const R = 6371e3; // Raza Pământului în metri
  const φ1 = (lat1 * Math.PI) / 180; // φ, λ în radiani
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distanța în metri
};

export const formatPathname = (pathname) => {
  // Îndepărtează primul `/` dacă există
  const trimmedPathname = pathname.startsWith("/")
    ? pathname.slice(1)
    : pathname;

  // Separă calea în segmente bazate pe `/`
  const segments = trimmedPathname.split("/");

  // Formatează fiecare segment
  const formattedSegments = segments.map((segment) => {
    // Decodifică componenta URL
    const decodedSegment = replaceDashesWithSpaces(segment);
    console.log("decodedSegment....", decodedSegment);
    // Înlocuiește `-` cu spațiu și capitalizează fiecare cuvânt
    return decodedSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  });

  // Dacă există mai mult de un segment, returnează array-ul formatat
  // Altfel, returnează primul element din array (unicul segment)
  return formattedSegments.length > 1
    ? formattedSegments
    : formattedSegments[0];
};

export const getEmbedUrl = (url) => {
  const params = new URLSearchParams(new URL(url).search);
  const q = params.get("q");
  return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(
    q
  )}`;
};

export const filtrareOferte = (oferte, searchQueryParteneri) => {
  // Împărțim query-ul de căutare în cuvinte individuale
  const searchTerms = searchQueryParteneri
    .split(/\s+/)
    .map((term) => term.toLowerCase());

  // Funcție care verifică dacă toate cuvintele de căutare apar în text
  const matchesSearch = (text) => {
    const lowercasedText = text.toLowerCase();
    return searchTerms.every((term) => lowercasedText.includes(term));
  };

  // Filtrăm partenerii pe baza denumirii brandului, categoriilor, adresei, descrierii, telefonului și emailului
  const oferteGasiti = oferte.filter(
    (partener) =>
      matchesSearch(partener.siteName) ||
      matchesSearch(partener.metaTitle) ||
      matchesSearch(partener.metaDescription) ||
      matchesSearch(partener.categorie) ||
      matchesSearch(partener.articleContentSecond) ||
      matchesSearch(partener.articleContentFirst)
  );

  return oferteGasiti;
};
