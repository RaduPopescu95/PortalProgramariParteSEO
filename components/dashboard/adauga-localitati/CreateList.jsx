import ArticleEditor from "./QuillForm";

const CreateList = ({ handleInputChange, formValues, judete }) => {
  return (
    <>
      <div className="col-lg-12 col-xl-12">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Selecteaza Judet</label>
          <select
            name="judet"
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
            value={formValues.judet} // Asigură legătura cu state-ul părintelui
            onChange={handleInputChange} // Folosește funcția de manipulare a schimbării
          >
            <option data-tokens="Selecteaza">Selecteaza</option>
            {judete.map((item, index) => (
              <option data-tokens={item.siteName} key={index}>
                {item.siteName}
              </option>
            ))}
          </select>
        </div>
      </div>
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
