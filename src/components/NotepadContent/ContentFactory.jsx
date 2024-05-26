import React from "react";
import About from "./About";

import Contact from "./Contact";

function ContentFactory({ id, isMobile }) {
  switch (id) {
    case "about":
      return <About />;
    case "contact":
      return <Contact />;
    default:
      return <div></div>;
  }
}

export default ContentFactory;
