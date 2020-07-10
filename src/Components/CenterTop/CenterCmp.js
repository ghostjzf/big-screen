import React from "react";

import { Decoration1, ActiveRingChart } from "@jiaminghi/data-view-react";
import RightBottom from "../RightBottom";
import LabelTag from "./LabelTag";

import "./CenterCmp.scss";

const config = {
  data: [
    {
      name: "收费站",
      value: 1315,
    },
    {
      name: "监控中心",
      value: 415,
    },
    {
      name: "道路外场",
      value: 90,
    },
    {
      name: "其他",
      value: 317,
    },
  ],
  color: ["#00baff", "#3de7c9", "#fff", "#ffc530", "#469f4b"],
  lineWidth: 30,
  radius: "55%",
  activeRadius: "60%",
};

const labelConfig = { data: ["收费站", "监控中心", "道路外场", "其他"] };

const style = { width: "200px", height: "50px" };

export default () => {
  return (
    <div className="center-cmp">
      <div className="cc-details">
        <div className="card">2</div>
        <div className="card">1</div>
        <div className="card">3</div>
        <div className="card">7</div>
      </div>

      <div className="cc-main-container">
        <RightBottom />
        {/* <ActiveRingChart className="ccmc-middle" config={config} /> */}
        <LabelTag config={labelConfig} />
      </div>
    </div>
  );
};
