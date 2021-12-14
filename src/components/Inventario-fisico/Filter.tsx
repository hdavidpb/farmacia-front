import {
  setShelfFilter,
  setShowModal,
} from "@redux/features/physical-inventory/physicalInventorieSlice";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import * as sc from "./styles";
const Filter = () => {
  const dispatch = useDispatch();

  const [filterValue, setFilterValue] = useState<string>("");

  const handleFilterValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
    dispatch(setShelfFilter(e.target.value));
  };

  return (
    <sc.FilterContainer>
      <sc.InputContainer>
        <input
          type="text"
          placeholder="Buscar Nombre"
          value={filterValue}
          onChange={(e) => handleFilterValue(e)}
        />
      </sc.InputContainer>
      <sc.OptionsContainer>
        <sc.BtnOption onClick={() => dispatch(setShowModal())}>
          <FaPlus />
          <p>Crear</p>
        </sc.BtnOption>
        <sc.BtnOption
          onClick={() =>
            window.open(
              `${process.env.REACT_APP_API_LOCAL_HOST}/physicalInventory/shelf/report`
            )
          }
        >
          <p>Generar Reporte</p>
        </sc.BtnOption>
      </sc.OptionsContainer>
    </sc.FilterContainer>
  );
};

export default Filter;
