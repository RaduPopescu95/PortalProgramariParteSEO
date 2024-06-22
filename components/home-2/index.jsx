import MobileMenu from "../common/header/MobileMenu";
import Header from "../common/header/DefaultHeader";
import FeaturedProperties from "../home/FeaturedProperties";
import WhyChoose from "../common/WhyChoose";
import FindProperties from "./FindProperties";
import BestProperties from "./BestProperties";
import Blogs from "../common/Blogs";
import Partners from "../common/Partners";
import CallToAction from "../common/CallToAction";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import PopupSignInUp from "../common/PopupSignInUp";
import Hero from "./Hero";
import HeroSlider from "./HeroSlider";
import ListSearch from "../common/ListSearch";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Map --> */}
      <div className="container-fluid p0">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-banner-wrapper">
              <div className="banner-style-one arrow-style-2">
                <HeroSlider />
              </div>
            </div>
            {/* <!-- /.main-banner-wrapper --> */}
          </div>
        </div>
      </div>

      {/* <!-- Latest Properties For Sell --> */}
      <Hero />

      {/* <!-- Start Call to Action --> */}
      <section className="start-partners bgc-thm pt50 pb50">
        <div className="container">
          <CallToAction />
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
      {/* <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section> */}
    </>
  );
};

export default index;
