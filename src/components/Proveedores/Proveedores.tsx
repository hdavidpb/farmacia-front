import React, { useEffect } from "react";
import * as sc from "./styles";
import { BiSearchAlt } from "react-icons/bi";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { clearProductsState } from "../../redux/features/products/productsSlice";
import { clearInventorieState } from "../../redux/features/inventorie/inventorieSlice";
import { ClearInputsContainer } from "@components/Productos/styles";
import { AiOutlineClear } from "react-icons/ai";

import useFilterStates from "./useFilterStates";
import { RootState } from "@redux/store";

const Proveedores = () => {
  const dispatch = useDispatch();
  const { providers } = useSelector(
    (store: RootState) => store.providers.providersData
  );
  const {
    filterName,
    filterNit,

    handleClearFields,
    handleFilterName,
    handleFilterNit,
    handleOnSubmit,
    disabledClear,
  } = useFilterStates();

  /**Clean States */
  useEffect(() => {
    dispatch(clearProductsState());
    dispatch(clearInventorieState());
  }, []);

  return (
    <sc.ProveedoresContainer>
      <sc.HeaderFiltersContainer>
        <sc.FilterBoxContainer>
          <h4>NIT</h4>
          <sc.InputContainer>
            <sc.IconContainer>
              <BiSearchAlt />
            </sc.IconContainer>
            <input
              value={filterNit}
              name="nit"
              type="number"
              placeholder="Buscar"
              onChange={(e) => handleFilterNit(e)}
            />
          </sc.InputContainer>
        </sc.FilterBoxContainer>
        <sc.FilterBoxContainer>
          <h4>Nombre</h4>
          <sc.InputContainer>
            <sc.IconContainer>
              <BiSearchAlt />
            </sc.IconContainer>
            <input
              value={filterName}
              name="name"
              type="text"
              placeholder="Buscar"
              onChange={(e) => handleFilterName(e)}
            />
          </sc.InputContainer>
        </sc.FilterBoxContainer>
        <ClearInputsContainer onClick={handleOnSubmit}>
          <BiSearchAlt />
        </ClearInputsContainer>
        <ClearInputsContainer
          onClick={handleClearFields}
          style={{ opacity: disabledClear ? 0.4 : 1 }}
        >
          <AiOutlineClear />
        </ClearInputsContainer>
      </sc.HeaderFiltersContainer>
      <Table />
      <sc.FooterTable>
        {`${new Intl.NumberFormat("DE-de").format(
          providers.totalResults
        )} registros.`}
      </sc.FooterTable>
    </sc.ProveedoresContainer>
  );
};

export default Proveedores;
