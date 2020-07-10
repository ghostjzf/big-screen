import React from "react";

import {
  Decoration5,
  Decoration8,
  Decoration11,
} from "@jiaminghi/data-view-react";

import "./TopHeader.css";

export default () => {
  return (
    <div id="top-header">
      <Decoration8 className="header-left-decoration" />
      {/* <Decoration5
        className="header-center-decoration"
        style={{ borderColor: "red" }}
      /> */}
      <Decoration8 className="header-right-decoration" reverse={true} />
      <div className="center-title">
        <Decoration11 style={{ width: "300px", height: "60px" }}>
          老虎集团
        </Decoration11>
      </div>
    </div>
  );
};
