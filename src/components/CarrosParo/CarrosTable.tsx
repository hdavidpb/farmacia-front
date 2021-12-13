import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sc from "./styles";
import Select from "react-select";
import { BiSearchAlt } from "react-icons/bi";
import {
  getAllCrashCartInventory,
  getAllCrashCarts,
  getCrashCartInventoryById,
} from "../../redux/features/crashcarts/services";
import { RootState } from "@redux/store";
import { LoaderContainer } from "@components/Inventario/styles";
import GridLoader from "react-spinners/GridLoader";
import {
  getFilterCrashCarts,
  setInventaryNameAndId,
} from "../../redux/features/crashcarts/crashcartsSlice";
import { IcrashCartNameAndId } from "../../redux/features/crashcarts/interfaces";

const CarrosTable = () => {
  const dispatch = useDispatch();
  const { loading, crashCartsFilter } = useSelector(
    (store: RootState) => store.crashCarts.crashCarsData
  );
  const { selected, crashCartNameAndId } = useSelector(
    (store: RootState) => store.crashCarts.crashCartsInventory
  );

  const handleGetInventoryById = (code: string, id: number, index: number) => {
    const crahsCartNameAndId: IcrashCartNameAndId = {
      code: code,
      id: id,
      indexSelected: index,
    };
    dispatch(setInventaryNameAndId(crahsCartNameAndId));
    dispatch(getCrashCartInventoryById(id));
  };

  useEffect(() => {
    dispatch(getAllCrashCarts());
  }, []);

  return (
    <sc.CarrosTableContainer>
      <sc.HeaderFilterContainer>
        <sc.FielContainer>
          <h6>Nombre o Código</h6>
          {/* <Select options={[]} placeholder="Pabellón..." /> */}
        </sc.FielContainer>
        <sc.FielContainer>
          <sc.InputContainer>
            <sc.IconContainer>
              <BiSearchAlt />
            </sc.IconContainer>
            <input
              type="text"
              placeholder="Buscar..."
              onChange={(e) => dispatch(getFilterCrashCarts(e.target.value))}
            />
          </sc.InputContainer>
        </sc.FielContainer>
        {/* <sc.BtnClear>Limpiar</sc.BtnClear> */}
      </sc.HeaderFilterContainer>
      <sc.TableTitlesContainer>
        <sc.TitleDescItem>Código</sc.TitleDescItem>
        <sc.TitleDescItem>Carro</sc.TitleDescItem>
        <sc.TitleDescItem>Cod. Candado</sc.TitleDescItem>
      </sc.TableTitlesContainer>
      <sc.TableContainer>
        {!loading ? (
          crashCartsFilter.map((carts, index) => (
            <sc.CarListItem
              onClick={() =>
                handleGetInventoryById(carts.code, carts.id, index)
              }
              key={carts.id}
              style={{
                background:
                  crashCartNameAndId?.code === carts.code
                    ? "#DCFFF2"
                    : "#ffffff",
              }}
            >
              <sc.DescItem>{carts.code}</sc.DescItem>
              <sc.DescItem>{carts.name}</sc.DescItem>
              <sc.DescItem>
                {/* <button
                  style={{
                    background:
                      crashCartNameAndId?.code === carts.code
                        ? "#9A9FF9"
                        : "#4E5C6E",
                  }}
                  onClick={() =>
                    handleGetInventoryById(carts.code, carts.id, index)
                  }
                >
                  Ver Contenido
                </button> */}
                {carts.lastRegisteredPadLock
                  ? carts.lastRegisteredPadLock
                  : "N/A"}
              </sc.DescItem>
            </sc.CarListItem>
          ))
        ) : (
          <LoaderContainer>
            <GridLoader color={"#CDCFFE"} size={50} />
          </LoaderContainer>
        )}
      </sc.TableContainer>
    </sc.CarrosTableContainer>
  );
};

export default CarrosTable;
