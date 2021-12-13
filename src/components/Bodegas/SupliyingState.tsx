import React from "react";
import DoughnutList from "./DoughnutList";
import DoughnutProgress from "./DoughnutProgress";
import * as sc from "./styles";

const SupliyingState = () => {
  return (
    <sc.SupliyingContainer>
      <DoughnutProgress />
      <DoughnutList />
    </sc.SupliyingContainer>
  );
};

export default SupliyingState;
