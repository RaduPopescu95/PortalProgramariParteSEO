import React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const ArticleEditor = ({ handleContentChange, content }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactQuill
        style={{ height: "5rem", marginBottom: 80 }}
        value={content}
        onChange={handleContentChange} // Folosim funcția primită prin props pentru a actualiza conținutul
        theme="snow"
        className="article-container"
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link", "image", "video"],
            ["clean"],
          ],
        }}
        formats={[
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
          "video",
        ]}
        placeholder="Enter your text here..."
      />
    </div>
  );
};

export default ArticleEditor;
