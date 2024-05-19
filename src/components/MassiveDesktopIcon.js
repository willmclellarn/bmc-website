import React, { useState } from "react";
import { EventEmitter } from "./EventEmitter";
import Draggable from "react-draggable";
import { color } from "@xstyled/styled-components";

// Define styles to make the icon and text larger
const styles = {
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    width: "5em", // Make the icon 5x larger
    height: "5em",
  },
  text: {
    fontSize: "2em", // Adjust text size as needed
    color: "black",
  },
};

// TODO: this should be tied to the taskbar somehow
function MassiveDesktopIcon({ ico, text, eventType }) {
  const [waitingClick, setWaitingClick] = useState(null);
  const [lastClick, setLastClick] = useState(0);

  const processClick = (e) => {
    if (lastClick && e.timeStamp - lastClick < 250 && waitingClick) {
      // double click
      setLastClick(0);
      clearTimeout(waitingClick);
      setWaitingClick(null);
      switch (eventType) {
        case "terrabit":
          window.open("https://terrabit.idealabs.network");
          break;
        default:
          EventEmitter.dispatch(eventType, true);
          break;
      }
    } else {
      // single click
      setLastClick(e.timeStamp);
      setWaitingClick(
        setTimeout(() => {
          setWaitingClick(null);
        }, 251)
      );
    }
  };

  return (
    <div>
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
      >
        <div
          className="ico handle"
          onClick={processClick}
          style={styles.iconContainer}
        >
          <div style={styles.icon}>{ico}</div>
          <div style={styles.text}>{text}</div>
        </div>
      </Draggable>
    </div>
  );
}

export default MassiveDesktopIcon;
