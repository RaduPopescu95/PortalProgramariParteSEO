"use client";

import { handleUploadFirestore } from "@/utils/firestoreUtils";
import React, { useState } from "react";
import { AlertModal } from "../AlertModal";

const ContactWithAgent = ({ firma }) => {
  // Definește stările pentru fiecare câmp de input
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" });

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  const closeAlert = () => {
    setAlert({ message: "", type: "" });
  };

  // Funcția de submit pentru formular
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Creează un obiect cu datele de formular
    const formData = {
      name,
      phone,
      email,
      message,
    };

    // Aici poți adăuga logica pentru a trimite datele către un server sau a le prelucra cum dorești
    console.log("Form data submitted:", formData);
    await handleUploadFirestore(formData, "Mesaje");

    // Afișează mesajul de succes
    showAlert(
      "Mesajul a fost trimis cu succes! Te vom contacta curând.",
      "success"
    );

    // Resetează câmpurile formularului
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="container py-sm-5 py-2" id="contact-form">
        <div className="row">
          <div className="col-md-4 order-3 order-md-1">
            <form onSubmit={handleSubmit}>
              <ul className="sasw_list mb0">
                <li className="search_area">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </li>
                <li className="search_area">
                  <div className="form-group mb-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </li>
                <li className="search_area">
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </li>
                <li className="search_area">
                  <div className="form-group mb-3">
                    <textarea
                      id="form_message"
                      name="form_message"
                      className="form-control"
                      rows="5"
                      required
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                </li>
                <li>
                  <div className="search_option_button">
                    <button
                      type="submit"
                      className="btn btn-block btn-thm w-100"
                    >
                      Trimite
                    </button>
                  </div>
                </li>
              </ul>
            </form>
          </div>
          <div className="col-md-4 order-2 order-md-2 my-sm-0 my-2">
            <div className="contact-info">
              <h5 className="mt0">CALL US</h5>
              <p>{firma?.telefonUnu}</p>
              <p>{firma?.telefonDoi}</p>
              <h5>LOCATION</h5>
              <p>{firma?.adresa}</p>
              <h5>OUR TOP SERVICES</h5>
              <p>{firma?.categorie}</p>
            </div>
          </div>
          <div className="col-md-4 order-1 order-md-3">
            <div className="map-container" style={{ height: "100%" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.902327372338!2d-74.00165848459483!3d40.730610079328676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ae15b2ad3b%3A0x7955420634fd7b9d!2s121%20Rock%20St%2C%20Brooklyn%2C%20NY%2011217%2C%20USA!5e0!3m2!1sen!2s!4v1654350488566!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ height: "100%" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {alert.message && (
        <AlertModal
          message={alert.message}
          type={alert.type}
          onClose={closeAlert}
        />
      )}
    </>
  );
};

export default ContactWithAgent;
