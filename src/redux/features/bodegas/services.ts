import { createAsyncThunk } from "@reduxjs/toolkit";
import { rest } from "../../../../services";
import { IWareHouse } from "./interface";

export const getWareHouse = createAsyncThunk("warehouse/GetAll", async () => {
  try {
    const res = await rest.get<IWareHouse[]>(
      `${process.env.REACT_APP_API_LOCAL_HOST}/warehouses`
    );

    return res.data;
  } catch (error: any) {
    return error.response.status;
  }
});
