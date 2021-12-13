import React from "react";
import * as sc from "./styles";

const DoughnutList = () => {
  return (
    <sc.DoughnutItemsTable>
      <sc.DescItem>
        <sc.PointDescItem />
        <sc.DescName>Lorem ipsum dolor sit amet.</sc.DescName>
        <sc.DescPercentaje>{"90%"}</sc.DescPercentaje>
      </sc.DescItem>
      <sc.DescItem>
        <sc.PointDescItem />
        <sc.DescName>Lorem ipsum dolor sit amet.</sc.DescName>
        <sc.DescPercentaje>{"90%"}</sc.DescPercentaje>
      </sc.DescItem>
      <sc.DescItem>
        <sc.PointDescItem />
        <sc.DescName>Lorem ipsum dolor sit amet.</sc.DescName>
        <sc.DescPercentaje>{"90%"}</sc.DescPercentaje>
      </sc.DescItem>
      <sc.DescItem>
        <sc.PointDescItem />
        <sc.DescName>Lorem ipsum dolor sit amet.</sc.DescName>
        <sc.DescPercentaje>{"90%"}</sc.DescPercentaje>
      </sc.DescItem>
    </sc.DoughnutItemsTable>
  );
};

export default DoughnutList;
