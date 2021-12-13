import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as sc from "./styles";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { RootState } from "@redux/store";
import { LoaderContainer } from "@components/Inventario/styles";
import { GridLoader } from "react-spinners";
import {
  nextInventaryPage,
  previousInventaryPage,
} from "../../redux/features/crashcarts/crashcartsSlice";

import useAnimate from "@hooks/useAnimate";
import { getAllCrashCartInventory } from "@redux/features/crashcarts/services";

const ContainsDetal = () => {
  const dispatch = useDispatch();
  const {
    loadingInventory,
    crashCartNameAndId,
    inventoryById,
    initialPage,
    maximunPage,
  } = useSelector((store: RootState) => store.crashCarts.crashCartsInventory);
  const { toAnimate } = useAnimate();

  return (
    <sc.ContainsDetailsContainer>
      {!loadingInventory ? (
        <>
          <sc.HeaderMessage>
            <h4>{`Inventario de carro de paro #${crashCartNameAndId?.code}`}</h4>
            <sc.TitleDescItem
              autoWidth={true}
              dark={true}
              onClick={() => dispatch(getAllCrashCartInventory())}
              style={{
                background:
                  crashCartNameAndId?.code === "TODOS" ? "#DCFFF2" : "",
                color: crashCartNameAndId?.code === "TODOS" ? "#4E5C6E" : "",
              }}
            >
              Ver todos
            </sc.TitleDescItem>
          </sc.HeaderMessage>
          <sc.TypeOptionsContainer>
            {/* Buttons */}
            <sc.ArrowIconContainer
              style={{ opacity: initialPage === 0 ? 0.4 : 1 }}
              disabled={initialPage === 0}
              onClick={() => dispatch(previousInventaryPage())}
            >
              <TiArrowLeftThick />
            </sc.ArrowIconContainer>
            <sc.Label ref={toAnimate}>
              {inventoryById.length !== 0
                ? inventoryById[initialPage].category
                : null}
            </sc.Label>
            {/* Buttons */}
            <sc.ArrowIconContainer
              style={{ opacity: initialPage === maximunPage - 1 ? 0.4 : 1 }}
              onClick={() => dispatch(nextInventaryPage())}
            >
              <TiArrowRightThick />
            </sc.ArrowIconContainer>
          </sc.TypeOptionsContainer>
          <sc.ContainsDetailsTable>
            {inventoryById.length !== 0
              ? inventoryById[initialPage].results.map((result) => (
                  <sc.ContainsDetailsList key={result.productId}>
                    <sc.DescItem>{result.productName} </sc.DescItem>
                    <sc.DescItem> {`${result.quantity} Und`}</sc.DescItem>
                  </sc.ContainsDetailsList>
                ))
              : null}
          </sc.ContainsDetailsTable>
        </>
      ) : (
        <LoaderContainer>
          <GridLoader color={"#CDCFFE"} size={50} />
        </LoaderContainer>
      )}
    </sc.ContainsDetailsContainer>
  );
};

export default ContainsDetal;
