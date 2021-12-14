import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { rest } from "../../../../services/index";
import {
  IDataPostCreate,
  IPhysicalInventorieResponse,
  IProducDetail,
  IProductDetailResum,
  IShelf,
} from "./interfaces";

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

export const getProductName = createAsyncThunk(
  "physical-inventorie/getProductName",
  async (code: string) => {
    try {
      const res = await rest.get<IProducDetail>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/products/by-code/${code}`
      );

      const productDetail: IProductDetailResum = {
        id: res.data.id,
        code: res.data.code,
        name: res.data.name,
      };

      console.log(res.data);
      return productDetail;
    } catch (error) {
      toast.error("Debes digitar un código valído");
      console.log(error);
    }
  }
);

export const CreateShelf = createAsyncThunk(
  "physical-inventorie/create-shelf",
  async (data: IDataPostCreate) => {
    try {
      const res = await rest.post<IPhysicalInventorieResponse>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/physicalInventory/shelf`,
        data
      );

      const shelf: IShelf = {
        shelfId: res.data.id,
        shelfName: res.data.name,
        quantity: data.productIds.length,
        QRUrl: res.data.QRCodeLocation,
      };
      console.log(res.data);
      return shelf;
    } catch (error) {
      console.log(error);
    }
  }
);
