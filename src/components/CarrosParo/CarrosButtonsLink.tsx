import React from "react";
import * as sc from "./styles";

interface IProps {
  view?: number;
}

const CarrosButtonsLink = ({ view }: IProps) => {
  return (
    <sc.BtnsContainer>
      <sc.BtnItem
        style={{ background: view === 0 ? "#CDCFFE" : "#ffffff" }}
        to="/farmacia/carros-paro/carros"
      >
        Carros
      </sc.BtnItem>
      <sc.BtnItem
        style={{ background: view === 1 ? "#CDCFFE" : "#ffffff" }}
        to="/farmacia/carros-paro/alertas"
      >
        Alertas
      </sc.BtnItem>
    </sc.BtnsContainer>
  );
};

export default CarrosButtonsLink;
