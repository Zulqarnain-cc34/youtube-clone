import React from "react";
import "../Components Css/VideoRow.css";
function Videorow({
  image,
  views,
  subs,
  description,
  title,
  timestamp,
  channel,
}) {
  return (
    <div className="Videorow">
      <img src={image} alt={channel} />
      <div className="Videorow__text">
        <h3>{title}</h3>
        <p className="Videorow__headline">
          {channel} .{" "}
          <span className="Videorow__subsnumber">{subs} Subscription </span> .{" "}
          {views} views . {timestamp}
        </p>
        <p className="Videorow__description">{description}</p>
      </div>
    </div>
  );
}

export default Videorow;
