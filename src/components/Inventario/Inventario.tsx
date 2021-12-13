import React, { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";
import * as sc from "./styles";
import {
  FilterBox,
  FilterContainer,
  IconBox,
  InputFiltyerBox,
} from "../Bodegas/styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import {
  getAllInventories,
  getinventarieWareHouseById,
} from "../../redux/features/inventorie/services";
import ErrorModal from "@components/ErrorsModal/ErrorModal";
import { generateRandomColor } from "../../redux/features/inventorie/const";
import { BiSearchAlt } from "react-icons/bi";
import { clearProductsState } from "../../redux/features/products/productsSlice";
import {
  changeInventorieWarehouseFilter,
  getFilterInventorie,
} from "../../redux/features/inventorie/inventorieSlice";
import { clearShowMovementsDoneState } from "../../redux/features/movements/movementsSlice";
import { AiOutlineClear } from "react-icons/ai";
import { FooterTable } from "@components/Proveedores/styles";
const Inventario = () => {
  const dispatch = useDispatch();
  // const { inventoryWarhouse } = useSelector(
  //   (store: RootState) => store.inventorie.inventoriesData
  // );
  const { filterResults, filterInventoryWarhouse } = useSelector(
    (store: RootState) => store.inventorie.inventoriesData
  );
  const { loading, error } = useSelector(
    (store: RootState) => store.inventorie.inventoriesData.inventorie
  );
  const { loadingWarehouse } = useSelector(
    (store: RootState) => store.inventorie.inventoriesData.inventoryWarhouse
  );
  const [filterValue, setFilterValue] = useState<string>("");
  const [selected, setSelected] = useState<number>(-1);
  const [showInventoryWarehoseTable, setShowInventoryWarehoseTable] =
    useState<boolean>(false);
  const [checkValue, setCheckValue] = useState<boolean>(false);

  const handleGetFilterResults = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };
  const onSubmit = () => {
    dispatch(getFilterInventorie(filterValue));
  };

  const handleCleanFilter = () => {
    setFilterValue("");
    dispatch(getAllInventories());
    setShowInventoryWarehoseTable(false);
  };

  const handleChangeFilterInventarieFilter = (check: boolean) => {
    setCheckValue(!checkValue);
    dispatch(changeInventorieWarehouseFilter(!check));
  };

  const handleGetInventorieWarehouse = (index: number, productId: string) => {
    dispatch(getinventarieWareHouseById(productId));
    setSelected(index);
    setShowInventoryWarehoseTable(true);
    setCheckValue(false);
  };

  useEffect(() => {
    /* CLEAN STATES*/
    dispatch(clearProductsState());
    dispatch(clearShowMovementsDoneState());
  }, []);

  useEffect(() => {
    dispatch(getAllInventories());
    generateRandomColor();
  }, []);

  return (
    <sc.AllContainer>
      <FilterContainer>
        <FilterBox>
          <p>Filtrar</p>
          <InputFiltyerBox>
            <input
              value={filterValue}
              type="text"
              placeholder="ej: código..."
              onChange={(e) => handleGetFilterResults(e)}
            />
            <IconBox>
              <BiSearchAlt />
            </IconBox>
          </InputFiltyerBox>
          <button onClick={onSubmit}>
            <BiSearchAlt />
          </button>
          <button onClick={handleCleanFilter}>
            <AiOutlineClear />
          </button>
        </FilterBox>
      </FilterContainer>
      <sc.InventarioContainer>
        {error && <ErrorModal error={error} />}
        <sc.InventarioListContainer>
          <sc.HeaderTitlesList columns={"4"}>
            <sc.TitleDescItem>Codigo</sc.TitleDescItem>
            <sc.TitleDescItem>Categoria</sc.TitleDescItem>
            <sc.TitleDescItem>Nombre</sc.TitleDescItem>
            <sc.TitleDescItem>Cantidad</sc.TitleDescItem>
          </sc.HeaderTitlesList>
          <sc.TableInventarioList>
            {!loading ? (
              filterResults.map((inv, index) => (
                <sc.TableItemList
                  style={{
                    background: selected === index ? "#DCFFF2" : "#ffffff",
                  }}
                  columns={"4"}
                  key={inv.productid}
                  onClick={() =>
                    handleGetInventorieWarehouse(index, inv.productid)
                  }
                >
                  <sc.DescItem>{inv.productcode}</sc.DescItem>
                  <sc.DescItem>{inv.productcategory}</sc.DescItem>
                  <sc.DescItem>{inv.productname}</sc.DescItem>
                  <sc.DescItem>{inv.totalQuantity}</sc.DescItem>
                </sc.TableItemList>
              ))
            ) : (
              <sc.LoaderContainer>
                <GridLoader color={"#CDCFFE"} size={50} />
              </sc.LoaderContainer>
            )}
          </sc.TableInventarioList>
          <FooterTable>
            {`${new Intl.NumberFormat("DE-de").format(
              filterResults.length
            )} registros.`}
          </FooterTable>
        </sc.InventarioListContainer>

        {showInventoryWarehoseTable ? (
          <sc.BodegasListContainer>
            <sc.HeaderTitlesList columns={"2"}>
              <sc.CkeckContainer>
                <label htmlFor="checkAll">Ver todo</label>
                <input
                  checked={checkValue}
                  type="checkbox"
                  id="checkAll"
                  onChange={() =>
                    handleChangeFilterInventarieFilter(checkValue)
                  }
                />
              </sc.CkeckContainer>
              <sc.TitleDescItem>Bodega</sc.TitleDescItem>
              <sc.TitleDescItem>Cantidad</sc.TitleDescItem>
            </sc.HeaderTitlesList>
            <sc.TableInventarioList>
              {!loadingWarehouse ? (
                filterInventoryWarhouse.map((inv) => (
                  <sc.TableItemList columns={"2"} key={inv.id}>
                    <sc.DescItem>
                      <sc.BoxColorContainer
                        style={{
                          background: generateRandomColor(),
                        }}
                      ></sc.BoxColorContainer>
                      <sc.TextContainer>
                        {inv.warehouse.whDescription}
                      </sc.TextContainer>
                    </sc.DescItem>
                    <sc.DescItem>{inv.quantity}</sc.DescItem>
                  </sc.TableItemList>
                ))
              ) : (
                <sc.LoaderContainer>
                  <GridLoader color={"#CDCFFE"} size={30} />
                </sc.LoaderContainer>
              )}
            </sc.TableInventarioList>
          </sc.BodegasListContainer>
        ) : (
          <sc.BodegasListContainer>
            <h6>Seleccione un producto para ver detalles</h6>
          </sc.BodegasListContainer>
        )}
      </sc.InventarioContainer>
    </sc.AllContainer>
  );
};

export default Inventario;
