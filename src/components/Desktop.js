import React, { useState, useEffect } from "react";
// import Explorer from './Explorer'
import Notepad from "./Notepad";
// import DataContext from '../contexts/dataContext'
import "../App.css";
import { EventEmitter } from "./EventEmitter";
import { Modal } from "@react95/core";
import {
  Explorer100,
  FlyingThroughSpace100,
  FolderExe2,
  FolderFile,
  InfoBubble,
  Mail3,
  Network2,
  QuestionBubble,
  Time,
  Timedate200,
  Url105,
  Access223,
  Inetcpl1313,
} from "@react95/icons";

import DesktopIcon from "./DesktopIcon";
import MassiveDesktopIcon from "./MassiveDesktopIcon";

function WebsiteDesktop(props) {
  const isMobile = window.innerWidth < 850;
  const [openEditors, setOpenEditors] = useState([]);

  const [closeInfo, setCloseInfo] = useState(true);

  const editors = [
    { id: "about", name: "About", ico: <QuestionBubble /> },
    { id: "programs", name: "Programs", ico: <FolderExe2 /> },
    { id: "docs", name: "Documents", ico: <FolderFile /> },
    { id: "contact", name: "Contact", ico: <Mail3 /> },
    { id: "etf", name: "ETF Network", ico: <Network2 /> },
    { id: "randomness", name: "Randomness", ico: <Url105 /> },
    { id: "timelock", name: "Timelock Encryption", ico: <Time /> },
    { id: "dtxs", name: "Delayed Transactions", ico: <Timedate200 /> },
    { id: "access", name: "Access Control", ico: <Access223 /> },
  ];

  useEffect(() => {
    setOpenEditors([{ id: "about", name: "About", ico: <QuestionBubble /> }]);

    editors.forEach((editor) => {
      EventEmitter.subscribe(editor.id, () => {
        openNotepad(editor);
      });
    });
    // eslint-disable-next-line
  }, []);

  const getNextX = (n) => {
    return `${35 + 5 * n}%`;
  };

  const getNextY = (n) => {
    return `${15 + 5 * n}%`;
  };

  const closeNotepad = (id) => {
    setOpenEditors(openEditors.filter((editor) => editor.id !== id));
  };

  const openNotepad = (item) => {
    setOpenEditors((prevEditors) => {
      if (!prevEditors.some((editor) => editor.id === item.id)) {
        return [...prevEditors, item];
      }
      return prevEditors;
    });
  };

  return (
    <>
      <Modal
        icon={<FlyingThroughSpace100 />}
        title={`bull marketing co`}
        style={{
          left: isMobile ? "5%" : "10%",
          top: isMobile ? "3%" : "5%",
          width: isMobile ? "90%" : 650,
        }}
      >
        <div className="centered">
          <span className="title">The Bull Marketing Company</span>

          <div className="links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/willmclellarn/bmc-website"
            >
              Github
            </a>
            |
            {/* <a
              target="_blank"
              rel="noreferrer"
              href="https://discord.gg/4fMDbyRw7R"
            >
              Discord
            </a> */}
            |
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/bullmktgco"
            >
              Twitter
            </a>
          </div>
        </div>
      </Modal>
      {closeInfo && (
        <Modal
          icon={<InfoBubble />}
          title={`info`}
          closeModal={() => setCloseInfo(false)}
          style={{
            left: isMobile ? "50%" : "10%",
            top: isMobile ? "30%" : "25%",
            width: isMobile ? "90%" : 450,
          }}
        >
          <div className="centered">
            <span>Click Start To Start Bull Marketing</span>
          </div>
          <a href="https://shop.bullmarketingco.com">
            <MassiveDesktopIcon
              ico={<Inetcpl1313 />}
              text="Shop BMC Merch"
              eventType={"access"}
            />
          </a>
        </Modal>
      )}
      {openEditors.map((editor, idx) => (
        <Notepad
          key={editor.id}
          closeNotepad={() => closeNotepad(editor.id)}
          ico={editor.ico}
          selectedItem={editor}
          isMobile={isMobile}
          left={getNextX(idx)}
          top={getNextY(idx)}
        />
      ))}
      <div className="init-icos">
        <DesktopIcon
          ico={<FolderFile variant="32x32_4" />}
          text="Documents"
          eventType={"docs"}
        />
        <DesktopIcon
          ico={<Explorer100 />}
          text="TerraBit.exe"
          eventType={"terrabit"}
        />
      </div>
    </>
  );
}

export default WebsiteDesktop;
