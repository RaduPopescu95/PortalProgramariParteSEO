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

      <li className="last">
        <Link
          href="/categorie"
          className={pathname === "/categorie" ? "ui-active" : undefined}
        >
          Clinici
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
      {/* 
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
      </li> */}
      {/* End .dropitem */}

      {/* <li className="last">
        <Link
          href="/blog"
          className={pathname === "/blog" ? "ui-active" : undefined}
        >
          Blog
        </Link>
      </li> */}
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
