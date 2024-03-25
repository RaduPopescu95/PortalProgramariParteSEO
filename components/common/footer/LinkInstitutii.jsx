'use client'

import Image from "next/image";

const LinkInstitutii = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="footer_mailchimp_form">
      <div className="d-flex align-items-center">
        <div className="col-auto">
                      <Image
  width={250}
  height={62}
              className="img-whp w-100 h-100 cover"
              src="/assets/anpc-sal.webp"
              alt="fp1.jpg"
            />
        </div>

        <div className="col-auto ms-2">
        <Image
  width={250}
  height={62}
              className="img-whp w-100 h-100 cover"
              src="/assets/anpc-sol.png"
              alt="fp1.jpg"
            />
        </div>
      </div>
    </div>
  );
};

export default LinkInstitutii;
