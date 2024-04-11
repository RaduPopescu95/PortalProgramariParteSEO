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

export const formatPathname = (pathname) => {
  // Îndepărtează primul `/` dacă există
  const trimmedPathname = pathname.startsWith("/")
    ? pathname.slice(1)
    : pathname;

  // Separă calea în segmente bazate pe `/`
  const segments = trimmedPathname.split("/");

  // Formatează fiecare segment
  const formattedSegments = segments.map((segment) => {
    // Înlocuiește `-` cu spațiu și capitalizează fiecare cuvânt
    return segment
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
