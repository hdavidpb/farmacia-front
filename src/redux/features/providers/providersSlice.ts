import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductDetail, IProductResult } from "../products/interface";

import { IContrat, IProviders, IProvidersResult } from "./interface";
import {
  getAllContratsByProviderId,
  getAllProviders,
  getAllProvidersByFilter,
  getProductDetailByCode,
  getProviderDataById,
  postNewContract,
} from "./services";

interface IProvidersState {
  providersData: {
    providers: IProviders;
    loading: boolean;
    filterProviders: IProvidersResult[];
    contractsData: {
      contracts: IContrat[];
      providerData: IProvidersResult | null;
      loading: boolean;
      productDetail: {
        product: IProductResult | null;
        error: null | boolean;
        loadingProduct: boolean;
      };
    };
  };
}

const initialState: IProvidersState = {
  providersData: {
    providers: {
      results: [],
      totalResults: 0,
      totalPages: 0,
    },
    filterProviders: [],
    contractsData: {
      contracts: [],
      providerData: null,
      loading: false,
      productDetail: {
        product: null,
        error: null,
        loadingProduct: false,
      },
    },

    loading: false,
  },
};

export const providersSlice = createSlice({
  name: "providers",
  initialState,
  reducers: {
    clearProduct: (state) => {
      state.providersData.contractsData.productDetail.product =
        initialState.providersData.contractsData.productDetail.product;
    },
    // getFilterProviders: (state, action: PayloadAction<string>) => {
    //   const filterArr = state.providersData.providers.results.filter(
    //     (prov) =>
    //       (prov.providerCode !== null &&
    //         prov.providerCode.includes(action.payload.toUpperCase())) ||
    //       (prov.providerName !== null &&
    //         prov.providerName.includes(action.payload.toUpperCase()))
    //   );
    //   state.providersData.filterProviders = filterArr;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProviders.pending, (state) => {
      state.providersData.loading = true;
    });
    builder.addCase(getAllProviders.fulfilled, (state, { payload }) => {
      state.providersData.providers = payload;
      state.providersData.filterProviders = payload.results;
      state.providersData.loading = false;
    });
    builder.addCase(getAllProvidersByFilter.pending, (state) => {
      state.providersData.loading = true;
    });
    builder.addCase(getAllProvidersByFilter.fulfilled, (state, { payload }) => {
      state.providersData.loading = false;
      state.providersData.providers = payload;
    });
    builder.addCase(getAllContratsByProviderId.pending, (state) => {
      state.providersData.contractsData.loading = true;
    });
    builder.addCase(
      getAllContratsByProviderId.fulfilled,
      (state, { payload }) => {
        state.providersData.contractsData.loading = false;
        state.providersData.contractsData.contracts = payload!;
      }
    );
    builder.addCase(getProviderDataById.pending, (state) => {
      state.providersData.contractsData.loading = true;
    });
    builder.addCase(getProviderDataById.fulfilled, (state, { payload }) => {
      state.providersData.contractsData.loading = false;
      state.providersData.contractsData.providerData = payload!;
    });
    builder.addCase(getProductDetailByCode.pending, (state) => {
      state.providersData.contractsData.productDetail.loadingProduct = true;
    });
    builder.addCase(getProductDetailByCode.fulfilled, (state, { payload }) => {
      state.providersData.contractsData.productDetail.loadingProduct = false;
      if (payload) {
        state.providersData.contractsData.productDetail.product = payload!;
        state.providersData.contractsData.productDetail.error = null;
      } else {
        state.providersData.contractsData.productDetail.product =
          initialState.providersData.contractsData.productDetail.product;
        state.providersData.contractsData.productDetail.error = true;
      }
    });
    builder.addCase(postNewContract.pending, (state) => {
      state.providersData.contractsData.loading = true;
    });
    builder.addCase(postNewContract.fulfilled, (state, { payload }) => {
      state.providersData.contractsData.loading = false;
      state.providersData.contractsData.contracts = [
        ...state.providersData.contractsData.contracts,
        payload!,
      ];
    });
  },
});

export const { clearProduct } = providersSlice.actions;

export default providersSlice;
