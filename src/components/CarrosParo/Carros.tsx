import React, { useEffect } from "react";
import CarrosButtonsLink from "./CarrosButtonsLink";
import CarrosTable from "./CarrosTable";
import * as sc from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { clearProductsState } from "../../redux/features/products/productsSlice";
import { clearInventorieState } from "../../redux/features/inventorie/inventorieSlice";
import { clearShowMovementsDoneState } from "../../redux/features/movements/movementsSlice";
import ContainsDetal from "./ContainsDetal";
import { RootState } from "@redux/store";
const Carros = () => {
  const dispatch = useDispatch();
  const { hidenTable } = useSelector(
    (store: RootState) => store.crashCarts.crashCartsInventory
  );
  /**Clean States */
  useEffect(() => {
    dispatch(clearProductsState());
    dispatch(clearShowMovementsDoneState());
    dispatch(clearInventorieState());
  }, []);

  return (
    <sc.CarrosParoContainer>
      <CarrosButtonsLink view={0} />
      <sc.CarrosDetailsContainer>
        <CarrosTable />
        {!hidenTable ? (
          <div> Aquí podra ver el contenido del carro</div>
        ) : (
          <ContainsDetal />
        )}
      </sc.CarrosDetailsContainer>
    </sc.CarrosParoContainer>
  );
};

export default Carros;
