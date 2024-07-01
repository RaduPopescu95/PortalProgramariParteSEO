import ArticleEditor from "./QuillForm";

const CreateList = ({
  handleInputChange,
  formValues,
  categorii,
  judete,
  handleJudetChange,
  localitati,
  imaginiData,
}) => {
  return (
    <>
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Selecteaza Stare</label>
          <select
            name="stare"
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
            value={formValues.stare} // Asigură legătura cu state-ul părintelui
            onChange={handleInputChange} // Folosește funcția de manipulare a schimbării
          >
            <option data-tokens="Selecteaza">Selecteaza</option>
            <option data-tokens="Publicat">Publicat</option>
            <option data-tokens="Neplublicat">Neplublicat</option>
          </select>
        </div>
      </div>
      {/* End .col */}
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Selecteaza Categorie</label>
          <select
            name="categorie"
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
            value={formValues.categorie} // Asigură legătura cu state-ul părintelui
            onChange={handleInputChange} // Folosește funcția de manipulare a schimbării
          >
            <option data-tokens="Selecteaza">Selecteaza</option>
            {categorii.map((cat, index) => (
              <option data-tokens={cat.siteName}>{cat.siteName}</option>
            ))}
          </select>
        </div>
      </div>
      {/* End .col */}
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Selecteaza Judet</label>
          <select
            name="judet"
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
            value={formValues.judet} // Asigură legătura cu state-ul părintelui
            onChange={handleJudetChange} // Folosește funcția de manipulare a schimbării
          >
            <option data-tokens="Selecteaza">Selecteaza</option>
            {judete.map((jud, index) => (
              <option data-tokens={jud.siteName}>{jud.siteName}</option>
            ))}
          </select>
        </div>
      </div>
      {/* End .col */}
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Selecteaza Localitate</label>
          <select
            name="localitate"
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
            value={formValues.localitate} // Asigură legătura cu state-ul părintelui
            onChange={handleInputChange} // Folosește funcția de manipulare a schimbării
          >
            <option data-tokens="Selecteaza">Selecteaza</option>
            {localitati.map((loc, index) => (
              <option data-tokens={loc.siteName}>{loc.siteName}</option>
            ))}
          </select>
        </div>
      </div>
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
