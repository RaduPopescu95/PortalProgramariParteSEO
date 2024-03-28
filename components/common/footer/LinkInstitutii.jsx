import Image from "next/image";

const LinkInstitutii = () => {
  return (
    <div className="footer_mailchimp_form">
      <div className="row">
        {/* img-fluid pentru ca imaginea să fie responsive */}
        <div className="col-12 col-md-auto my-3 my-md-0">
          <Image
            width={250}
            height={62}
            className="img-fluid"
            src="/assets/anpc-sal.webp"
            alt="ANPC Sal"
          />
        </div>

        {/* img-fluid pentru ca imaginea să fie responsive */}
        <div className="col-12 col-md-auto ms-md-2">
          <Image
            width={250}
            height={62}
            className="img-fluid"
            src="/assets/anpc-sol.png"
            alt="ANPC Sol"
          />
        </div>
      </div>
    </div>
  );
};

export default LinkInstitutii;
