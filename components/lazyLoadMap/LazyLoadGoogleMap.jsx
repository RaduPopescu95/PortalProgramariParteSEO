"use client";

import React, { useState, useEffect } from "react";

const LazyLoadGoogleMap = ({ firma }) => {
  const [loadMap, setLoad_map] = useState(false);

  // Funcția care decide când să încarce harta
  const checkAndLoadMap = () => {
    const mapContainer = document.getElementById("map-container");
    const bounding = mapContainer.getBoundingClientRect();

    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
      setLoad_map(true);
      // Odată ce harta este încărcată, eliminăm event listener-ul
      window.removeEventListener("scroll", checkAndLoadMap);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkAndLoadMap);
    checkAndLoadMap(); // Verifică la încărcarea inițială dacă elementul este deja vizibil

    return () => {
      window.removeEventListener("scroll", checkAndLoadMap);
    };
  }, []);

  return (
    <div id="map-container" style={{ height: "500px" }}>
      {loadMap && (
        <iframe
          title="Google Map"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${
            firma?.coordonate?.lng
          }!3d${
            firma?.coordonate?.lat
          }!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2z44Cw55'48.0%22N+25Cw26'51.2%22E!5e0!3m2!1sen!2sro!4v${Date.now()}!5m2!1sen!2sro`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      )}
    </div>
  );
};

export default LazyLoadGoogleMap;
