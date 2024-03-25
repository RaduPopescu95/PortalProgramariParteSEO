"use client";

import Link from "next/link";

import {
  isParentPageActive,
  isSinglePageActive,
} from "../../../../utils/daynamicNavigation";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { handleLogout } from "@/utils/authUtils";
import { useAuth } from "@/context/AuthContext";
import React from "react";
import CommonLoader from "../../CommonLoader";

const SidebarMenu = () => {
  const { currentUser } = useAuth();
  const router = useRouter();
  React.useEffect(() => {
    // handleAddToFirestore();

    if (!currentUser) {
      router.push("signin");
    }
  }, []);

  const pathname = usePathname();

  const logOut = () => {
    handleLogout()
      .then(() => {
        // Aici poți adăuga cod pentru ceea ce se întâmplă după logout-ul reușit
        console.log("Deconectare reușită.");
        // De exemplu, redirecționează utilizatorul către pagina de login
        router.push("/signin");
      })
      .catch((error) => {
        // Aici gestionezi eventualele erori care pot apărea în timpul procesului de logout
        console.error("Eroare la deconectare:", error);
        // Poți, de asemenea, să afișezi un mesaj de eroare utilizatorului, dacă este necesar
      });
  };

  const myProperties = [
    { id: 1, name: "Lista pagini", route: "/lista-pagini" },
    { id: 2, name: "Adauga pagini", route: "/adauga-pagini" },
  ];
  const reviews = [
    { id: 1, name: "Lista categorii", route: "/lista-categorii" },
    { id: 2, name: "Adauga categorii", route: "/adauga-categorii" },
  ];
  const articoleProps = [
    { id: 1, name: "Lista articole", route: "/lista-articole" },
    { id: 2, name: "Adauga articole", route: "/adauga-articole" },
  ];
  const firmeProps = [
    { id: 1, name: "Lista firme", route: "/lista-firme" },
    { id: 2, name: "Adauga firme", route: "/adauga-firme" },
  ];
  const judeteProps = [
    { id: 1, name: "Lista judete", route: "/lista-judete" },
    { id: 2, name: "Adauga judete", route: "/adauga-judete" },
  ];
  const localitatiProps = [
    { id: 1, name: "Lista localitati", route: "/lista-localitati" },
    { id: 2, name: "Adauga localitati", route: "/adauga-localitati" },
  ];
  const linksProps = [
    { id: 1, name: "Lista link-uri", route: "/lista-links" },
    { id: 2, name: "Adauga link-uri", route: "/adauga-links" },
  ];
  const imaginiProps = [
    { id: 1, name: "Lista imagini", route: "/lista-imagini" },
    { id: 2, name: "Adauga imagini", route: "/adauga-imagini" },
  ];
  if (!currentUser) {
    return <CommonLoader />;
  }

  return (
    <>
      <ul className="sidebar-menu">
        <li className="sidebar_header header">
          <Link href="/">
            <span>Dashboard</span>
          </Link>
        </li>

        {/* End header */}

        <li className="title">
          <span>Admin Panel</span>
          <ul>
            <li
              className={`treeview ${
                isSinglePageActive("/dashboard", pathname) ? "active" : ""
              }`}
            >
              <Link href="/dashboard">
                <i className="flaticon-layers"></i>
                <span> Dashboard</span>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive("/mesaje", pathname) ? "active" : ""
              }`}
            >
              <Link href="/mesaje">
                <i className="flaticon-envelope"></i>
                <span> Mesaje</span>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive("/lista-cereri", pathname) ? "active" : ""
              }`}
            >
              <Link href="/lista-cereri">
                <i className="flaticon-invoice"></i>
                <span> Cereri</span>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive("/inscrieri", pathname) ? "active" : ""
              }`}
            >
              <Link href="/inscrieri">
                <i className="flaticon-user"></i>
                <span> Înscrieri</span>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive("/setari", pathname) ? "active" : ""
              }`}
            >
              <Link href="/setari">
                <i className="flaticon-filter-results-button"></i>
                <span> Setari</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* End Main */}

        <li className="title">
          <span>Meniu</span>
          <ul>
            <li
              className={`treeview ${
                isParentPageActive(myProperties, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-property">
                <i className="flaticon-layers"></i> <span>Pagini</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-property">
                {myProperties.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* end properties */}

            <li
              className={`treeview ${
                isParentPageActive(reviews, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#review">
                <i className="flaticon-more"></i>
                <span>Categorii</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="review">
                {reviews.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* End Review */}

            <li
              className={`treeview ${
                isParentPageActive(articoleProps, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#articole">
                <i className="flaticon-edit"></i>
                <span>Articole</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="articole">
                {articoleProps.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* End articole */}
            <li
              className={`treeview ${
                isParentPageActive(firmeProps, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#firme">
                <i className="flaticon-building"></i>
                <span>Firme</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="firme">
                {firmeProps.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* End firme */}
            <li
              className={`treeview ${
                isParentPageActive(judeteProps, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#judete">
                <i className="flaticon-maps-and-flags"></i>
                <span>Judete</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="judete">
                {judeteProps.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* End judete */}
            <li
              className={`treeview ${
                isParentPageActive(localitatiProps, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#localitati">
                <i className="flaticon-pin"></i>
                <span>Localitati</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="localitati">
                {localitatiProps.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* End localitati */}
            <li
              className={`treeview ${
                isParentPageActive(linksProps, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#links">
                <i className="flaticon-share"></i>
                <span>Link-uri</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="links">
                {linksProps.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* End linkuri */}
          </ul>
        </li>
        {/* End manage listing */}

        <li className="title">
          <span>Stocare</span>
          <ul>
            <li
              className={`treeview ${
                isParentPageActive(imaginiProps, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#images">
                <i className="flaticon-box"></i>
                <span>Imagini</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="images">
                {imaginiProps.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </li>
        <li className="title">
          <span>Log out</span>
          <ul>
            <li
              className={`treeview ${
                isParentPageActive(imaginiProps, pathname) ? "active" : ""
              }`}
            >
              {/* Utilizăm un element <button> sau similar pentru a gestiona acțiunea de logout */}
              <a onClick={logOut} className="logout-button">
                <i className="flaticon-logout"></i>
                <span>Log out</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default SidebarMenu;
