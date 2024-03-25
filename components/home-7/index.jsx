import MobileMenu from "../common/header/MobileMenu";
import Header from "./Header";
import Blogs from "../common/Blogs";
import Partners from "../common/Partners";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import SimpleFilter from "../common/SimpleFilter";
import WhyChoose from "./WhyChoose";
import FeaturedProperties from "./FeaturedProperties";
import FindProperties from "./FindProperties";
import HotProperties from "./HotProperties";
import Testimonial from "./Testimonial";
import PopupSignInUp from "../common/PopupSignInUp";
import Hero from "./Hero";
import Map from "../map/Map";
import Image from "next/image";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Home Design --> */}
      <Hero />

      {/* <!-- Why Chose Us --> */}
      <section id="why-chose" className="whychose_us pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>De ce sa alegi o statie ITP de pe www.ITPService.com?</h2>
                <p>
                  Meriti sa ai parte de servicii prompte si profesioniste. Mai
                  jos poti vedea principalele motive pentru care iti recomandam
                  sa arunci o privire pe portalul nostru.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <WhyChoose />
          </div>
        </div>
      </section>

      {/* <!-- Our Hot Offier --> */}
      <section className="our-hot-offer parallax">
        <div className="container">
          <div className="row mt40">
            <div className="col-md-6 col-lg-8">
              <div className="our_hotoffer">
                <h2>Cum se foloseste platforma ?</h2>
                <p>
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
                <button className="btn ht_offer">View All</button>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="our_hotoffer">
                <Map />
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* <!-- Our Hot Offier --> */}
      <section className="our-hot-offer parallax">
        <div className="container">
          <div className="row mt40">
            {/* End .col */}
            <div className="col-md-6 col-lg-4">
              <div
                className="programeaza"
                style={{ height: "auto", width: "auto", marginTop: "20px" }}
              >
                <Image
                  width={464}
                  height={320}
                  className="img-whp w-200 h-200 cover"
                  src="/assets/serviceImg.png"
                  alt="fp1.jpg"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-8">
              <div className="programeaza">
                <h2>Programeaza-te la ITP</h2>
                <p>
                  Poti naviga cu usurinta pe website-ul nostru pentru a gasi
                  societatea potrivita pentru tine. Selecteaza judetul si orasul
                  unde vrei sa faci ITP-ul si afla mai multe detalii despre
                  statia ITP pe care ti-o recomandam. Pentru ca vrem sa te
                  ajutam, am facut o selectie atenta de care suntem siguri ca o
                  sa fii multumit.
                </p>
                <button className="btn ht_offer">View All</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Feature Properties --> */}
      <section id="feature-property" className="feature-property bgc-f7 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Statii ITP Partenere</h2>
                <p>
                  Vei gasi cativa dintre partenerii nostrii, statii ITP de
                  incredere, pentru care grija fata de client primeaza
                  intotdeauna. Fa-ti inspectia tehnica rapid, cu profesionisti.
                  Vezi pe blog ce documente iti sunt necesare si suna la
                  partenerul din zona ta pentru o programare online.
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <FeaturedProperties />
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Our Testimonials --> */}
      <section className="our-testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb20">
                <h2>Ce spun clientii nostri ?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="testimonial_grid_slider style2 gutter-x15">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Blog --> */}
      <section className="our-blog bgc-f7 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Articole si noutati</h2>
                <p>
                  Citeste cele mai noi stiri si informatii despre ITP. Iti
                  explicam tot ce e nou intr-un mod simplu, fiind atenti la
                  fiecare detaliu. Inainte sa alegi o statie ITP unde sa faci
                  inspectia tehnica, iti recomandam sa citesti cateva articole
                  de pe blogul nostru.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Blogs />
          </div>
        </div>
      </section>

      {/* <!-- Start Call to Action --> */}
      <section className="start-partners home7 pt50 pb50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="start_partner tac-smd">
                <h2>Detii o statie ITP si doresti sa iti cresti afacerea?</h2>
                <h3>
                  Devino{" "}
                  <span style={{ color: "#ff5a5f" }}>partenerul nostru</span>
                </h3>
                <h2>si beneficiezi de reduceri pentru:</h2>
              </div>
              <div className="row mt-5">
                <Partners />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4">
              <div className="parner_reg_btn home7 text-right tac-smd">
                <a className="btn" href="#">
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one home5">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area home5 pt30 pb30">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
