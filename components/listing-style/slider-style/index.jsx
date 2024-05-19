import ListSearch from "@/components/common/ListSearch";
import Pagination from "../../common/blog/Pagination";
import CopyrightFooter from "../../common/footer/CopyrightFooter";
import Footer from "../../common/footer/Footer";
import GlobalHeroFilter from "../../common/GlobalHeroFilter";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import { unstable_noStore as noStore } from "next/cache";
import FilterTopBar from "../../common/listing/FilterTopBar";
import GridListButton from "../../common/listing/GridListButton";
import ShowFilter from "../../common/listing/ShowFilter";
import SidebarListing3 from "../../common/listing/SidebarListing3";
import PopupSignInUp from "../../common/PopupSignInUp";
import BreadCrumbBanner from "./BreadCrumbBanner";
import FeaturedItem from "./FeaturedItem";
import HeroSlider from "./HeroSlider";
import Partners from "@/components/common/Partners";
import Image from "next/image";
import Button from "@/components/common/CommonButton";
import CallToAction from "@/components/common/CallToAction";
import BreadCrumb from "@/components/common/BreadCrumb";
import {
  handleGetFirestore,
  handleQueryDoubleParam,
  handleQueryFirestore,
} from "@/utils/firestoreUtils";
import { fetchFirme } from "@/utils/localProjectlUtils";

import { notFound } from "next/navigation";

export async function getServerData(params) {
  let data = {};

  try {
    console.log("params..start.....", params);
    // if (params[1] === "favicon.ico") {
    //   return null; // Returnează null sau orice alt component care indică că pagina nu trebuie să proceseze acest id.
    // }
    console.log("params..start.....passed", params);
    // Interoghează Firestore (sau orice altă bază de date) folosind 'locationPart'
    let judete = await handleGetFirestore("Judete");
    let categorii = await handleGetFirestore("Categorii");
    console.log("here...params...", params);
    let firme = await fetchFirme(params);
    console.log("here...firme...", firme);

    data = { judete, categorii, firme };
    return data;
  } catch (error) {
    console.error("Failed to fetch locations:", error);
    return {
      props: {
        error: "Failed to load data.",
      },
    };
  }
}

const index = async ({ params }) => {
  noStore();
  console.log("asdaddaad", params);
  const data = await getServerData(params);
  // if (!data.firme) {
  //   notFound();
  // }
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {params && <BreadCrumbBanner />}

      {/* <!-- 6th Home Design --> */}
      {!params && (
        <section className="home-listing-slider hight-fx p0">
          <div className="container-fluid p0">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-banner-wrapper">
                  <div className="banner-style-one arrow-style-2">
                    <HeroSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container home_iconbox_container listing-slider-style">
            <div className="row posr">
              <div className="col-lg-12">
                <div className="home_content listing slider_style pt30">
                  <BreadCrumb csName={"color-white"} />
                  <div className="home-text home6 text-center">
                    <h2 className="fz50 color-white">
                      Descopera funizori de servicii autorizati
                    </h2>
                  </div>
                  {/* End home-text */}
                  <ListSearch
                    className="mt40"
                    judete={data.judete}
                    categorii={data.categorii}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* End container */}
        </section>
      )}

      {/* <!-- Listing Grid View --> */}
      <section className="our-listing bgc-primary pt-0 pb30-991 md-mt0 categorii-container-section">
        <div className="container">
          <div className="row pt30">
            <div className="col-md-12 col-lg-12">
              <div className="row">
                <FeaturedItem params={params} firme={data.firme} />
              </div>
              {/* End .row */}

              {!params && (
                <div className="row">
                  <div className="col-lg-12 mt20">
                    <div className="mbp_pagination">
                      <Pagination />
                    </div>
                  </div>
                </div>
              )}

              {/* End .row */}
            </div>
            {/* End  .col */}
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Start Call to Action --> */}

      <CallToAction />

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
