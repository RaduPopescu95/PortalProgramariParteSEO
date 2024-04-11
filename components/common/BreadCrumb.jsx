const BreadCrumb = ({ title = "", subTitle = "" }) => {
  return (
    <>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">{title}</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {subTitle}
        </li>
      </ol>
    </>
  );
};

export default BreadCrumb;
