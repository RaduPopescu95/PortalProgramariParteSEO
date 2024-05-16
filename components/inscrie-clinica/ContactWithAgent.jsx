const ContactWithAgent = ({ firma }) => {
  return (
    <div className="container py-sm-5 py-2" id="contact-form">
      <div className="row">
        <div className="col-md-12 order-3 order-md-1">
          <form action="#">
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
                          required
                        />
                      </div>
                    </li>
                    <li className="search_area">
                      <div className="form-group mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Localitate"
                          required
                        />
                      </div>
                    </li>
                    <li className="search_area">
                      <div className="form-group mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Nume"
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
  );
};

export default ContactWithAgent;
