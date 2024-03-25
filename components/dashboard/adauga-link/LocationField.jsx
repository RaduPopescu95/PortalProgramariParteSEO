const LocationField = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyAddress">Adresa</label>
          <input type="text" className="form-control" id="propertyAddress" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Numar telefon</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">E-mail</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default LocationField;
