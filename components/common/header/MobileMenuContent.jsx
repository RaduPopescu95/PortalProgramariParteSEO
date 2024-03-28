"use client";

// import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  Sidebar,
} from "react-pro-sidebar";
import Link from "next/link";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const home = [
  {
    id: 1,
    name: "Despre platforma",
    routerPath: "/about-us",
  },
  {
    id: 2,
    name: "Politica de confidentialitate",
    routerPath: "/terms",
  },
];

const listing = [
  {
    id: 1,
    title: "Listing Grid",
    items: [
      {
        name: "Grid v1",
        routerPath: "/listing-grid-v1",
      },
      {
        name: "Grid v2",
        routerPath: "/listing-grid-v2",
      },
      {
        name: "Grid v3",
        routerPath: "/listing-grid-v3",
      },
      {
        name: "Grid v4",
        routerPath: "/listing-grid-v4",
      },
      {
        name: "Grid v5",
        routerPath: "/listing-grid-v5",
      },
      {
        name: "Grid v6",
        routerPath: "/listing-grid-v6",
      },
    ],
  },
  {
    id: 2,
    title: "Listing List",
    items: [
      {
        name: "List V1",
        routerPath: "/listing-list-v1",
      },
    ],
  },
  {
    id: 3,
    title: "Listing Style",
    items: [
      {
        name: "Parallax Style",
        routerPath: "/parallax-style",
      },
      {
        name: "Slider Style",
        routerPath: "/slider-style",
      },
      {
        name: "Map Header",
        routerPath: "/map-header",
      },
    ],
  },
  {
    id: 4,
    title: "Listing Half",
    items: [
      {
        name: "Map V1",
        routerPath: "/listing-map-v1",
      },
      {
        name: "Map V2",
        routerPath: "/listing-map-v2",
      },
      {
        name: "Map V3",
        routerPath: "/listing-map-v3",
      },
      {
        name: "Map V4",
        routerPath: "/listing-map-v4",
      },
    ],
  },
  {
    id: 5,
    title: "Agent View",
    items: [
      {
        name: "Agent V1",
        routerPath: "/agent-v1",
      },
      {
        name: "Agent V2",
        routerPath: "/agent-v2",
      },
      {
        name: "Agent Details",
        routerPath: "/agent-details",
      },
    ],
  },
  {
    id: 6,
    title: "Agencies View",
    items: [
      {
        name: "Agencies V1",
        routerPath: "/agency-v1",
      },
      {
        name: "Agencies V2",
        routerPath: "/agency-v2",
      },
      {
        name: "Agencies Details",
        routerPath: "/agentie",
      },
    ],
  },
];

const property = [
  {
    id: 1,
    title: "User Admin",
    items: [
      {
        name: "Dashboard",
        routerPath: "/my-dashboard",
      },
      {
        name: "My Properties",
        routerPath: "/my-properties",
      },
      {
        name: "My Message",
        routerPath: "/my-message",
      },
      {
        name: "My Review",
        routerPath: "/my-review",
      },
      {
        name: "My Favourites",
        routerPath: "/my-favourites",
      },
      {
        name: "My Profile",
        routerPath: "/my-profile",
      },
      {
        name: "My Package",
        routerPath: "/my-package",
      },
      {
        name: "My Saved Search",
        routerPath: "/my-saved-search",
      },
      {
        name: "Add Property",
        routerPath: "/create-listing",
      },
    ],
  },
  {
    id: 2,
    title: "Listing Single",
    items: [
      {
        name: "Single V1",
        routerPath: "/listing-details-v1",
      },
      {
        name: "Single V2",
        routerPath: "/listing-details-v2",
      },
      {
        name: "Single V3",
        routerPath: "/listing-details-v3",
      },
      {
        name: "Single V4",
        routerPath: "/listing-details-v4",
      },
    ],
  },
];

const blog = [
  { id: 1, name: "Blog List 1", routerPath: "/blog-list-1" },
];

const pages = [
  {
    id: 1,
    name: "Despre platforma",
    routerPath: "/about-us",
  },
  {
    id: 2,
    name: "Politica de confidentialitate",
    routerPath: "/terms",
  },
];

const MobileMenuContent = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <div className="sidebar-header">
        <Link href="/" className="sidebar-header-inner">
          {/* <Image
            width={40}
            height={45}
            className="nav_logo_img img-fluid mt20"
            src="/assets/images/header-logo2.png"
            alt="header-logo.png"
          /> */}
          <span className="brand-text">Portal</span>
        </Link>
        {/* End .logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <span className="flaticon-close"></span>
        </div>
        {/* Mobile Menu close icon */}
      </div>

      {/* End logo */}
      {/* <Sidebar> */}
      <div style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}>
        <Menu>
        <MenuItem>
            <div
              onClick={() => router.push("/")}
              className={
                pathname === "/" ? "ui-active" : "inactive-mobile-menu"
              }
            >
              Acasă
            </div>
          </MenuItem>

          {/* End Home Home */}
          <MenuItem>
            <div
              onClick={() => router.push("/categorie")}
              className={
                pathname === "/categorie" ? "ui-active" : "inactive-mobile-menu"
              }
            >
              Cauta clinica
            </div>
          </MenuItem>

          {/* End Pages Listing */}

          <SubMenu
            label="Despre noi"
            className={
              blog.some(
                (page) =>
                  page.routerPath?.split("/")[1] === pathname.split("/")[1]
                // page.routerPath?.split('/')[1] + "/[id]" === pathname.split('/')[1]
              )
                ? "parent-menu-active"
                : "inactive-mobile-menu"
            }
          >
            {pages.map((val, i) => (
              <MenuItem key={i}>
                <div
                  onClick={() => router.push(val.routerPath)}
                  className={
                    pathname?.split("/")[1] === val.routerPath?.split("/")[1]
                      ? // val.routerPath + "/[id]" === pathname.split('/')[1]
                        "ui-active"
                      : "inactive-mobile-menu"
                  }
                >
                  {val.name}
                </div>
              </MenuItem>
            ))}
          </SubMenu>
          {/* End Pages Property */}

          <MenuItem>
            <div
              onClick={() => router.push("/blog")}
              className={
                pathname === "/blog" ? "ui-active" : "inactive-mobile-menu"
              }
            >
              Blog
            </div>
          </MenuItem>

          <MenuItem>
            <div
              onClick={() => router.push("/contact")}
              className={
                pathname === "/contact" ? "ui-active" : "inactive-mobile-menu"
              }
            >
              Contact
            </div>
          </MenuItem>

          {/* <MenuItem>
            <div
              onClick={() => router.push("/login")}
              className={
                pathname === "/login" ? "ui-active" : "inactive-mobile-menu"
              }
            >
              <span className="flaticon-user"></span> Login
            </div>
          </MenuItem> */}

          {/* <MenuItem>
            <div
              onClick={() => router.push("/register")}
              className={
                pathname === "/register" ? "ui-active" : "inactive-mobile-menu"
              }
            >
              <span className="flaticon-edit"></span> Register
            </div>
          </MenuItem> */}

        </Menu>
      </div>
      {/* </Sidebar> */}

      <Link
        href="/contact"
        className="btn btn-block btn-lg btn-thm circle"
        style={{ width: "90%", margin: "0px auto" }}
      >
        <span className="flaticon-plus"></span> Adauga statie ITP
      </Link>
    </>
  );
};

export default MobileMenuContent;
