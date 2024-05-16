import React from "react";
import Button from "@/components/common/CommonButton";

const PromotionSection = ({ params }) => {
  const parts = params[0].split("-");
  let localitate = parts[1];
  let decodedLocalitate = decodeURIComponent(localitate);

  let localitateDatorita =
    decodedLocalitate.charAt(0).toUpperCase() + decodedLocalitate.slice(1);

  const missionContent = [
    {
      id: 1,
      icon: "flaticon-right-arrow",
      meta: "Certificat de inmatriculare autovehiculului sau autorizatia provizorie de circulatie;",
    },
    {
      id: 2,
      icon: "flaticon-right-arrow",
      meta: "Cartea de identitate a autovehiculului (in cazul in care masina este achizitionata in leasing sau apartine unei societati comerciale este acceptata o copie dupa cartea de identitate a masinii, stampilata de proprietar, pe care sa apara si mentiunea „conform cu originalul”;",
    },
    {
      id: 3,
      icon: "flaticon-right-arrow",
      meta: "Cartea de identitate a conducatorului auto;",
    },
    {
      id: 4,
      icon: "flaticon-right-arrow",
      meta: "Polita RCA, valabila la data la care se efectueaza ITP;",
    },
  ];

  return (
    <>
      <section className="our-agent-single pt-2 bgc-f7 pb-3 md-mt-0">
        <div className="col-12">
          <div className="about_content">
            <h3 className="mb-4">
              Aceasta pagina este disponibila pentru o singura clinica din{" "}
              {localitateDatorita}
            </h3>
            <h3 className="mb-4">
              Momentan nu avem un partener in aceasta localitate.
            </h3>
            <div id="contact-form">
              <h3 className="mb-4">
                Daca detii o statie ITP si doresti promovare poti folosi butonul
                <span className="d-inline-flex align-items-center mx-2">
                  <Button
                    className="btnSecondary"
                    style={{ minWidth: "calc(30% - 10px)" }}
                    navigare={"inscrie-clinica"}
                  >
                    Înscrie o clinică{" "}
                    <span className="flaticon-right-arrow ml-10" />
                  </Button>
                </span>
                sau ne poti contacta la adresa de e-mail: office@sitename.com.
              </h3>
            </div>
            <p className="large mb-4">
              In cazul in care esti un client si doresti sa faci inspectia
              tehnica periodica a masinii tale in Badulesti, trebuie sa stii de
              ce documente ai nevoie.
            </p>

            <ul className="ab_counting list-unstyled mb-4">
              {missionContent.map((item) => (
                <li className="mb-4" key={item.id}>
                  <div className="about_counting d-flex align-items-center">
                    <div className="icon me-2">
                      <span className={item.icon}></span>
                    </div>
                    <div className="details">
                      <p className="mb-0">{item.meta}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromotionSection;
