"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../../features/properties/propertiesSlice";
import properties from "../../../data/properties";
import Image from "next/image";
import { fetchLocation } from "@/app/services/geocoding";
import { handleDiacrtice } from "@/utils/strintText";
import AgencyDetails from "@/components/agency-details";
import {
  handleQueryDoubleParam,
  handleQueryFirestore,
} from "@/utils/firestoreUtils";
import { calculateDistance } from "@/utils/commonUtils";
import PromotionSection from "./PromotionSection";

const FeaturedItem = ({ params }) => {
  const {
    keyword,
    location,
    status,
    propertyType,
    price,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
  } = useSelector((state) => state.properties);
  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );

  const dispatch = useDispatch();
  const [parteneri, setParteneri] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async function (position) {
        const { latitude, longitude } = position.coords;

        try {
          let res = await fetchLocation(latitude, longitude);
          let localitate = handleDiacrtice(res.results[0].locality);
          console.log("Localitate....", localitate);
          let parteneri = await handleQueryFirestore(
            "Firme",
            "localitate",
            localitate
          );

          // Adaugă distanța ca o proprietate pentru fiecare partener
          const parteneriCuDistanta = parteneri.map((partener) => {
            const distanta = calculateDistance(
              latitude,
              longitude,
              partener.coordonate.lat,
              partener.coordonate.lng
            );

            return { ...partener, distanta: Math.floor(distanta) };
          });

          // Sortează partenerii după distanță
          const parteneriOrdonati = parteneriCuDistanta.sort(
            (a, b) => a.distanta - b.distanta
          );

          console.log("parteneri....", parteneriOrdonati);
          console.log("params....", params);

          let parteneriFiltrati = [];
          if (params) {
            console.log("here...hee....", params);
            if (Array.isArray(params)) {
              console.log("testing...here....test", params);
              const parts = params[0].split("-");
              if (parts[0] === "clinici") {
                let localitate = parts[1];

                let decodedLocalitate = decodeURIComponent(localitate);

                let localitateDatorita =
                  decodedLocalitate.charAt(0).toUpperCase() +
                  decodedLocalitate.slice(1);

                parteneriFiltrati = await handleQueryFirestore(
                  "Firme",
                  "localitate",
                  localitateDatorita
                );
                console.log("Test here localitate....", parteneriFiltrati);
              } else {
                let categorie = parts[0];
                let localitate = parts[1];

                let decodedCategorie = decodeURIComponent(categorie);
                let decodedLocalitate = decodeURIComponent(localitate);

                let categorieDatorita =
                  decodedCategorie.charAt(0).toUpperCase() +
                  decodedCategorie.slice(1);
                let localitateDatorita =
                  decodedLocalitate.charAt(0).toUpperCase() +
                  decodedLocalitate.slice(1);

                parteneriFiltrati = await handleQueryDoubleParam(
                  "Firme",
                  "categorie",
                  categorieDatorita,
                  "localitate",
                  localitateDatorita
                );
                console.log("Test here localitate....", parteneriFiltrati);
              }

              setParteneri([...parteneriFiltrati]);
              // Verifică dacă stringul decodificat conține cuvântul "sector"
              if (decodedPart.includes("sector")) {
                console.log("Partea conține 'sector'", decodedPart);

                let sectorDorit =
                  decodedPart.charAt(0).toUpperCase() + decodedPart.slice(1);
                console.log("Test here sector dorit....", sectorDorit);
                parteneriFiltrati = await handleQueryFirestore(
                  "Firme",
                  "sector",
                  sectorDorit
                );
                console.log("Test here localitate....", parteneriFiltrati);
                setParteneri([...parteneriFiltrati]);

                // Execută codul dorit aici
              } else {
                // console.log("Partea nu conține 'sector'");
                // let localitateDorita =
                //   parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
                // console.log("Test here localitate....", localitateDorita);
                //       parteneriFiltrati = await handleQueryFirestore(
                //     "Firme",
                //     "categorie",
                //     categorieDorita,
                //     "localitate",
                //     localitateDorita
                //   );
                // console.log("Test here localitate....", parteneriFiltrati);
                // setParteneri([...parteneriFiltrati]);
              }
            } else {
              console.log("here...hee....");
              let string = params; // presupunem că params[0] este un string

              let localitateDorita =
                string.charAt(0).toUpperCase() + string.slice(1);
              parteneriFiltrati = parteneriOrdonati.filter(
                (partener) => partener.localitate === localitateDorita
              );
              setParteneri([...parteneriFiltrati]);
              // if (params.length === 1) {
              //   console.log("here...hee....");
              //   let string = params[0]; // presupunem că params[0] este un string

              //   let localitateDorita =
              //     string.charAt(0).toUpperCase() + string.slice(1);
              //   parteneriFiltrati = parteneriOrdonati.filter(
              //     (partener) => partener.localitate === localitateDorita
              //   );
              //   setParteneri([...parteneriFiltrati]);
              // } else if (params.length === 2) {
              //   let string = params[0]; // presupunem că params[0] este un string

              //   let categorieDorita =
              //     string.charAt(0).toUpperCase() + string.slice(1);
              //   let localitate = params[1]; // presupunem că params[0] este un string
              //   const parts = localitate.split("-");
              //   let decodedPart = decodeURIComponent(parts[1]);
              //   console.log("it tests....", decodedPart);
              //   if (decodedPart.includes("sector")) {
              //     let sectorDorit =
              //       decodedPart.charAt(0).toUpperCase() + decodedPart.slice(1);
              //     console.log("Test here localitate....", categorieDorita);
              //     console.log("Test here sector....", sectorDorit);
              //     parteneriFiltrati = await handleQueryFirestore(
              //       "Firme",
              //       "categorie",
              //       categorieDorita,
              //       "sector",
              //       sectorDorit
              //     );
              //     console.log("Test here localitate....", parteneriFiltrati);
              //     setParteneri([...parteneriFiltrati]);
              //   } else {
              //     let localitateDorita =
              //       parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
              //     console.log("Test here localitate....", categorieDorita);
              //     console.log("Test here localitate....", localitateDorita);
              //     parteneriFiltrati = await handleQueryFirestore(
              //       "Firme",
              //       "categorie",
              //       categorieDorita,
              //       "localitate",
              //       localitateDorita
              //     );
              //     console.log("Test here localitate....", parteneriFiltrati);
              //     setParteneri([...parteneriFiltrati]);
              //   }
              // } else {
              //   setParteneri([...parteneriOrdonati]);
              // }
            }
          } else {
            setParteneri([...parteneriOrdonati]);
          }
          console.log("parteneri cu distanta...", parteneriOrdonati);
        } catch (error) {
          console.error("Error fetching location data: ", error);
        }
      },
      function (error) {
        console.error("Geolocation error: ", error);
      }
    );
  }, []);

  // status handler
  let content;
  if (params && parteneri.length === 0) {
    return <PromotionSection params={params} />;
  }
  // if (parteneri.length === 0) {
  //   return;
  // }
  if (params) {
    content = parteneri.map((item) => <AgencyDetails firma={item} />);
  } else {
    content = parteneri.map((item) => (
      <div
        className={`${
          isGridOrList ? "col-12 feature-list" : "col-md-3 col-lg-3"
        } `}
        key={item.id}
      >
        <div
          className={`feat_property home7 style4 ${
            isGridOrList ? "d-flex align-items-center" : undefined
          }`}
        >
          <div className="thumb">
            <Image
              width={342}
              height={220}
              className="img-whp w-100 h-100 cover"
              src={item?.imagini?.imgs[0]?.finalUri}
              alt="fp1.jpg"
            />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item">
                  <a href="#">Promovat</a>
                </li>
                {/* <li className="list-inline-item">
                  <a href="#" className="text-capitalize">
                    {item?.featured}
                  </a>
                </li> */}
              </ul>
              {/* <ul className="icon mb0">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-transfer-1"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-heart"></span>
                  </a>
                </li>
              </ul> */}

              {/* <Link
                href={`/agentie/${item?.id}`}
                className="fp_price"
              >
                ${item?.price}
                <small>/mo</small>
              </Link> */}
            </div>
          </div>
          <div className="details">
            <div className="tc_content p10">
              {/* <p className="text-thm">{item?.type}</p> */}
              <h4>
                <Link href={`/agentie/${item?.id}-${item?.siteName}`}>
                  {item?.siteName}
                </Link>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Blandit turpis cursus in hac. Risus ultricies tristique nulla
                aliquet enim.
              </p>

              {/* <ul className="prop_details mb0">
                {item?.itemDetails.map((val, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href="#">
                      {val.name}: {val.number}
                    </a>
                  </li>
                ))}
              </ul> */}
            </div>
            {/* End .tc_content */}

            <div className="fp_footer p10">
              <ul className="fp_meta float-start mb0">
                <li>
                  <p>
                    <span className="flaticon-placeholder"></span>
                    {item?.adresa}
                  </p>
                </li>
                <li>
                  <p>{item?.distanta} metri</p>
                </li>
              </ul>
            </div>

            {/* End .fp_footer */}
          </div>
        </div>
      </div>
    ));
  }

  // add length of filter items

  return <>{content}</>;
};

export default FeaturedItem;
