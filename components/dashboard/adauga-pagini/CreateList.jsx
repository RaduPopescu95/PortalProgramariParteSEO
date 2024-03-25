import ArticleEditor from "./QuillForm";

const CreateList = ({ handleInputChange, formValues }) => {
  return (
    <>
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
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="metaTitle">Meta Title</label>
          <input
            type="text"
            className="form-control"
            id="metaTitle"
            name="metaTitle"
            value={formValues.metaTitle}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="my_profile_setting_textarea">
          <label htmlFor="metaDescription">Meta Description</label>
          <textarea
            className="form-control"
            id="metaDescription"
            name="metaDescription"
            rows="7"
            value={formValues.metaDescription}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default CreateList;
