import CheckBoxFilter from "../../common/CheckBoxFilter";

const DateContact = ({ handleInputChange, formValues }) => {
  return (
    <div className="row">
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="telefonUnu">Telefon 1</label>
          <input
            type="text"
            className="form-control"
            id="telefonUnu"
            name="telefonUnu"
            value={formValues.telefonUnu}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="telefonDoi">Telefon 2</label>
          <input
            type="text"
            className="form-control"
            id="telefonDoi"
            name="telefonDoi"
            value={formValues.telefonDoi}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="emailUnu">Email 1</label>
          <input
            type="text"
            className="form-control"
            id="emailUnu"
            name="emailUnu"
            value={formValues.emailUnu}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="emailDoi">Email 2</label>
          <input
            type="text"
            className="form-control"
            id="landArea"
            name="emailDoi"
            value={formValues.emailDoi}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="websiteUnu">Website 1</label>
          <input
            type="text"
            className="form-control"
            id="websiteUnu"
            name="websiteUnu"
            value={formValues.websiteUnu}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="websiteDoi">Website 2</label>
          <input
            type="text"
            className="form-control"
            id="websiteDoi"
            name="websiteDoi"
            value={formValues.websiteDoi}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            className="form-control"
            id="facebook"
            name="facebook"
            value={formValues.facebook}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {/* End .col */}
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="googlePlus">Google Plus</label>
          <input
            type="text"
            className="form-control"
            id="googlePlus"
            name="googlePlus"
            value={formValues.googlePlus}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {/* End .col */}
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="facebookPageId">Facebook page ID</label>
          <input
            type="text"
            className="form-control"
            id="facebookPageId"
            name="facebookPageId"
            value={formValues.facebookPageId}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {/* End .col */}
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="codPostal">Cod Postal</label>
          <input
            type="text"
            className="form-control"
            id="codPostal"
            name="codPostal"
            value={formValues.codPostal}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {/* End .col */}
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="adresa">Adresa</label>
          <input
            type="text"
            className="form-control"
            id="adresa"
            name="adresa"
            value={formValues.adresa}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {/* End .col */}
      <div className="col-xl-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="harta">Harta</label>
          <input
            type="text"
            className="form-control"
            id="harta"
            name="harta"
            value={formValues.harta}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default DateContact;
