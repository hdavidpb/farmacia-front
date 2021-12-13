import { ISpliyingTableTitle } from "@components/types";
import React, { useEffect, useState } from "react";
import EntradasList from "./EntradasList";
import SalidasList from "./SalidasList";
import { useDispatch } from "react-redux";
import { clearProductsState } from "../../redux/features/products/productsSlice";
import { clearInventorieState } from "../../redux/features/inventorie/inventorieSlice";
import { useSelector } from "react-redux";
import MovimientosRealizados from "./MovimientosRealizados";
import { RootState } from "@redux/store";
import { clearShowMovementsDoneState } from "../../redux/features/movements/movementsSlice";
import Filter from "./Filter";
import * as sc from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Movimientos = () => {
  const dispatch = useDispatch();
  /**Clean States */
  useEffect(() => {
    dispatch(clearProductsState());

    dispatch(clearInventorieState());
  }, []);
  const [view, setView] = useState(true);
  const titles = [
    {
      id: "1",
      title: "Desc. Transacción",
    },
    {
      id: "2",
      title: "Total",
    },
  ];

  const { showDoneMovements } = useSelector(
    (store: RootState) => store.movements
  );

  return (
    <sc.MovimientosContainer>
      <sc.MovimientosComponentsContainer>
        <sc.SwitchButtonsContainer>
          <sc.ButtonSwitch
            style={{
              background: view ? "#4E5C6E" : "#afafecce",
              color: view ? "#d0d0ecef " : "#4E5C6E",
            }}
            onClick={() => {
              setView(true), dispatch(clearShowMovementsDoneState());
            }}
          >
            Entradas
          </sc.ButtonSwitch>
          <sc.ButtonSwitch
            style={{
              background: !view ? "#4E5C6E" : "#afafecce",
              color: !view ? "#d0d0ecef" : "#4E5C6E",
            }}
            onClick={() => {
              setView(false), dispatch(clearShowMovementsDoneState());
            }}
          >
            Salidas
          </sc.ButtonSwitch>
        </sc.SwitchButtonsContainer>
        <Filter />

        <sc.HeaderTitleTable>
          {titles.map((el: ISpliyingTableTitle) => (
            <sc.TitleItem key={el.id}> {el.title}</sc.TitleItem>
          ))}
        </sc.HeaderTitleTable>
        {view ? <EntradasList /> : <SalidasList />}
      </sc.MovimientosComponentsContainer>

      {/* Movimientos realizados */}

      <sc.MovContainer>
        {showDoneMovements ? (
          <MovimientosRealizados />
        ) : (
          <h5>Seleccione una Razón para ver detalles</h5>
        )}
      </sc.MovContainer>
      <ToastContainer theme={"colored"} />
    </sc.MovimientosContainer>
  );
};

export default Movimientos;
