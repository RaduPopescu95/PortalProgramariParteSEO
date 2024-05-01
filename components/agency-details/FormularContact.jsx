"use client";
import React from "react";

export default function FormularContact() {
  return (
    <a className="details d-flex justify-content-center align-items-center">
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
    </a>
  );
}
