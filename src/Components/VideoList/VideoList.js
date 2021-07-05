import React from "react";
import styling from "./VideoList.module.css";

function VideoList(props) {
  return (
    <>
      <div className={styling.wrapper}>
        <div className={styling.container}>
          <div className={styling.row}>
            <div>{props.children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoList;
