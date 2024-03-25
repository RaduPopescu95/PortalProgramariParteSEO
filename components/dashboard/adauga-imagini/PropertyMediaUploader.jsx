"use client";

import { useState } from "react";
import selectedFiles from "../../../utils/selectedFiles";
import Image from "next/image";
import ArticleEditor from "./QuillForm";

const PropertyMediaUploader = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="col-lg-12">
          <div className="article-container">
            <ArticleEditor />
          </div>
        </div>
        {/* End .col */}
        <div className="col-lg-12">
          <div className="article-container">
            <ArticleEditor />
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .col */}

      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start">Resetare</button>
          <button className="btn btn2 float-end">Adaugare</button>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default PropertyMediaUploader;
