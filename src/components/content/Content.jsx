import React from "react";
import "./content.css";
import ContentCreate from "../contentCreate/ContentCreate";
function Content() {
  return (
    <>
      <div className="content">
        <div className="content-details">
          <ContentCreate />
        </div>
      </div>
    </>
  );
}

export default Content;
