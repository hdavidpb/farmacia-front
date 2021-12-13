import { createAsyncThunk } from "@reduxjs/toolkit";
import { rest } from "../../../../services/index";
import { IShelf } from "./interfaces";

export const getAllShelfs = createAsyncThunk(
  "physical-inventorie/getAllShelf",
  async () => {
    try {
      const res = await rest.get<IShelf[]>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/physicalInventory/shelf`
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
