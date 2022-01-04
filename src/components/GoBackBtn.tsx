import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BtnBack, GoBackContainer } from "./OrdenesCompra/Details/styles";
interface IProps {
  to: string;
}
const GoBackBtn = ({ to }: IProps) => {
  return (
    <GoBackContainer>
      <BtnBack to={to}>
        <MdKeyboardArrowLeft />
        <p>Regresar</p>
      </BtnBack>
    </GoBackContainer>
  );
};

export default GoBackBtn;
