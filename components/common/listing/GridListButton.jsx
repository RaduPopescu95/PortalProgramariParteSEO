"use client";

import { toggleGridAndList } from "../../../features/filter/filterSlice";

const GridListButton = () => {
  const isGridOrList = true;

  return (
    <ul className="mb-3">
      <li className={`list-inline-item ${!isGridOrList ? "active" : ""}`}>
        <a>
          <span className="fa fa-th-large"></span>
        </a>
      </li>
      {/* End li */}

      <li className={`list-inline-item ${isGridOrList ? "active" : ""}`}>
        <a>
          <span className="fa fa-th-list"></span>
        </a>
      </li>
      {/* End li */}
    </ul>
  );
};

export default GridListButton;
