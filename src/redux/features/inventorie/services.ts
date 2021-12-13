import { createAsyncThunk } from "@reduxjs/toolkit";
import { rest } from "../../../../services";
import { IInventoryWarhouse } from "./interface";

export const getAllInventories = createAsyncThunk(
  "inventories/GetAll",
  async () => {
    try {
      const res = await rest.get(
        `${process.env.REACT_APP_API_LOCAL_HOST}/inventories/total-warehouses-product-inventory`
      );
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      console.log(error.response.status);
      return error ? error.response.status : "Ah ocurrido un error";
    }
  }
);
export const getinventarieWareHouseById = createAsyncThunk(
  "inventoryWarehouse/ById",
  async (id: string) => {
    try {
      const res = await rest.get<IInventoryWarhouse>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/inventories/product-inventory-warehouse/${id}`
      );
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      console.log(error.response.status);
      return error.response.status;
    }
  }
);
