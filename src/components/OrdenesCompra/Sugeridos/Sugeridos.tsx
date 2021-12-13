import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sc from "../styles";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RootState } from "@redux/store";

import { getAllSuggestions } from "../../../redux/features/orders/services";

import useAnimateBubble from "@hooks/useAnimateBubble";
import Historial from "./Historial";

import { ToastContainer } from "react-toastify";
import useGetNextPreviousSuggestions from "@hooks/useGetNextPreviousSuggestions";
import SugeridosTable from "./SugeridosTable";
import SugeridoBtnsOptions from "./SugeridoBtnsOptions";

const Sugeridos = () => {
  const dispatch = useDispatch();

  const { shoppingList } = useSelector(
    (store: RootState) => store.orders.shoppingData
  );

  const { toAnimate } = useAnimateBubble();

  const { page } = useGetNextPreviousSuggestions();

  useEffect(() => {
    dispatch(getAllSuggestions(page));
  }, []);

  return (
    <sc.SugeridosContainer>
      <sc.HeaderSugeridos>
        <sc.ListaCompraBtnContainer to="/farmacia/ordenes-compra/lista-compras">
          <sc.BubbleContainer ref={toAnimate}>
            {shoppingList.length}
          </sc.BubbleContainer>
          <sc.IconContainer>
            <HiOutlineShoppingBag />
          </sc.IconContainer>
          <h4>Lista de compra</h4>
        </sc.ListaCompraBtnContainer>
        <Historial />
      </sc.HeaderSugeridos>
      <SugeridosTable />
      <SugeridoBtnsOptions />
      <ToastContainer theme={"colored"} />
    </sc.SugeridosContainer>
  );
};

export default Sugeridos;
