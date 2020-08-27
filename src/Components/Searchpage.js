import React from "react";
import "../Components Css/Searchpage.css";
import TuneOutlinedicon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

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
      <hr />

      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you wwant to learn Free javascript Programming"
        timestamp="Scheduled for 8/27/20"
        channel="Clever Programmer"
        title="🔴  Build a Facebook Clone with REACT JS for Beginners! by Clever Programmer"
        image="https://i.ytimg.com/vi/dGcsHMXbSOA/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&amp;rs=AOn4CLDKCCOldiHuYyCiJLeFvLIl7sWFY"
      />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want to learn Free javascript Programming"
        timestamp="Scheduled for 8/27/20"
        channel="Clever Programmer"
        title="🔴  Build a Facebook Clone with REACT JS for Beginners! by Clever Programmer"
        image="https://i.ytimg.com/vi/dGcsHMXbSOA/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&amp;rs=AOn4CLDKCCOldiHuYyCiJLeFvLIl7sWFY"
      />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want to learn Free javascript Programming"
        timestamp="Scheduled for 8/27/20"
        channel="Clever Programmer"
        title="🔴  Build a Facebook Clone with REACT JS for Beginners! by Clever Programmer"
        image="https://i.ytimg.com/vi/dGcsHMXbSOA/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&amp;rs=AOn4CLDKCCOldiHuYyCiJLeFvLIl7sWFY"
      />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want to learn Free javascript Programming"
        timestamp="Scheduled for 8/27/20"
        channel="Clever Programmer"
        title="🔴  Build a Facebook Clone with REACT JS for Beginners! by Clever Programmer"
        image="https://i.ytimg.com/vi/dGcsHMXbSOA/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&amp;rs=AOn4CLDKCCOldiHuYyCiJLeFvLIl7sWFY"
      />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want to learn Free javascript Programming"
        timestamp="Scheduled for 8/27/20"
        channel="Clever Programmer"
        title="🔴  Build a Facebook Clone with REACT JS for Beginners! by Clever Programmer"
        image="https://i.ytimg.com/vi/dGcsHMXbSOA/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&amp;rs=AOn4CLDKCCOldiHuYyCiJLeFvLIl7sWFY"
      />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want to learn Free javascript Programming"
        timestamp="Scheduled for 8/27/20"
        channel="Clever Programmer"
        title="🔴  Build a Facebook Clone with REACT JS for Beginners! by Clever Programmer"
        image="https://i.ytimg.com/vi/dGcsHMXbSOA/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&amp;rs=AOn4CLDKCCOldiHuYyCiJLeFvLIl7sWFY"
      />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want to learn Free javascript Programming"
        timestamp="Scheduled for 8/27/20"
        channel="Clever Programmer"
        title="🔴  Build a Facebook Clone with REACT JS for Beginners! by Clever Programmer"
        image="https://i.ytimg.com/vi/dGcsHMXbSOA/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&amp;rs=AOn4CLDKCCOldiHuYyCiJLeFvLIl7sWFY"
      />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want to learn Free javascript Programming"
        timestamp="Scheduled for 8/27/20"
        channel="Clever Programmer"
        title="🔴  Build a Facebook Clone with REACT JS for Beginners! by Clever Programmer"
        image="https://i.ytimg.com/vi/dGcsHMXbSOA/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&amp;rs=AOn4CLDKCCOldiHuYyCiJLeFvLIl7sWFY"
      />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want to learn Free javascript Programming"
        timestamp="Scheduled for 8/27/20"
        channel="Clever Programmer"
        title="🔴  Build a Facebook Clone with REACT JS for Beginners! by Clever Programmer"
        image="https://i.ytimg.com/vi/dGcsHMXbSOA/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&amp;rs=AOn4CLDKCCOldiHuYyCiJLeFvLIl7sWFY"
      />
    </div>
  );
}

export default Searchpage;
