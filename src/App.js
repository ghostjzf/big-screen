import React from "react";
import "./App.css";
import {
  BorderBox3,
  BorderBox8,
  BorderBox9,
  BorderBox10,
  BorderBox12,
  FullScreenContainer,
  CapsuleChart,
  DigitalFlop,
  ScrollRankingBoard,
  Charts,
} from "@jiaminghi/data-view-react";
import ScrollBorad from "./ScrollBoard";
import FlyChart from "./FlyChart";
import LeftTop from "./LeftTop";
import ConicalColumnData from "./Components/ConicalColumnData";
import CenterCmp from "./Components/CenterTop/CenterCmp";
import RightTop from "./Components/RightTop";
import RightBottom from "./Components/RightBottom";

import TopHeader from "./TopHeader";

const config = {
  data: [
    {
      name: "南阳",
      value: 167,
    },
    {
      name: "周口",
      value: 1212,
    },
    {
      name: "漯河",
      value: 98,
    },
    {
      name: "郑州",
      value: 75,
    },
    {
      name: "西峡",
      value: 66,
    },
  ],
  colors: ["#e062ae", "#fb72912", "#e690d1", "#122c5e9", "#96bfff"],
  unit: "单位",
  showValue: true,
};

function App() {
  return (
    <div className="container">
      {/* <FullScreenContainer> */}
      <TopHeader />
      <div className="content">
        <div className="left">
          <BorderBox10 style={{ height: "300px" }}>
            <CapsuleChart
              config={config}
              style={{ width: "50%", height: "200px" }}
            />
          </BorderBox10>
          <BorderBox8 style={{ height: "250px" }}>
            <ConicalColumnData />
          </BorderBox8>
          <BorderBox9>
            <ScrollRankingBoard
              config={{
                data: [
                  {
                    name: "周口",
                    value: 55,
                  },
                  {
                    name: "南阳",
                    value: 120,
                  },
                  {
                    name: "西峡",
                    value: 78,
                  },
                  {
                    name: "驻马店",
                    value: 66,
                  },
                  {
                    name: "新乡",
                    value: 80,
                  },
                  {
                    name: "信阳",
                    value: 45,
                  },
                  {
                    name: "漯河",
                    value: 29,
                  },
                ],
              }}
              style={{ width: "500px", height: "300px" }}
            />
          </BorderBox9>
        </div>
        <div className="center" style={{ width: "100%" }}>
          <BorderBox3>
            <CenterCmp />
          </BorderBox3>
        </div>
        <div className="right">
          <BorderBox10 style={{ height: "300px" }}>
            <RightTop />
          </BorderBox10>
          <BorderBox12 style={{ height: "250px" }}>
            <ConicalColumnData />
          </BorderBox12>
          <BorderBox12 style={{ height: "250px" }}>
            <RightBottom />
          </BorderBox12>
        </div>
      </div>
      {/* </FullScreenContainer> */}
    </div>
  );
}

export default App;
