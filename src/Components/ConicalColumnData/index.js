import React from "react";
import { ConicalColumnChart } from "@jiaminghi/data-view-react";

const ConicalColumnData = () => {
  const config = {
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
        value: 71,
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
        value: 35,
      },
      {
        name: "漯河",
        value: 15,
      },
    ],
    img: [],
    showValue: true,
  };

  return (
    <ConicalColumnChart
      config={config}
      style={{ width: "400px", height: "200px" }}
    />
  );
};

export default ConicalColumnData;
