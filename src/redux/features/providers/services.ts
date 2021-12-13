import { IPutContractData } from "@components/Productos/FichaTecnica/ProveedoresTable";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { rest } from "../../../../services/index";
import {
  DataGetDetailProduct,
  IProductByID,
  IProductDetail,
  IProductResult,
} from "../products/interface";
import {
  ContractPostData,
  DataFilterProviders,
  IContractResponse,
  IContrat,
  IProviders,
  IProvidersResult,
} from "./interface";

export const getAllProviders = createAsyncThunk(
  "providers/getAllProviders",
  async () => {
    try {
      const res = await rest.get(
        `${process.env.REACT_APP_API_LOCAL_HOST}/providers?page=1&quantity=1000`
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllProvidersByFilter = createAsyncThunk(
  "providers/getAllProvidersByFilter",
  async (data: DataFilterProviders) => {
    let query: string = "";

    if (data.name === "") {
      query = `/providers?page=1&quantity=1000&nit=${data.nit}`;
    } else {
      query = `/providers?page=1&quantity=1000&name=${data.name}`;
    }

    try {
      const res = await rest.get(
        `${process.env.REACT_APP_API_LOCAL_HOST}${query}`
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllContratsByProviderId = createAsyncThunk(
  "contract/getContractsByProvider",
  async (id: string) => {
    try {
      const res = await rest.get<IContrat[]>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/contracts/by-provider/${id}`
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getProviderDataById = createAsyncThunk(
  "provider/getProviderById",
  async (id: string) => {
    try {
      const res = await rest.get<IProvidersResult>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/providers/${id}`
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getProductDetailByCode = createAsyncThunk(
  "contracts/getProductByCode",
  async (data: DataGetDetailProduct) => {
    try {
      const res = await rest.get<IProductResult>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/contracts/by-provider/${data.providerId}/product-info-for-contract/${data.productCode}`
      );
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      console.log(error.response.status);
    }
  }
);

export const postNewContract = createAsyncThunk(
  "contracts/postNewContract",
  async (data: ContractPostData) => {
    try {
      const res = await rest.post<IContractResponse>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/contracts`,
        data
      );

      const contract: IContrat = {
        id: res.data.id,
        expirationDate: data.expirationDate,
        productGenericName: data.productGenericName,
        productComercialName: data.productGenericName,
        previousPrice: data.previousPrice,
        minorPrice: data.minorPrice,
        regulatedPrice: data.regulatedPrice,
        listPrice: data.listPrice,
        discountPercentage: data.discountPercentage,
        unitsNumberForApplyDiscount: data.unitsNumberForApplyDiscount,
        giftedUnits: data.giftedUnits,
        unitsNumberForApplyGiftedUnits: data.unitsNumberForApplyGiftedUnits,
        unitPrice: data.unitPrice,
        priceAfterNegotiation: data.priceAfterNegotiation,
        observation: data.observation,
        dataSheetUrl: null,
        active: true,
        product: {
          code: data.productCode,
          name: data.productGenericName,
        },
      };
      console.log(res.data);
      return contract;
    } catch (error: any) {
      console.log(error.response.status);
    }
  }
);

// export const putProductContract = createAsyncThunk(
//   "contract/putDataSheetUrlProductContract",
//   async (data: IPutContractData) => {
//     try {
//       const res = await rest.put<IProductByID>(
//         `${process.env.REACT_APP_API_LOCAL_HOST}/contracts/${data.id}/data-sheet`,
//         data.formData
//       );
//       console.log(res.data);
//       return res.data;
//     } catch (error: any) {
//       console.error(error);
//     }
//   }
// );
