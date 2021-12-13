import { DataFormPacking } from "@components/Productos/FichaTecnica/EmbalajeFormModal";
import { IPutContractData } from "@components/Productos/FichaTecnica/ProveedoresTable";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { rest } from "../../../../services";
import {
  IPackingDataPost,
  IPackingGet,
  IpackingProduct,
  IPackingType,
  IProductByID,
  IProviderIdIProductIdData,
  IPutResponse,
  PutContractDataSheetResponse,
} from "./interface";

export const getALLProducts = createAsyncThunk("products/getALL", async () => {
  try {
    const res = await rest.get(
      `${process.env.REACT_APP_API_LOCAL_HOST}/products`
    );
    console.log(res.data);
    return res.data;
  } catch (error: any) {
    console.log(error.response.status);
  }
});

export const getProducDetail = createAsyncThunk(
  "product/getProductDetail",
  async (id: string) => {
    try {
      const res = await rest.get<IProductByID>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/products/${id}`
      );
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      console.error(error);
    }
  }
);

export const putProductContract = createAsyncThunk(
  "contract/putDataSheetUrlProductContract",
  async (data: IPutContractData) => {
    try {
      const res = await rest.put<PutContractDataSheetResponse>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/contracts/${data.id}/data-sheet`,
        data.formData
      );

      const response: IPutResponse = {
        data: res.data,
        index: data.index,
      };

      return response;
    } catch (error: any) {
      console.error(error);
    }
  }
);

/************* PACKINGS SERVICES ****************************/
//IpackingProduct
export const getAllPackingType = createAsyncThunk(
  "product/getAllPackingTypes",
  async () => {
    try {
      const res = await rest.get<IPackingType[]>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/packings/type`
      );

      console.log(res.data);
      return res.data;
    } catch (error: any) {
      console.error(error);
    }
  }
);

export const postPacking = createAsyncThunk(
  "product/postPacking",
  async (data: IPackingDataPost) => {
    console.log(data);
    try {
      const res = await rest.post<IpackingProduct>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/packings`,
        data
      );

      console.log(res.data);
      return res.data;
    } catch (error: any) {
      console.error(error);
      console.log(data);
    }
  }
);

export const getAllPackingByProviderAndProduct = createAsyncThunk(
  "product/getAllPackingByProviderIdAndProductId",
  async (data: IProviderIdIProductIdData) => {
    try {
      const res = await rest.get<IPackingGet[]>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/packings?providerId=${data.providerId}&productCode=${data.productCode}`
      );

      console.log(res.data);
      return res.data;
    } catch (error: any) {
      console.error(error);
    }
  }
);
