"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenuContent = ({ float = "" }) => {
  const pathname = usePathname();

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
          href="/cauta"
          className={pathname === "/cauta" ? "ui-active" : undefined}
        >
          Cauta clinica
        </Link>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link
          href="/clinici"
          className={pathname === "/clinici" ? "ui-active" : undefined}
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
        <Link href="/inscrie-clinica">
          <span className="flaticon-plus"></span>
          Adauga clinica
        </Link>
      </li>
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
