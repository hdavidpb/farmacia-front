import React, { useEffect } from "react";
import * as sc from "./styles";
import {
  getALLProducts,
  getProducDetail,
} from "../../redux/features/products/services";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { LoaderContainer } from "@components/Inventario/styles";
import GridLoader from "react-spinners/GridLoader";
import { useHistory } from "react-router-dom";
import { FooterTable } from "@components/Proveedores/styles";

const TableContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getALLProducts());
  }, []);

  const { loading } = useSelector(
    (store: RootState) => store.products.productsData.products
  );
  const { filterResults } = useSelector(
    (store: RootState) => store.products.productsData
  );

  const handleGoToDetails = (id: string) => {
    history.push(`/farmacia/productos/ficha-tecnica/${id}`);
  };

  return (
    <sc.TableContainer>
      <sc.HeaderTitles>
        <sc.TitleDescItem>Código</sc.TitleDescItem>
        <sc.TitleDescItem>Categoría</sc.TitleDescItem>
        <sc.TitleDescItem>Nombre</sc.TitleDescItem>
        <sc.TitleDescItem>Valor Unitario</sc.TitleDescItem>
      </sc.HeaderTitles>
      <sc.TableListContainer>
        {!loading ? (
          filterResults.map((prod) => (
            <sc.TableListItem
              key={prod.code}
              onClick={() => handleGoToDetails(prod.id)}
            >
              <sc.DescItem>{prod.code}</sc.DescItem>
              <sc.DescItem>{prod.category.name}</sc.DescItem>
              <sc.DescItem>{prod.name}</sc.DescItem>
              <sc.DescItem>
                $ {new Intl.NumberFormat("de-DE").format(Number(prod.price))}
              </sc.DescItem>
            </sc.TableListItem>
          ))
        ) : (
          <LoaderContainer>
            <GridLoader color={"#CDCFFE"} size={50} />
          </LoaderContainer>
        )}
      </sc.TableListContainer>
      <FooterTable>{`${new Intl.NumberFormat("DE-de").format(
        filterResults.length
      )} ${
        filterResults.length === 1 ? "registro" : "registros"
      }`}</FooterTable>
    </sc.TableContainer>
  );
};

export default TableContainer;
