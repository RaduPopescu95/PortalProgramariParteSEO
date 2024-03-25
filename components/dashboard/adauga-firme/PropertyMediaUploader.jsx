"use client";

import { useState } from "react";
import selectedFiles from "../../../utils/selectedFiles";
import Image from "next/image";
import ArticleEditor from "./QuillForm";

const PropertyMediaUploader = ({
  handleContentChangeFirst,
  contentFirst,
  handleContentChangeSecond,
  contentSecond,
  successMessage,
}) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="col-lg-12">
          <div className="article-container">
            <ArticleEditor
              handleContentChange={handleContentChangeFirst}
              content={contentFirst}
            />
          </div>
        </div>
        {/* End .col */}
        <div className="col-lg-12">
          <div className="article-container">
            <ArticleEditor
              handleContentChange={handleContentChangeSecond}
              content={contentSecond}
            />
          </div>
        </div>
        {/* End .col */}
        <div className="col-lg-12">
          <h3>{successMessage}</h3>
        </div>
        {/* End .col */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default PropertyMediaUploader;
