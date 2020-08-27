import React from "react";
import "../Components Css/SideBarRow.css";
function SideBarRow({ selected, Icon, title }) {
  return (
    <div className={`SideBarRow ${selected && "selected"}`}>
      <Icon className="SideBarRow__icon" />
      <h2 className="SideBarRow__label">{title}</h2>
    </div>
  );
}

export default SideBarRow;
