const ContactWithAgent = () => {
  return (
    <div className="container py-sm-5 py-2" id="contact-form">
      <div className="row">
        <div className="col-md-4 order-3 order-md-1">
          <form action="#">
            <ul className="sasw_list mb0">
              <li className="search_area">
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
              </li>
              {/* End li */}
              <li className="search_area">
                <div className="form-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone"
                    required
                  />
                </div>
              </li>{" "}
              {/* End li */}
              <li className="search_area">
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
              </li>{" "}
              {/* End li */}
              <li className="search_area">
                <div className="form-group mb-3">
                  <textarea
                    id="form_message"
                    name="form_message"
                    className="form-control "
                    rows="5"
                    required
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </li>{" "}
              {/* End li */}
              <li>
                <div className="search_option_button">
                  <button type="submit" className="btn btn-block btn-thm w-100">
                    Trimite
                  </button>
                </div>
              </li>{" "}
              {/* End li */}
            </ul>
          </form>
        </div>
        <div className="col-md-4 order-2 order-md-2 my-sm-0 my-2">
          {/* Componenta pentru informații de contact suplimentare */}
          <div className="contact-info">
            <h5 className="mt0">CALL US</h5>
            <p>1 (234) 567-891</p>
            <p>1 (234) 987-654</p>
            <h5>LOCATION</h5>
            <p>121 Rock Street, 21 Avenue, New York, NY 92103-9000</p>
            <h5>OUR TOP SERVICES</h5>
            <p>Local transfers</p>
            <p>Airport Transfers</p>
            <p>Excursions and Tours</p>
          </div>
        </div>
        <div className="col-md-4 order-1 order-md-3">
          {/* Componenta pentru harta */}
          <div className="map-container" style={{ height: "100%" }}>
            {/* Aici vei integra harta, de exemplu folosind Google Maps Embed API */}
            {/* Înlocuiește 'src' cu sursa corectă pentru harta ta */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.902327372338!2d-74.00165848459483!3d40.730610079328676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ae15b2ad3b%3A0x7955420634fd7b9d!2s121%20Rock%20St%2C%20Brooklyn%2C%20NY%2011217%2C%20USA!5e0!3m2!1sen!2s!4v1654350488566!5m2!1sen!2s"
              width="100%"
              height="100%" // Asigură-te că iframe-ul umple containerul
              style={{ height: "100%" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWithAgent;
