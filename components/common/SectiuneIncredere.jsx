import Link from "next/link";
import blogs from "../../data/blogs";
import Image from "next/image";

const SectiuneIncredere = () => {
  return (
    <>
      <div className="col-md-6 col-lg-4 col-xl-4">
        <div className="for_blog feat_property sectiune-incredere">
          <div className="p10">
            <Image
              src="/assets/categorii/amenajari-gradini-si-spatii-verzi.svg" // Calea relativă la directorul public
              alt="Tooth Icon" // Adaugă un text alternativ pentru accesibilitate
              width={50} // Specifică lățimea dorită
              height={50} // Specifică înălțimea dorită
            />
          </div>
          <div className="details">
            <div className="tc_content p10">
              <h2 className="fz30">Gradini rezidentiale</h2>
              <p className="text-thm">
                Pentru a crea o gradina sau un spatiu verde in conformitate cu
                stilul ambiental dorit, specialistii prezenti pe portal urmaresc
                anumite principii care trebuie respectate in orice etapa a
                proiectului: proportia, ordinea, unitatea, si repetitia. Aceste
                principia de amenajare peisagistica sunt fundamentale in
                constructia, amenajarea si intretinerea gradinilor rezidentiale.
              </p>
            </div>
            {/* <div className="fp_footer">
                <ul className="fp_meta float-end pr10">
                  <li className="list-inline-item">
                    <Link href="/">{item.posterName} <span className="flaticon-right-arrow ml10"/></Link>
                  </li>
                </ul>
              
              </div> */}
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 col-xl-4">
        <div className="for_blog feat_property sectiune-incredere">
          <div className="p10">
            <Image
              src="/assets/categorii/amenajari-gradini-si-spatii-verzi.svg" // Calea relativă la directorul public
              alt="Tooth Icon" // Adaugă un text alternativ pentru accesibilitate
              width={50} // Specifică lățimea dorită
              height={50} // Specifică înălțimea dorită
            />
          </div>
          <div className="details">
            <div className="tc_content p10">
              <h2 className="fz30">Gradini si spatii verzi comerciale</h2>
              <p className="text-thm">
                Un serviciu profesional specializat in amenajarea si mentenanta
                peisajului comercial va crea un spatiu in aer liber care combina
                frumusetea si functionalitatea si satisface nevoile unice ale
                oricarui tip de afacere.
              </p>
            </div>
            {/* <div className="fp_footer">
                <ul className="fp_meta float-end pr10">
                  <li className="list-inline-item">
                    <Link href="/">{item.posterName} <span className="flaticon-right-arrow ml10"/></Link>
                  </li>
                </ul>
              
              </div> */}
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 col-xl-4">
        <div className="for_blog feat_property sectiune-incredere">
          <div className="p10">
            <Image
              src="/assets/categorii/amenajari-gradini-si-spatii-verzi.svg" // Calea relativă la directorul public
              alt="Tooth Icon" // Adaugă un text alternativ pentru accesibilitate
              width={50} // Specifică lățimea dorită
              height={50} // Specifică înălțimea dorită
            />
          </div>
          <div className="details">
            <div className="tc_content p10">
              <h2 className="fz30">Domeniul public: spatii verzi si parcuri</h2>
              <p className="text-thm">
                Amenajarile peisagistice aduc natura mai aproape de mediul in
                care traim, iar calitatea vietii umane este direct influentata
                de mediul in care omul locuieste, lucreaza si unde se relaxeaza.
                Amenajarea peisagistica a spatiilor verzi in asezarile urbane
                are un rol extrem de important in procesul de organizare
                arhitecturala, de design interior si ambiental, deoarece, pe
                langa rolul sau decorativ, influenteaza semnificativ starea de
                spirit a oamenilor.
              </p>
            </div>
            {/* <div className="fp_footer">
                <ul className="fp_meta float-end pr10">
                  <li className="list-inline-item">
                    <Link href="/">{item.posterName} <span className="flaticon-right-arrow ml10"/></Link>
                  </li>
                </ul>
              
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectiuneIncredere;
