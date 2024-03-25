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
          <label htmlFor="link">Link</label>
          <input
            type="text"
            className="form-control"
            id="link"
            name="link"
            value={formValues.link}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};

export default CreateList;
