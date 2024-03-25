"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenuContent = ({ float = "" }) => {
  const pathname = usePathname();

  // const homeR = [
  //   {
  //     id: 1,
  //     name: "Despre platforma",
  //     routerPath: "/about-us",
  //   },
  //   {
  //     id: 2,
  //     name: "Cum functioneaza?",
  //     routerPath: "/home-7",
  //   },
  //   {
  //     id: 3,
  //     name: "Politica de cookie",
  //     routerPath: "/home-7",
  //   },
  //   {
  //     id: 4,
  //     name: "Politica de confidentialitate",
  //     routerPath: "/home-7",
  //   },
  // ];
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
    { id: 1, name: "About Us", routerPath: "/about-us" },
    { id: 2, name: "Gallery", routerPath: "/gallery" },
    { id: 3, name: "Faq", routerPath: "/faq" },
    { id: 4, name: "LogIn", routerPath: "/login" },
    { id: 5, name: "Compare", routerPath: "/compare" },
    { id: 6, name: "Membership", routerPath: "/membership" },

    { id: 7, name: "Register", routerPath: "/register" },
    { id: 8, name: "Service", routerPath: "/service" },
    { id: 9, name: "404 Page", routerPath: "/404" },
    { id: 10, name: "Terms & Conditions", routerPath: "/terms" },
  ];

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      <li className="dropitem">
        <Link
          href="/"
          className={
            home.some(
              (page) =>
                page.routerPath?.split("/")[1] === pathname?.split("/")[1]
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Acasă</span>
        </Link>
        {/* <!-- Level Two--> */}
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link
          href="/categorie"
          className={pathname === "/categorie" ? "ui-active" : undefined}
        >
          Cauta clinica
        </Link>
      </li>
      {/* End .dropitem */}

      {/* <li className="dropitem">
        <a
          href="listing-grid-v5"
          className={
            listing.some((parent) => {
              return parent.items.some(
                (page) =>
                  page.routerPath?.split("/")[1] === pathname?.split("/")[1]
              );
            })
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Statii ITP</span>
        </a>

      </li> */}
      {/* End .dropitem */}

      {/* <li className="dropitem">
        <a
          href="cauta-statii"
          className={
            property.some((parent) => {
              return parent.items.some(
                (page) =>
                  page.routerPath?.split("/")[1] === pathname?.split("/")[1]
                // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
              );
            })
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Cauta statie ITP</span>{" "}
        </a>
      </li> */}
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="#"
          className={
            pages.some(
              (page) =>
                page.routerPath?.split("/")[1] === pathname?.split("/")[1]
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Despre noi</span>
          <span className="arrow"></span>
        </a>

        <ul className="sub-menu ">
          {home.map((item) => (
            <li key={item.id}>
              <Link
                href={item.routerPath}
                className={
                  pathname?.split("/")[1] === item.routerPath?.split("/")[1]
                    ? "ui-active"
                    : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link
          href="/blog"
          className={pathname === "/blog" ? "ui-active" : undefined}
        >
          Blog
        </Link>
      </li>
      {/* End .dropitem */}
      <li className="last">
        <Link
          href="/contact"
          className={pathname === "/contact" ? "ui-active" : undefined}
        >
          Contact
        </Link>
      </li>
      {/* End .dropitem */}

      {/* <li className={`list-inline-item list_s ${float}`}>
        <a
          href="#"
          className="btn flaticon-user"
          data-bs-toggle="modal"
          data-bs-target=".bd-example-modal-lg"
        >
          <span className="dn-lg">Login/Register</span>
        </a>
      </li> */}
      {/* End .dropitem */}

      <li className={`list-inline-item add_listing ${float}`}>
        <Link href="/contact">
          <span className="flaticon-plus"></span>
          <span className="dn-lg"> Adauga clinica</span>
        </Link>
      </li>
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
