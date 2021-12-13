import React from "react";
import * as sc from "./styles";

interface IProps {
  view?: number;
}
const ButtonsLinks = ({ view }: IProps) => {
  return (
    <sc.BtnsContainer>
      <sc.BtnItem
        style={{ background: view === 0 ? "#CDCFFE" : "#ffffff" }}
        to="/farmacia/ordenes-compra"
      >
        Sugeridos
      </sc.BtnItem>
      <sc.BtnItem
        style={{ background: view === 1 ? "#CDCFFE" : "#ffffff" }}
        to="/farmacia/ordenes-compra/ordenes-table"
      >
        Órdenes
      </sc.BtnItem>
      {/* <sc.BtnItem
        style={{ background: view === 3 ? "#CDCFFE" : "#ffffff" }}
        to="/farmacia/ordenes-compra"
      >
        Recepción
      </sc.BtnItem> */}
    </sc.BtnsContainer>
  );
};

export default ButtonsLinks;
