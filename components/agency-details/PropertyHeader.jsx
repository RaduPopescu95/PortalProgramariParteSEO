import Image from "next/image";
import FormularContact from "./FormularContact";

const PropertyHeader = ({ firma }) => {
  return (
    <div className="feat_property list agency">
      <div className="details ">
        <div className="tc_content pt10 d-flex flex-column justify-content-center align-items-center">
          <Image
            width={100}
            height={100}
            className="logo1 img-fluid"
            src={firma?.logo?.finalUri}
            alt="Logo"
            layout="intrinsic"
          />
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h3 className="m-0 fw-bold fz20">{firma?.siteName}</h3>
          </div>
        </div>
      </div>

      <a
        href={`tel:${firma?.telefonUnu}`}
        className="details"
        style={{ cursor: "pointer" }}
      >
        <div className="tc_content">
          <h3>Fa-ti programare!</h3>
          <div className="d-flex justify-content-start align-items-center w-100">
            <span className="flaticon-smartphone-call"></span>
            <p className="m0">{firma?.telefonUnu}</p>
          </div>
        </div>
      </a>

      <a
        href={`https://wa.me/${firma?.telefonUnu}`}
        className="details"
        style={{ cursor: "pointer" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="tc_content">
          <h3>Contactează-ne pe WhatsApp</h3>
        </div>
      </a>

      <FormularContact />
    </div>
  );
};

export default PropertyHeader;
