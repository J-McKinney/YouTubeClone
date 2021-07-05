import React from "react";
import styling from "./VideoContainer.module.css";

function VideoContainer(props) {
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

export default VideoContainer;
