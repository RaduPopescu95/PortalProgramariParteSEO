import CheckBoxFilter from "../../common/CheckBoxFilter";

const DetailedInfo = () => {
  return (
    <div className="row">
      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyASize">Google</label>
          <input type="text" className="form-control" id="propertyASize" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="sizePrefix">Facebook</label>
          <input type="text" className="form-control" id="sizePrefix" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="landArea">Youtube</label>
          <input type="text" className="form-control" id="landArea" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="LASPostfix">Tweeter</label>
          <input type="text" className="form-control" id="LASPostfix" />
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default DetailedInfo;
