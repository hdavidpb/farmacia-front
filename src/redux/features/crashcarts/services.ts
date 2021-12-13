import { createAsyncThunk } from "@reduxjs/toolkit";
import { rest } from "../../../../services/index";
import {
  IAlert,
  IAlertDetail,
  ICrashCarts,
  IInventory,
  ILockData,
  IlockResponse,
} from "./interfaces";

export const getAllCrashCarts = createAsyncThunk(
  "getAllCrashCarts",
  async () => {
    try {
      const res = await rest.get<ICrashCarts>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/crash-carts`
      );

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCrashCartInventoryById = createAsyncThunk(
  "getCrashCartInventoryById",
  async (id: number) => {
    try {
      const res = await rest.get<IInventory[]>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/inventories/crash-cart-inventory/${id}`
      );

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllCrashCartInventory = createAsyncThunk(
  "getAllCrashCartInventory",
  async () => {
    try {
      const res = await rest.get<IInventory[]>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/inventories/total-crash-carts-product-inventory`
      );

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

/**************************ALERTS*****************************/

export const getAllAlerts = createAsyncThunk("getAllAlerts", async () => {
  try {
    const res = await rest.get<IAlert[]>(
      `${process.env.REACT_APP_API_LOCAL_HOST}/crash-carts/alerts`
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const getAllAlertDetail = createAsyncThunk(
  "getAllAlertDetail",
  async (id: string) => {
    try {
      const res = await rest.get<IAlertDetail[]>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/crash-carts/alerts/${id}`
      );

      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const putLockCode = createAsyncThunk(
  "putPadLockCode",
  async (data: ILockData) => {
    try {
      const res = await rest.put<IlockResponse>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/crash-carts/lock/${data.crashCartId}`,
        {
          padlockCode: data.padlockCode,
        }
      );

      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
