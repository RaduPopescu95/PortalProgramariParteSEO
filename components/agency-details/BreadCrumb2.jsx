import Image from "next/image";
import BreadCrumb from "../common/BreadCrumb";

const BreadCrumbBlog = () => {
  return (
    <div className="breadcrumb_content style2 d-flex align-items-center">
      <div style={{ maxWidth: "150px" }}>
        {" "}
        {/* Elimină maxHeight pentru a permite div-ului să se ajusteze la conținut */}
        <Image
          width={500}
          height={300}
          src="/assets/lotoexample.png"
          alt="Logo"
          layout="intrinsic" // Schimbă la layout="intrinsic" pentru a permite redimensionarea bazată pe maxWidth
        />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <h2 className="breadcrumb_title">Nume agentie</h2>
      </div>
    </div>
  );
};

export default BreadCrumbBlog;
