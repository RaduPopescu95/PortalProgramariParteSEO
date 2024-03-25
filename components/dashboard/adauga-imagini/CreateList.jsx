"use client";

import { useState } from "react";
import ArticleEditor from "./QuillForm";
import Image from "next/image";

const CreateList = ({
  handleInputChange,
  formValues,
  singleImage,
  deleteImage,
  propertySelectedImgs,
  isEdit,
  isNewImage,
}) => {
  return (
    <>
      <div className="col-lg-12">
        <ul className="mb-0">
          {propertySelectedImgs.length > 0
            ? propertySelectedImgs?.map((item, index) => (
                <li key={index} className="list-inline-item">
                  <div className="portfolio_item">
                    {isEdit && !isNewImage ? (
                      <Image
                        width={200}
                        height={200}
                        className="img-fluid cover"
                        src={item.finalUri}
                        alt="fp1.jpg"
                      />
                    ) : (
                      <Image
                        width={200}
                        height={200}
                        className="img-fluid cover"
                        src={URL.createObjectURL(item)}
                        alt="fp1.jpg"
                      />
                    )}
                    <div
                      className="edu_stats_list"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete"
                      data-original-title="Delete"
                    >
                      <a onClick={() => deleteImage(item.name)}>
                        <span className="flaticon-garbage"></span>
                      </a>
                    </div>
                  </div>
                </li>
              ))
            : undefined}

          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

      {propertySelectedImgs.length === 0 && (
        <div className="col-lg-12">
          <div className="portfolio_upload">
            <input
              type="file"
              onChange={singleImage}
              multiple
              accept="image/png, image/gif, image/jpeg"
            />
            <div className="icon">
              <span className="flaticon-download"></span>
            </div>
            <p>Drag and Drop Image</p>
          </div>
        </div>
      )}

      {/* End .col */}
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="siteName">Nume</label>
          <input
            type="text"
            className="form-control"
            id="siteName"
            name="siteName"
            value={formValues.siteName}
            onChange={handleInputChange}
          />
        </div>
      </div>
    
    
    </>
  );
};


export default CreateList;
