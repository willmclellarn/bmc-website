import React from "react";
import About from "./About";
import Programs from "./Programs";
import Docs from "./Documents";
import Contact from "./Contact";
import EtfInfo from "./Etf";
import Randomness from "./Randomness";
import Timelock from "./Timelock";
import DelayedTxs from "./DelayedTxs";

function ContentFactory({ id, isMobile }) {
  switch (id) {
    case "about":
      return <About />;
    case "contact":
      return <Contact />;
    case "programs":
      return <Programs />;
    case "docs":
      return <Docs />;
    case "etf":
      return <EtfInfo />;
    case "randomness":
      return <Randomness />;
    case "timelock":
      return <Timelock />;
    case "dtxs":
      return <DelayedTxs />;
    default:
      return <div></div>;
  }
}

export default ContentFactory;
