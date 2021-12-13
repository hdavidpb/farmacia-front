import React from "react";
import * as sc from "./styles";
import { Doughnut } from "react-chartjs-2";
const DoughnutProgress = () => {
  return (
    <sc.DoughnutGraphContainer>
      <Doughnut
        data={{
          datasets: [
            {
              data: [1, 20, 40, 60],
              backgroundColor: ["#424bfc24", "#D5D7FF", "#9A9FF9", "#424BFC"],
            },
          ],
        }}
      ></Doughnut>
    </sc.DoughnutGraphContainer>
  );
};

export default DoughnutProgress;
