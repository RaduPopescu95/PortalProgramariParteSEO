import Image from "next/image";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/DefaultHeader";
import MobileMenu from "../../components/common/header/MobileMenu";
import PopupSignInUp from "../../components/common/PopupSignInUp";
import BreadCrumb2 from "./BreadCrumb2";
import SidebarListings from "./SidebarListings";
import TabDetailsContent from "./TabDetailsContent";
import ListingGallery from "./ListingGallery";

const index = ({ firma }) => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-agent-single bgc-f7 pb30-991 mt85 md-mt0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="feat_property list agency">
                    <div className="details ">
                      <div className="tc_content pt10 d-flex flex-column justify-content-center align-items-center">
                        <Image
                          width={100}
                          height={100}
                          className="logo1 img-fluid"
                          src={firma.logo.finalUri}
                          alt="Logo"
                          layout="intrinsic" // Schimbă la layout="intrinsic" pentru a permite redimensionarea bazată pe maxWidth
                        />

                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <p className="m0">{firma.siteName}</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href={`tel:${firma.telefonUnu}`}
                      className="details"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="tc_content">
                        <h3>Fa-ti programare!</h3>

                        <div className="d-flex justify-content-start align-items-center w-100">
                          <span className="flaticon-smartphone-call"></span>
                          <p className="m0">{firma.telefonUnu}</p>
                        </div>
                      </div>
                    </a>

                    <a
                      href={`https://wa.me/${firma.telefonUnu}`}
                      className="details"
                      style={{ cursor: "pointer" }}
                      target="_blank" // Opțional: deschide linkul într-o nouă fereastră/tab
                      rel="noopener noreferrer" // Pentru securitate, când folosești target="_blank"
                    >
                      <div className="tc_content">
                        <h3>Contactează-ne pe WhatsApp</h3>
                      </div>
                    </a>
                    <a
                      href="#contact-form"
                      className="details"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="tc_content">
                        <h3>Formular contact</h3>
                      </div>
                    </a>
                  </div>
                  {/* End .feat_property */}

                  <div className="shop_single_tab_content style2 mt30">
                    <TabDetailsContent firma={firma} />
                  </div>
                  <div className="style2 mt30">
                    <SidebarListings firma={firma} />
                  </div>
                  <div className="style2 mt30">
                    <ListingGallery firma={firma} />
                  </div>
                </div>
                {/* End .col-12 */}
              </div>
            </div>
            {/* End .col-md-12 col-lg-12 content left side */}

            <div className="col-lg-12 col-xl-12">
              {/* <!-- Listing Single Property --> */}
              <section className="listing-title-area md-mt0">
                <div className="container"></div>
              </section>
            </div>
            {/* End .col-lg-4 col-xl-4 content left side */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
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
