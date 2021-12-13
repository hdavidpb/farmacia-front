import React, { useEffect } from "react";
import BodegasList from "./BodegasList";
import * as sc from "./styles";
import { useDispatch } from "react-redux";
import SupliyingState from "./SupliyingState";
import { clearProductsState } from "../../redux/features/products/productsSlice";
import { clearInventorieState } from "../../redux/features/inventorie/inventorieSlice";
import { clearShowMovementsDoneState } from "../../redux/features/movements/movementsSlice";

const Bodegas = () => {
  const dispatch = useDispatch();

  //Clear States
  useEffect(() => {
    dispatch(clearProductsState());
    dispatch(clearShowMovementsDoneState());
    dispatch(clearInventorieState());
  }, []);

  return (
    <sc.BodegasContainer>
      <BodegasList />

      {/* <SupliyingState /> */}
    </sc.BodegasContainer>
  );
};

export default Bodegas;
