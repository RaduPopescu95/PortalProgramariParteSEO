"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ListSearchInputs = ({ className = "", localitati, judet }) => {
  const [locations, setLocations] = useState([...localitati]); // State pentru opțiunile din dropdown
  const [selectedLocation, setSelectedLocation] = useState("");
  const [firmName, setFirmName] = useState("");
  const [isSubmittedWithoutLocation, setIsSubmittedWithoutLocation] =
    useState(false);
  const router = useRouter();

  const submitHandler = () => {
    console.log("submit...");
    if (!selectedLocation) {
      setIsSubmittedWithoutLocation(true); // Setăm starea la true dacă locația nu este selectată
    } else {
      setIsSubmittedWithoutLocation(false); // Resetăm starea dacă locația este selectată
      if (firmName.length > 0) {
        router.push(`/judet/${judet}-${selectedLocation}-${firmName}`); // Logica pentru submit
      } else {
        router.push(`/judet/${judet}-${selectedLocation}`); // Logica pentru submit
      }
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
                  isSubmittedWithoutLocation ? "border-danger" : ""
                }`}
                value={selectedLocation}
                onChange={(e) => {
                  setSelectedLocation(e.target.value);
                  if (e.target.value) {
                    setIsSubmittedWithoutLocation(false); // Resetăm starea de atenționare la schimbarea selecției
                  }
                }}
              >
                <option value="">Localitati</option>
                {locations.map((location, index) => (
                  <option key={index} value={location.siteName}>
                    {location.siteName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </li>
        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nume firma..."
              onChange={(e) => setFirmName(e.target.value)}
              value={firmName}
            />
          </div>
        </li>
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
      </ul>
    </div>
  );
};

export default ListSearchInputs;
