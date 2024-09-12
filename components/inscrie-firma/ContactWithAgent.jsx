"use client";

import { handleUploadFirestore } from "@/utils/firestoreUtils";
import { useState } from "react";
import { AlertModal } from "../common/AlertModal";

const ContactWithAgent = ({ firma }) => {
  // Definește stările pentru fiecare câmp de input
  const [judet, setJudet] = useState("");
  const [localitate, setLocalitate] = useState("");
  const [nume, setNume] = useState("");
  const [numeFirma, setNumeFirma] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [descriereFirma, setDescriereFirma] = useState("");
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
      judet,
      localitate,
      nume,
      numeFirma,
      telefon,
      email,
      descriereFirma,
    };

    try {
      // Trimiterea datelor către Firestore
      await handleUploadFirestore(formData, "Cereri");

      // Afișează mesajul de succes
      showAlert(
        "Cererea de înscriere a fost trimisă cu succes! Te vom contacta curând.",
        "success"
      );

      // Resetează câmpurile formularului
      setJudet("");
      setLocalitate("");
      setNume("");
      setNumeFirma("");
      setTelefon("");
      setEmail("");
      setDescriereFirma("");
    } catch (error) {
      // Afișează mesajul de eroare
      showAlert(
        "A apărut o eroare la trimiterea cererii. Te rugăm să încerci din nou.",
        error.message
      );
    }
  };

  return (
    <>
      <div className="container py-sm-5 py-2" id="contact-form">
        <div className="row">
          <div className="col-md-12 order-3 order-md-1">
            <form onSubmit={handleSubmit}>
              <div className="sasw_list mb0">
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="search_area">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Judet"
                            value={judet}
                            onChange={(e) => setJudet(e.target.value)}
                            required
                          />
                        </div>
                      </li>
                      <li className="search_area">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Localitate"
                            value={localitate}
                            onChange={(e) => setLocalitate(e.target.value)}
                            required
                          />
                        </div>
                      </li>
                      <li className="search_area">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nume"
                            value={nume}
                            onChange={(e) => setNume(e.target.value)}
                            required
                          />
                        </div>
                      </li>
                      <li className="search_area">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nume firma"
                            value={numeFirma}
                            onChange={(e) => setNumeFirma(e.target.value)}
                            required
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="search_area">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Telefon"
                            value={telefon}
                            onChange={(e) => setTelefon(e.target.value)}
                            required
                          />
                        </div>
                      </li>
                      <li className="search_area">
                        <div className="form-group mb-3">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-12">
                    <ul className="list-unstyled">
                      <li className="search_area">
                        <div className="form-group mb-3">
                          <textarea
                            id="form_message"
                            name="form_message"
                            className="form-control"
                            rows="5"
                            required
                            placeholder="Descrie firma"
                            value={descriereFirma}
                            onChange={(e) => setDescriereFirma(e.target.value)}
                          ></textarea>
                        </div>
                      </li>
                      <li>
                        <div className="search_option_button">
                          <button
                            type="submit"
                            className="btn btn-thm custom-button-width mx-auto"
                          >
                            Trimite
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
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
