const Categorie = ({ localitati }) => {
  return (
    <>
      {localitati.map((localitate, index) => (
        <li key={index}>
          <a href="#">
            <i className="fa fa-caret-right mr10"></i>
            {localitate.siteName}
          </a>
        </li>
      ))}
    </>
  );
};

export default Categorie;
