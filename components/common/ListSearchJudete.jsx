import GlobalFilter from "./GlobalFilter";
import ListSearchInputsJudete from "./ListSearchInputsJudete";

const ListSearch = ({ className = "", localitati }) => {
  return (
    <div className={`home_adv_srch_opt ${className}`}>
      {/* End nav-pills */}

      <div className="tab-content home1_adsrchfrm" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <ListSearchInputsJudete localitati={localitati} />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <GlobalFilter />
        </div>
      </div>
    </div>
  );
};

export default ListSearch;
