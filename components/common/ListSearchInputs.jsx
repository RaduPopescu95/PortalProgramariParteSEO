'use client'

import {
  addKeyword,
  addLocation,
} from "../../features/properties/propertiesSlice";
import PricingRangeSlider from "./PricingRangeSlider";
import CheckBoxFilter from "./CheckBoxFilter";
import GlobalSelectBox from "./GlobalSelectBox";
import { useRouter } from "next/navigation";

const ListSearchInputs = ({ className = "" }) => {
  const router = useRouter()
  // submit handler
  const submitHandler = () => {
    router.push("/listing-grid-v1");
  };

  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">
        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Judet..."
              // onChange={(e) => dispatch(addKeyword(e.target.value))}
            />
          </div>
        </li>
        {/* End li */}
        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Localitate..."
              // onChange={(e) => dispatch(addKeyword(e.target.value))}
            />
          </div>
        </li>
        {/* End li */}
        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nume firma..."
              // onChange={(e) => dispatch(addKeyword(e.target.value))}
            />
          </div>
        </li>
        {/* End li */}
     

        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              // onClick={submitHandler}
              type="submit"
              className="bgc-accent btn btn-thm "
            >
              Search
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default ListSearchInputs;
