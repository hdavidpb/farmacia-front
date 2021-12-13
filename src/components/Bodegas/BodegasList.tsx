import { IBodegasList, ISpliyingTableTitle } from "@components/types";
import React, { useEffect } from "react";
import * as sc from "./styles";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { getWareHouse } from "../../redux/features/bodegas/services";
import { getFilterWareHouse } from "../../redux/features/bodegas/warehouseSlice";
import { titles } from "./const";
import { LoaderContainer } from "@components/Inventario/styles";
import { GridLoader } from "react-spinners";
import { FooterTable } from "@components/Proveedores/styles";

const BodegasList = () => {
  const dispatch = useDispatch();

  const { filterWareHouses, loading } = useSelector(
    (store: RootState) => store.warehouse.warehouseData
  );

  useEffect(() => {
    dispatch(getWareHouse());
  }, []);

  return (
    <sc.BodegasListContainer>
      <sc.FilterContainer>
        <sc.FilterBox>
          <p>Filtrar</p>
          <sc.InputFiltyerBox>
            <input
              type="text"
              placeholder="ej: código...nombre...
              "
              onChange={(e) => dispatch(getFilterWareHouse(e.target.value))}
            />
            <sc.IconBox>
              <BiSearchAlt />
            </sc.IconBox>
          </sc.InputFiltyerBox>
        </sc.FilterBox>
      </sc.FilterContainer>
      <sc.HeaderTitles>
        {titles.map((title: ISpliyingTableTitle) => (
          <sc.TitleDescItem key={title.id}>{title.title}</sc.TitleDescItem>
        ))}
      </sc.HeaderTitles>
      <sc.TableBodegasListContainer>
        {!loading ? (
          filterWareHouses.map((warehouse) => (
            <sc.TableBodegasListItem key={warehouse.id}>
              <sc.DescItem>
                <p>{warehouse.code}</p>
              </sc.DescItem>
              <sc.DescItem>
                <p>{warehouse.description}</p>
              </sc.DescItem>
              <sc.DescItem>
                <p>{warehouse.costCenterCode}</p>
              </sc.DescItem>
              <sc.DescItem>
                <p>{` $ ${new Intl.NumberFormat("de-DE").format(
                  warehouse.moneyQuantity
                )}`}</p>
              </sc.DescItem>
              <sc.DescItem>
                <p>{warehouse.type}</p>
              </sc.DescItem>
            </sc.TableBodegasListItem>
          ))
        ) : (
          <LoaderContainer>
            <GridLoader color={"#CDCFFE"} size={50} />
          </LoaderContainer>
        )}
      </sc.TableBodegasListContainer>
      <FooterTable>
        {`${new Intl.NumberFormat("DE-de").format(
          filterWareHouses.length
        )} registros.`}
      </FooterTable>
    </sc.BodegasListContainer>
  );
};

export default BodegasList;
