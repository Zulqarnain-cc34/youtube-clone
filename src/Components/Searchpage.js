import React from "react";
import "../Components Css/Searchpage.css";
import TuneOutlinedicon from "@material-ui/icons/TuneOutlined";

function Searchpage() {
  return (
    <div className="searchpage">
      <div className="searchpage__filter">
        <TuneOutlinedicon />
        <h2>Filter</h2>
      </div>
    </div>
  );
}

export default Searchpage;
