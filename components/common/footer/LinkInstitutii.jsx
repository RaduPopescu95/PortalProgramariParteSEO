"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const LinkInstitutii = () => {
  const router = useRouter();
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
            onClick={() => router.push("https://anpc.ro/ce-este-sal/")}
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
            onClick={() =>
              router.push(
                "https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage"
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LinkInstitutii;
