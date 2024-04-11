"use client";

import {
  addKeyword,
  addLocation,
} from "../../features/properties/propertiesSlice";
import PricingRangeSlider from "./PricingRangeSlider";
import CheckBoxFilter from "./CheckBoxFilter";
import GlobalSelectBox from "./GlobalSelectBox";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { handleQueryFirestoreSubcollection } from "@/utils/firestoreUtils";

const ListSearchInputs = ({ className = "", localitati }) => {
  const [locations, setLocations] = useState([...localitati]); // State pentru opțiunile din dropdown

  const submitHandler = () => {
    // Logica pentru submit
  };

  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">
        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select className="selectpicker w100 form-select show-tick ">
                <option>Localitati</option>
                {locations &&
                  locations.map((location, index) => (
                    <option key={index} value={location}>
                      {location.siteName}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </li>
        {/* End li */}
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
              className="bgc-accent btn btn-thm"
            >
              Search
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default ListSearchInputs;
