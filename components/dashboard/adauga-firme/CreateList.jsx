import ArticleEditor from "./QuillForm";

const CreateList = ({
  handleInputChange,
  formValues,
  categorii,
  tari, // Lista cu țări
  regiuni, // Lista cu regiuni pe baza țării selectate
  handleTaraChange, // Funcție pentru schimbarea țării
  handleRegiuneChange, // Funcție pentru schimbarea regiunii
  localitati,
  imaginiData,
}) => {
  return (
    <>
      {/* Selecteaza Stare */}
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Selectează Stare</label>
          <select
            name="stare"
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
            value={formValues.stare}
            onChange={handleInputChange}
          >
            <option data-tokens="Selecteaza">Selecteaza</option>
            <option data-tokens="Publicat">Publicat</option>
            <option data-tokens="Neplublicat">Neplublicat</option>
          </select>
        </div>
      </div>

      {/* Selecteaza Categorie */}
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Selectează Categorie</label>
          <select
            name="categorie"
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
            value={formValues.categorie}
            onChange={handleInputChange}
          >
            <option data-tokens="Selecteaza">Selecteaza</option>
            {categorii.map((cat, index) => (
              <option key={index} value={cat.siteName} data-tokens={cat.siteName}>
                {cat.siteName}
              </option>
            ))}
          </select>
        </div>
      </div>

{/* Selectează Țara */}
<div className="col-lg-6 col-xl-6">
  <div className="my_profile_setting_input ui_kit_select_search form-group">
    <label>Selectează Țara</label>
    <select
      name="tara"
      className="selectpicker form-select"
      data-live-search="true"
      data-width="100%"
      value={formValues.tara}
      onChange={handleTaraChange}
    >
      <option data-tokens="Selecteaza">Selecteaza</option>
      {tari.length > 0 ? (
        tari.map((tara, index) => (
          <option key={index} value={tara.code} data-tokens={tara.name}>
            {tara.name}
          </option>
        ))
      ) : (
        <option>Încărcare țări...</option>
      )}
    </select>
  </div>
</div>

{/* Selectează Regiune */}
<div className="col-lg-6 col-xl-6">
  <div className="my_profile_setting_input ui_kit_select_search form-group">
    <label>Selectează Regiune</label>
    <select
      name="regiune"
      className="selectpicker form-select"
      data-live-search="true"
      data-width="100%"
      value={formValues.regiune}
      onChange={handleRegiuneChange}
    >
      <option data-tokens="Selecteaza">Selecteaza</option>
      {regiuni.length > 0 ? (
        regiuni.map((regiune, index) => (
          <option key={index} value={regiune.code} data-tokens={regiune.name}>
            {regiune.name}
          </option>
        ))
      ) : (
        <option>Încărcare regiuni...</option>
      )}
    </select>
  </div>
</div>

{/* Selectează Localitate */}
<div className="col-lg-6 col-xl-6">
  <div className="my_profile_setting_input ui_kit_select_search form-group">
    <label>Selectează Localitate</label>
    <select
      name="localitate"
      className="selectpicker form-select"
      data-live-search="true"
      data-width="100%"
      value={formValues.localitate}
      onChange={handleInputChange}
    >
      <option data-tokens="Selecteaza">Selecteaza</option>
      {localitati.length > 0 ? (
        localitati.map((loc, index) => (
          <option key={index} value={loc.code} data-tokens={loc.name}>
            {loc.name}
          </option>
        ))
      ) : (
        <option>Încărcare localități...</option>
      )}
    </select>
  </div>
</div>



      {/* Email, Parola și Confirmare Parola */}
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="password">Parola</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="confirmPassword">Confirmare Parola</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};

export default CreateList;
