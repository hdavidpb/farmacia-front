import { setShowModal } from "@redux/features/physical-inventory/physicalInventorieSlice";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import * as sc from "./styles";
const Filter = () => {
  const dispatch = useDispatch();
  return (
    <sc.FilterContainer>
      <sc.InputContainer>
        <input type="text" placeholder="Buscar Nombre" />
      </sc.InputContainer>
      <sc.OptionsContainer>
        <sc.BtnOption onClick={() => dispatch(setShowModal())}>
          <FaPlus />
          <p>Crear</p>
        </sc.BtnOption>
        <sc.BtnOption>
          <p>Generar Reporte</p>
        </sc.BtnOption>
      </sc.OptionsContainer>
    </sc.FilterContainer>
  );
};

export default Filter;
