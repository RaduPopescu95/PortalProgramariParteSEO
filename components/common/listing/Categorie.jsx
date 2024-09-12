import Link from "next/link";

const Categorie = ({ judet, localitati }) => {
  return (
    <>
      {localitati
        ? localitati.map((localitate, index) => (
            <li key={index}>
              <Link
                href={`/amenajari-gradini-${localitate.siteName.toLowerCase()}`}
              >
                <i className="fa fa-caret-right mr10"></i>
                {localitate.siteName}
              </Link>
            </li>
          ))
        : null}
    </>
  );
};

export default Categorie;
