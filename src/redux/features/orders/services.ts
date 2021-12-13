import { DataOptionsForm } from "@components/OrdenesCompra/Ordenes/interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { rest } from "../../../../services/index";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import {
  IOrderDetail,
  IOrders,
  ISuggestions,
  IUpdateStatusOrderResponse,
  UpdateOrderData,
} from "./interfaces";
import { IDataDates } from "@hooks/useSuggestionsHistory";

export const getAllOrdersData = createAsyncThunk("order/getAll", async () => {
  try {
    const res = await rest.get<IOrders[]>(
      `${process.env.REACT_APP_API_LOCAL_HOST}/orders/summarized`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const getAllOrdersDataByDates = createAsyncThunk(
  "order/getAllByDate",
  async ({ initialDate, finalDate }: DataOptionsForm) => {
    try {
      const res = await rest.get<IOrders[]>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/orders/summarized?initialDate=${initialDate}&finalDate=${finalDate}`
      );
      console.log(res.data);
      if (res.data.length === 0) {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "No hay ordenes",
          text: `No se han encontrado órdenes en ese rango de fechas ${dayjs(
            initialDate
          ).format("YYYY/MM/DD")} - ${dayjs(finalDate).format(
            "YYYY/MM/DD"
          )}, espere unos segundos por favor, se traeran todas las ordenes.`,

          confirmButtonColor: "#5533eeca",
        });
      }
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOrderDetail = createAsyncThunk(
  "order/getOrderDetail",
  async (id: string) => {
    try {
      const res = await rest.get<IOrderDetail>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/orders/${id}`
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateOrderStatus = createAsyncThunk(
  "order/putOrderStatus",
  async (data: UpdateOrderData) => {
    let status;
    if (data.status === "PENDIENTE") {
      status = {
        status: "APROBADA",
      };
    } else if (data.status === "APROBADA") {
      status = {
        status: "ENVIADA",
      };
    } else if (data.status === "RECHAZADA") {
      status = {
        status: "RECHAZADA",
      };
    }

    try {
      const res = await rest.put<IUpdateStatusOrderResponse>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/orders/${data.id}/status`,
        status
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletePurchaseOrderProduct = createAsyncThunk(
  "order/deletePurchaseOrderProduct",
  async (id: number) => {
    try {
      const res = await rest.delete(
        `${process.env.REACT_APP_API_LOCAL_HOST}/orders/product/${id}`
      );
      console.log(res.data);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);

/** ********** SUGGESTIONS ********** **/

export const getAllSuggestions = createAsyncThunk(
  "order/getSuggestions",
  async (page: number, { getState }) => {
    const quantity = getState().orders.suggestionsData.quantity;

    console.log(quantity);
    try {
      const res = await rest.get<ISuggestions>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/orders/suggestions?page=${page}&quantity=${quantity}`
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
