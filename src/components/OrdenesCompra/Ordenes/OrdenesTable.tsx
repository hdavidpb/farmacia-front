import {
  getAllOrdersData,
  getOrderDetail,
} from "../../../redux/features/orders/services";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ButtonsLinks from "../ButtonsLinks";
import * as sc from "../styles";
import { RootState } from "@redux/store";
import { LoaderContainer } from "@components/Inventario/styles";
import GridLoader from "react-spinners/GridLoader";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { BiSearchAlt } from "react-icons/bi";
import FilterOrders from "./FilterOrders";

dayjs.extend(customParseFormat);
const OrdenesTable = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { orders, loading } = useSelector(
    (store: RootState) => store.orders.ordersData
  );

  useEffect(() => {
    if (orders.length === 0) {
      dispatch(getAllOrdersData());
    }
  }, [orders.length]);

  const handleToDetails = (id: number) => {
    history.push(`/farmacia/ordenes-compra/ordenes-table/detalles/${id}`);
  };

  return (
    <sc.OrdenesContainer>
      <ButtonsLinks view={1} />
      <sc.OrdenesTableContainer>
        <FilterOrders />
        <sc.TableTitlesContainer>
          <sc.TitleDescItem>Fecha</sc.TitleDescItem>
          <sc.TitleDescItem>ID</sc.TitleDescItem>
          <sc.TitleDescItem>Proveedor</sc.TitleDescItem>
          <sc.TitleDescItem>Productos</sc.TitleDescItem>
          <sc.TitleDescItem>Valor</sc.TitleDescItem>
          <sc.TitleDescItem>Estado</sc.TitleDescItem>
        </sc.TableTitlesContainer>
        <sc.TableContainer>
          {!loading ? (
            orders.map((order) => (
              <sc.ListItem
                onClick={() => handleToDetails(order.id)}
                key={order.id}
              >
                <sc.DescItem>
                  {dayjs(order.date).format("DD/MM/YYYY")}
                </sc.DescItem>
                <sc.DescItem>{order.id}</sc.DescItem>
                <sc.DescItem>
                  {order.provider ? order.provider.trim() : "N/A"}
                </sc.DescItem>
                <sc.DescItem>{order.productsCount}</sc.DescItem>
                <sc.DescItem>{`$ ${new Intl.NumberFormat("de-DE").format(
                  Number(order.totalPrice)
                )}`}</sc.DescItem>
                <sc.DescontainerTwo>
                  <sc.StateCircle status={order.status}></sc.StateCircle>
                  <p>{order.status}</p>
                </sc.DescontainerTwo>
              </sc.ListItem>
            ))
          ) : (
            <LoaderContainer>
              <GridLoader color={"#CDCFFE"} size={50} />
            </LoaderContainer>
          )}
        </sc.TableContainer>
      </sc.OrdenesTableContainer>
    </sc.OrdenesContainer>
  );
};

export default OrdenesTable;
