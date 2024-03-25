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

const index = () => {
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
                  <BreadCrumb2 />
                </div>
                {/* End .col-12 */}

                <div className="col-lg-12">
                  <div className="feat_property list agency">


                    <div className="details ">
                      <div className="tc_content">
                     <h3>Fa-ti programare!</h3>

                     <div className="d-flex justify-content-start align-items-center w-100">
                     <span className="flaticon-placeholder"></span>
                     <p className="m0">0787813831</p>
                     </div>

                      </div>

                    </div>

                    <div className="details">
                      <div className="tc_content">
                     <h3>Contactează-ne pe WhatsApp</h3>

                      </div>

                    </div>
                    <div className="details">
                      <div className="tc_content">
                     <h3>Formulare</h3>

                      </div>

                    </div>
                  </div>
                  {/* End .feat_property */}

                  <div className="shop_single_tab_content style2 mt30">
                    <TabDetailsContent />
                  </div>
                  <div className=" style2 mt30">
                <SidebarListings />
                </div>
                  <div className=" style2 mt30">
                  <ListingGallery />
                </div>
                </div>
                {/* End .col-12 */}

              </div>
            </div>
            {/* End .col-md-12 col-lg-12 content left side */}


            <div className="col-lg-12 col-xl-12">
                  {/* <!-- Listing Single Property --> */}
      <section className="listing-title-area md-mt0">
        <div className="container">
 
        </div>
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
