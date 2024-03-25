"use client";

import { useState } from "react";
import selectedFiles from "../../../utils/selectedFiles";
import Image from "next/image";

const PropertyMediaUploader = () => {
  const [propertySelectedImgs, setPropertySelectedImgs] = useState([]);

  // multiple image select
  const multipleImage = (e) => {
    // checking is same file matched with old stored array
    const isExist = propertySelectedImgs?.some((file1) =>
      selectedFiles(e)?.some((file2) => file1.name === file2.name)
    );

    if (!isExist) {
      setPropertySelectedImgs((old) => [...old, ...selectedFiles(e)]);
    } else {
      alert("You have selected one image already!");
    }
  };

  // delete image
  const deleteImage = (name) => {
    const deleted = propertySelectedImgs?.filter((file) => file.name !== name);
    setPropertySelectedImgs(deleted);
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="col-lg-12">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="propertyTitle">Google code</label>
            <input type="text" className="form-control" id="propertyTitle" />
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-12">
          <div className="my_profile_setting_textarea">
            <label htmlFor="propertyDescription">Global site tag</label>
            <textarea
              className="form-control"
              id="propertyDescription"
              rows="7"
            ></textarea>
          </div>
        </div>
        {/* End .col */}
        <div className="col-lg-12">
          <div className="my_profile_setting_textarea">
            <label htmlFor="propertyDescription">Global maps</label>
            <textarea
              className="form-control"
              id="propertyDescription"
              rows="7"
            ></textarea>
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .col */}

      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start">Back</button>
          <button className="btn btn2 float-end">Next</button>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default PropertyMediaUploader;
