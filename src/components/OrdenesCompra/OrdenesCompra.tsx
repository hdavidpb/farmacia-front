import React, { useEffect } from "react";
import * as sc from "./styles";

import Sugeridos from "./Sugeridos/Sugeridos";
import ButtonsLinks from "./ButtonsLinks";
import { useDispatch } from "react-redux";
import { clearProductsState } from "../../redux/features/products/productsSlice";
import { clearInventorieState } from "../../redux/features/inventorie/inventorieSlice";
import { clearShowMovementsDoneState } from "../../redux/features/movements/movementsSlice";
const OrdenesCompra = () => {
  const dispatch = useDispatch();
  /**Clean states */
  useEffect(() => {
    dispatch(clearProductsState());
    dispatch(clearShowMovementsDoneState());
    dispatch(clearInventorieState());
  }, []);
  return (
    <sc.OrdenesContainer>
      <ButtonsLinks view={0} />
      <Sugeridos />
    </sc.OrdenesContainer>
  );
};

export default OrdenesCompra;
