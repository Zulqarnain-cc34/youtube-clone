import React from "react";
import "../Components Css/ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noofvideos,
  description,
}) {
  return (
    <div className="channelrow">
      <div className="channelrow_Avatar">
        <Avatar className="channelrow__logo" src={image} alt={channel} />
      </div>
      <div className="channelrow_text">
        <h4>
          {channel}
          {verified && <VerifiedIcon className="channelRow_verified" />}
        </h4>
        <p>
          {subs} . {noofvideos}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
