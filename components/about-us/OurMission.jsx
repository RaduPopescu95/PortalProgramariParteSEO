import Image from "next/image";
import PopupVideo from "../common/PopupVideo";

const OurMission = () => {
  const missionContent = [
    {
      id: 1,
      icon: "flaticon-user",
      number: "80,123",
      meta: "sa facem totul mai simplu pentru tine",
    },
    {
      id: 2,
      icon: "flaticon-home",
      number: "$74 Billion",
      meta: "sa te ajutam sa economisesti timp, punandu-ti la dispozitie toate datele necesare pentru o programare ITP rapida",
    },
    {
      id: 3,
      icon: "flaticon-home",
      number: "$468 Million",
      meta: "sa iti oferim gasesti doar continut relevant, nimic care sa te distraga, ci doar ce ai nevoie despre statiile ITP din apropierea ta si noutatile din acest domeniu",
    },
    {
      id: 4,
      icon: "flaticon-home",
      number: "$468 Million",
      meta: "sa iti punem la dispozitie o diversitate de oferte de la furnizori de incredere",
    },
  ];

  return (
    <>
      <div className="col-lg-8 col-xl-7">
        <div className="about_content">
          <p className="large">
            Conceptul de platforma online care grupeaza statii ITP si informatii
            din domeniu nu este nou. Noi dorim sa facem mai mult decat atat - sa
            ne punem amprenta proprie si sa oferim o mana de ajutor, cu
            prietenie. De aceea am selectat atent partenerii si am adaugat cele
            mai importante informatii din domeniu, totul aici, pe
            ITPService.com.
          </p>
          <h2>Ce este ITPService.com?</h2>
          <p>
            O platforma care gazduieste statii ITP atent selectionate. Pentru a
            gasi statia ITP din zona ta, te rugam sa folosesti functia cauta,
            selectand zona dorita. Exemplu: statie itp Brasov.
          </p>
          <p>
            Conceptul de platforma online nu este ceva nou. In ultima perioada
            au aparut foarte multe platforme in diverse domenii de activitate,
            insa noi am dorit sa realizam mai mult decat atat - sa ne punem
            amprenta proprie si sa oferim o mana de ajutor, cu mult drag. De
            aceea am plecat la drum cu aceste promisiuni:
          </p>

          <ul className="ab_counting">
            {missionContent.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <div className="about_counting">
                  <div className="icon">
                    <span className={`${item.icon}`}></span>
                  </div>
                  <div className="details">
                    <p className="mb-2">{item.meta}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* End .ab_counting */}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-5">
        <div className="about_thumb">
          <Image
            width={461}
            height={509}
            priority
            className="img-fluid w100 cover"
            src="/assets/images/about/1.jpg"
            alt="1.jpg"
          />
          {/* <PopupVideo /> */}
        </div>
      </div>
    </>
  );
};

export default OurMission;
