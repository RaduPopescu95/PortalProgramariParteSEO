"use client";
import React from "react";

export default function FormularContact() {
  return (
    <a className="details custom-alignment">
        <div className="tc_content">
      <button
        className="btn btn-thm btn-lg"
        onClick={() => {
          const formSection = document.getElementById("contact-form");
          if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Formular contact
      </button>
      </div>
    </a>
  );
}
