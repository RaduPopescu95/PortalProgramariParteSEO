import Link from "next/link";

const Categorie = ({ judet, localitati }) => {
  return (
    <>
      {localitati
        ? localitati.map((localitate, index) => (
            <li key={index}>
              <Link
                href={`/firme-amenajari-spatii-verzi-${localitate.siteName.toLowerCase()}`}
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
