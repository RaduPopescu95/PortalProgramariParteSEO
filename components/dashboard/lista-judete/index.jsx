import BreadCrumb from "@/components/common/BreadCrumb";
import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import SearchData from "../judete-search-box/SearchData";
import SearchBox from "./SearchBox";
import { Suspense } from "react";
import CommonLoader from "@/components/common/CommonLoader";
import {
  getFirestoreCollectionLength,
  handleGetFirestore,
} from "@/utils/firestoreUtils";

const handleGetData = async () => {
  let data = await handleGetFirestore("Judete");
  console.log("Data....", data);

  // Inițializează updatedData ca un array gol
  let updatedData = [];

  for (let item of data) {
    const subcollectionPath = `Judete/${item.documentId}/Localitati`;

    const collectionLength = await getFirestoreCollectionLength(
      subcollectionPath
    );

    // Creează un nou obiect cu informațiile existente și adaugă numărul de localități
    const updatedItem = { ...item, localitatiCount: collectionLength };
    updatedData.push(updatedItem);
  }

  // Utilizează updatedData pentru a actualiza starea, nu data inițială
  return updatedData;
};

const index = async () => {
  const judete = await handleGetData();

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      {/* <Header /> */}

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      <div className="dashboard_sidebar_menu">
        <div
          className="offcanvas offcanvas-dashboard offcanvas-start"
          tabIndex="-1"
          id="DashboardOffcanvasMenu"
          data-bs-scroll="true"
        >
          <SidebarMenu />
        </div>
      </div>
      {/* End sidebar_menu */}

      {/* <!-- Our Dashbord --> */}
      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid ovh">
          <div className="row">
            <div className="col-lg-12 maxw100flex-992">
              <div className="row">
                {/* Start Dashboard Navigation */}
                <div className="col-lg-12">
                  <div className="dashboard_navigationbar dn db-1024">
                    <div className="dropdown">
                      <button
                        className="dropbtn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#DashboardOffcanvasMenu"
                        aria-controls="DashboardOffcanvasMenu"
                      >
                        <i className="fa fa-bars pr10"></i> Dashboard Navigation
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Dashboard Navigation */}
              </div>
              {/* End .row */}

              <div className="row align-items-center">
                <div className="col-md-8 col-lg-8 col-xl-9 mb20">
                  <div className="breadcrumb_content style2 mb30-991">
                    <BreadCrumb title="Dashboard" subTitle="Lista Judete" />
                  </div>
                </div>
                {/* End .col */}
                <div className="col-md-4 col-lg-4 col-xl-3 mb20">
                  <ul className="sasw_list mb0">
                    <li className="search_area">
                      <SearchBox />
                    </li>
                  </ul>
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="my_dashboard_review mb40">
                    <div className="col-lg-12">
                      <div className="savesearched_table">
                        <div className="table-responsive mt0">
                          <SearchData judete={judete} />
                        </div>
                      </div>
                      {/* End .packages_table */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
