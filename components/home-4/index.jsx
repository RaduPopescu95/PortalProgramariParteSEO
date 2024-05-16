import Blogs from "../common/Blogs";
import GlobalHeroFilter from "../common/GlobalHeroFilter";
import MobileMenu from "../common/header/MobileMenu";
import FeaturedProperties from "./FeaturedProperties";
import FindProperties from "./FindProperties";
import Header from "./Header";
import HeroSlider from "./HeroSlider";
import LookingItem from "./LookingItem";
import Team from "./Team";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import PopupSignInUp from "../common/PopupSignInUp";
import PasiDeUrmat from "./PasiDeUrmat";
import Image from "next/image";
import Map from "../map/Map";
import Button from "../common/CommonButton";
import SectiuneIncredere from "../common/SectiuneIncredere";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      {/* <PopupSignInUp /> */}

      {/* <!-- 4th Home Slider --> */}
      <div className="home-four">
        <div className="container-fluid p0">
          <div className="main-banner-wrapper">
            <div className="arrow-style-2 banner-style-one ">
              <HeroSlider />
            </div>
          </div>
          {/* <!-- /.main-banner-wrapper --> */}
        </div>
        {/* End .container-fluid */}

        <div className="container home_iconbox_container">
          <div className="row posr mb25">
            <div className="col-lg-12">
              <div className="home_content home4">
                <div class="home-text w-100 w-md-75">
                  <h2 className="fz50 txt-color-primary text-center mb10">
                    Medicul potrivit pentru nevoile tale!
                  </h2>
                  <p className="fz18 txt-color-third w-75 mx-auto mx-sm-auto text-center mb-2">
                    Articole medicale și liste cu top clinici din fiecare oraș.
                    Găsește ușor clinica cea mai potrivită (și apropiată de
                    tine) pentru nevoile tale medicale.
                  </p>
                  <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 w-100 mb-10">
                    <Button
                      style={{ minWidth: "calc(30% - 10px)" }}
                      navigare={"cauta"}
                    >
                      Caută medic{" "}
                      <span className="flaticon-right-arrow ml-10" />
                    </Button>
                    <Button
                      className="btnSecondary"
                      style={{ minWidth: "calc(30% - 10px)" }}
                      navigare={"inscrie-clinica"}
                    >
                      Înscrie o clinică{" "}
                      <span className="flaticon-right-arrow ml-10" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h4 className="fz18 txt-color-third w-75 mx-auto text-center mb20">
                SPECIALIZĂRI MEDICALE POPULARE
              </h4>
              <ul className="home4_iconbox mb0">
                <LookingItem />
              </ul>
              <h4 className="fz18 txt-color-third w-75 mx-auto text-center mt10">
                <span className="flaticon-upload mr10" />
                Vezi mai multe specializări
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 2.	Pasi de urmat --> */}

      <section id="property-city" className="property-city pb30">
        <div className="container-fluid pasi_urmat px-10">
          <div className="row">
            <PasiDeUrmat />
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Our Hot Offier --> */}
      <section className="our-hot-offer parallax d-flex justify-content-center">
        <div className="container home-texts">
          <div className="row mt40">
            <div className="col-md-6 col-lg-8 order-2 order-md-1">
              <div className="our_hotoffer">
                <h2 className="fz30 txt-color-third">
                  <span className="fz40 txt-color-primary">ÎMPREUNĂ,</span>{" "}
                  Conectați pentru sănătate
                </h2>
                <p className="fz20 txt-color-third">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="fp_footer">
                  <ul className="">
                    <li>
                      <p className="fz20 txt-color-third">
                        <span className="flaticon-tick mr10"></span>
                        Ne dorim ca pacienții să găsească medicul perfect și să
                        facă o programare în cel mai ușor mod
                      </p>
                    </li>
                    <li>
                      <p className="fz20 txt-color-third">
                        <span className="flaticon-tick mr10"></span>
                        Cea mai bună îngrijire, la un click distanță!
                      </p>
                    </li>
                    <li>
                      <p className="fz20 txt-color-third">
                        <span className="flaticon-tick mr10"></span>
                        Oricând, oriunde în România
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="d-flex flex-column flex-sm-row justify-content-start gap-3 w-100 mb-10">
                  <Button className="w-50 w-md-50" navigare={"cauta"}>
                    Găsește o clinica în apropiere
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 order-1 order-md-2">
              <div className="our_hotoffer">
                <Image
                  src="/assets/images/pasurmat.svg" // Calea relativă la directorul public
                  alt="Tooth Icon" // Adaugă un text alternativ pentru accesibilitate
                  width={400} // Specifică lățimea dorită
                  height={400} // Specifică înălțimea dorită
                  className="img-whp"
                />
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* <!-- Our Hot Offier --> */}
      <section className="our-hot-offer parallax d-flex justify-content-center">
        <div className="container home-texts">
          <div className="row">
            {/* End .col */}
            <div className="col-md-6 col-lg-4">
              <div className="our_hotoffer">
                <Image
                  src="/assets/images/pasurmat.svg" // Calea relativă la directorul public
                  alt="Tooth Icon" // Adaugă un text alternativ pentru accesibilitate
                  width={400} // Specifică lățimea dorită
                  height={400} // Specifică înălțimea dorită
                  className="img-whp"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-8">
              <div className="our_hotoffer">
                <h2 className="fz30 txt-color-third">
                  <span className="fz40 txt-color-primary">ÎMPREUNĂ,</span>{" "}
                  Conectați pentru sănătate
                </h2>
                <p className="fz20 txt-color-third">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <ul>
                  <li>
                    <p className="fz20 txt-color-third">
                      <span className="flaticon-tick mr10"></span>
                      Ne dorim ca pacienții să găsească medicul perfect și să
                      facă o programare în cel mai ușor mod
                    </p>
                  </li>
                  <li>
                    <p className="fz20 txt-color-third">
                      <span className="flaticon-tick mr10"></span>
                      Cea mai bună îngrijire, la un click distanță!
                    </p>
                  </li>
                  <li>
                    <p className="fz20 txt-color-third">
                      <span className="flaticon-tick mr10"></span>
                      Oricând, oriunde în România
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Our Hot Offier --> */}
      <section className="our-hot-offer parallax d-flex justify-content-center pt0">
        <div className="container home-texts">
          <div className="row mt40">
            <div className="col-md-6 col-lg-8 order-2 order-md-1">
              <div className="our_hotoffer">
                <h2 className="fz30 txt-color-third">
                  Cum se foloseste platforma ?
                </h2>
                <p className="fz20 txt-color-third">
                  Daca urmeaza sa iti faci inspectia tehnica perioada si nu stii
                  ce statie ITP sa alegi sau vrei sa vezi ultimele modificari
                  aparute in legislatie, nu iti face griji, noi suntem mereu
                  aici pentru tine, acolo unde esti si tu: pe telefon, laptop
                  sau pe tableta. Trebuie doar sa selectezi judetul si orasul in
                  care vrei sa faci ITP-ul, folosind harta interactiva sau
                  folosind functia cauta si notand locatia dorita. Si nu uita sa
                  revii periodic pe platforma pentru ca adaugam constant noi
                  informatii care te vor ajuta cu siguranta.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 order-1 order-md-2">
              <div className="our_hotoffer d-none d-md-block">
                <Map />
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>

      {/* <!-- 5.	Icons de incredere --> */}
      <section className="our-blog bgc-f7 pb30">
        <div className="container">
          <div className="row">
            <SectiuneIncredere />
          </div>
        </div>
      </section>

      {/* <!-- Our Blog --> */}
      <section className="our-blog bgc-f7 pb30 pt0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Articole</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Blogs />
          </div>
        </div>
      </section>
      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
