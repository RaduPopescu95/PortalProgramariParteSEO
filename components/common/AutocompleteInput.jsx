import React, { useState, useEffect } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";

const AutocompleteInput = ({ onPlaceChanged, adresa }) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (adresa) {
      setInputValue(adresa); // Setează adresa inițială dacă există
    }
  }, [adresa]);

  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChangedLocal = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        // Extrage coordonatele locației
        const latitude = place.geometry.location.lat();
        const longitude = place.geometry.location.lng();
        const formattedAddress = place.formatted_address;
        const mapsUrl = place.url;
  
        // Extrage componentele adresei (țară, regiune, oraș)
        let country = '';
        let state = '';
        let city = '';
  
        if (place.address_components) {
          place.address_components.forEach((component) => {
            const types = component.types;
  
            // Identifică țara
            if (types.includes('country')) {
              country = component.long_name;
            }
  
            // Identifică regiunea (state / administrative_area_level_1)
            if (types.includes('administrative_area_level_1')) {
              state = component.long_name;
            }
  
            // Identifică orașul (locality / administrative_area_level_2)
            if (types.includes('locality')) {
              city = component.long_name;
            } else if (types.includes('administrative_area_level_2') && !city) {
              city = component.long_name;
            }
          });
        }
  
        // Apelează funcția de callback pentru a transmite toate datele
        onPlaceChanged(latitude, longitude, formattedAddress, mapsUrl, {
          country,
          state,
          city,
        });
  
        // Actualizează valoarea în input după selecție
        setInputValue(formattedAddress);
      } else {
        console.log("No location selected from suggestions.");
      }
    }
  };
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Permite modificarea inputului
  };

  return (
    <Autocomplete
      onLoad={onLoad}
      onPlaceChanged={onPlaceChangedLocal}
      className="autocomplete-dropdown"
    >
      <input
        type="text"
        placeholder="Introduceți adresa"
        style={{ width: "100%", padding: "10px" }}
        value={inputValue}
        onChange={handleInputChange}
      />
    </Autocomplete>
  );
};

export default AutocompleteInput;
