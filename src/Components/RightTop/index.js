import React from "react";
import { ActiveRingChart, Charts } from "@jiaminghi/data-view-react";
import "./style.scss";

const RightTop = () => {
  const option = {
    radar: {
      indicator: [
        { name: "西峡", max: 300 },
        { name: "周口", max: 300 },
        { name: "南阳", max: 300 },
        { name: "驻马店", max: 300 },
        { name: "郑州", max: 300 },
        { name: "洛阳", max: 300 },
      ],
      polygon: true,
      axisLine: {
        style: {
          stroke: "rgba(251, 114, 147, .3)",
        },
      },
      splitLine: {
        style: {
          stroke: "rgba(251, 114, 147, .5)",
          fill: "rgba(251, 114, 147, .2)",
        },
      },
    },
    series: [
      {
        type: "radar",
        data: [111, 256, 178, 152, 266, 132],
      },
    ],
  };

  return <Charts option={option} />;
};

export default RightTop;
