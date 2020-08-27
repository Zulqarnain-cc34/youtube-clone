import React from "react";
import "../Components Css/Searchpage.css";
import TuneOutlinedicon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";

function Searchpage() {
  return (
    <div className="searchpage">
      <div className="searchpage__filter">
        <TuneOutlinedicon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJymy6xr9_W7GTkPW1ov2OyxzvNCOE-ff1d7VK36Cg=s48-c-k-c0xffffffff-no-rj-mo"
        channel="Mosh Hamdani"
        verified
        subs="788k"
        noofvideo={281}
        description="React is really elegant in the way it is designed and compiled. Kudos to the facebook team, and of course Mosh who taught us!"
      />
    </div>
  );
}

export default Searchpage;
