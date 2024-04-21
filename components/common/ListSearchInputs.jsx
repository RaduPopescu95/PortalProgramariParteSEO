"use client";

import {
  addKeyword,
  addLocation,
} from "../../features/properties/propertiesSlice";
import PricingRangeSlider from "./PricingRangeSlider";
import CheckBoxFilter from "./CheckBoxFilter";
import GlobalSelectBox from "./GlobalSelectBox";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { handleQueryFirestoreSubcollection } from "@/utils/firestoreUtils";

const ListSearchInputs = ({ className = "", judete }) => {
  const router = useRouter();
  const [selectedJudet, setSelectedJudet] = useState("");
  const [selectedLocalitate, setSelectedLocalitate] = useState("");
  const [localitati, setLocalitati] = useState([]);
  const [isJudetSelected, setIsJudetSelected] = useState(true);
  const [isLocalitateSelected, setIsLocalitateSelected] = useState(true);

  // Handler pentru schimbarea selectiei de judete
  const handleJudetChange = async (e) => {
    const judetSelectedName = e.target.value; // Numele județului selectat, un string
    console.log("judetSelectedName...", judetSelectedName);
    setSelectedJudet(judetSelectedName);
    setIsJudetSelected(!!judetSelectedName);

    // Găsește obiectul județului selectat bazat pe `siteName`
    const judetSelected = judete.find(
      (judet) => judet.siteName === judetSelectedName
    );

    if (judetSelected) {
      try {
        // Utilizăm siteName pentru a interoga Firestore
        const localitatiFromFirestore = await handleQueryFirestoreSubcollection(
          "Localitati",
          "judet",
          judetSelected.siteName
        );
        // Presupunem că localitatiFromFirestore este array-ul corect al localităților
        setLocalitati(localitatiFromFirestore);
      } catch (error) {
        console.error("Failed to fetch locations:", error);
        setLocalitati([]); // Resetează localitățile în caz de eroare
      }
    } else {
      // Dacă nu găsim județul selectat, resetăm localitățile
      setLocalitati([]);
    }
  };

  const handleLocalitateChange = (e) => {
    console.log("Localitate selected: ", e.target.value); // Acesta ar trebui să arate numele localității ca string
    setSelectedLocalitate(e.target.value);
    setIsLocalitateSelected(!!e.target.value);
  };

  // submit handler
  const submitHandler = () => {
    console.log("submit...", selectedJudet);
    console.log("submit...", selectedLocalitate);
    if (!selectedJudet) {
      setIsJudetSelected(!!selectedJudet);
    } else if (selectedJudet) {
      router.push(`/judet/${selectedJudet}`);
    } else if (selectedJudet && selectedLocalitate) {
      router.push(`/judet/${selectedJudet}-${selectedLocalitate}`);
    }
  };
  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">
        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select
                className={`selectpicker w100 form-select show-tick ${
                  !isJudetSelected ? "border-danger" : ""
                }`}
                onChange={handleJudetChange}
                value={selectedJudet}
              >
                <option value="">Judete</option>
                {judete &&
                  judete.map((judet, index) => (
                    <option key={index} value={judet.siteName}>
                      {judet.siteName}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </li>
        {/* End li */}
        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select
                className={`selectpicker w100 form-select show-tick ${
                  !isLocalitateSelected ? "border-danger" : ""
                }`}
                onChange={handleLocalitateChange}
                value={selectedLocalitate}
              >
                <option value="">Localitati</option>
                {localitati.map((location, index) => (
                  <option key={index} value={location.siteName}>
                    {location.siteName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </li>
        {/* End li */}
        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nume firma..."
              // onChange={(e) => dispatch(addKeyword(e.target.value))}
            />
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={submitHandler}
              type="submit"
              className="bgc-accent btn btn-thm "
            >
              Cauta
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default ListSearchInputs;
