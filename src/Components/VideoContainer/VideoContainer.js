import React from "react";
import Container from "react-bootstrap/Container";
import styling from "./VideoContainer.module.css";

function VideoContainer(props) {
  return (
    <>
      <div className={styling.wrapper}>
        <Container className={styling.container}>
          <div className={styling.row}>
            <div>{props.children}</div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default VideoContainer;
