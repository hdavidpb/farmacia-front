import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  IOptionsSelect,
  IProducts,
  IProductResult,
  IProductByID,
  ISelectPackingTypes,
  IPackingGet,
  IContractSelected,
  IProductList,
} from "./interface";
import {
  getAllPackingByProviderAndProduct,
  getAllPackingType,
  getALLProducts,
  getProducDetail,
  postPacking,
  putProductContract,
} from "./services";

interface IProductsState {
  productsData: {
    products: IProducts;
    filterResults: IProductList[];
    options: IOptionsSelect;
    productDetails: IProductByID | null;
    fileLoading: null | boolean;
    loadingProductDetail: boolean;
  };
  packingsData: {
    packings: IPackingGet[];
    packingTypes: ISelectPackingTypes[];
    loadingPacking: null | boolean;
    contractSelected: null | IContractSelected;
    loadingPostPacking: null | boolean;
    showPacking: boolean;
  };
}

const initialState: IProductsState = {
  productsData: {
    products: {
      results: [],
      totalPages: 0,
      totalResults: 0,
      error: null,
      loading: false,
    },
    loadingProductDetail: false,
    productDetails: null,
    fileLoading: null,

    filterResults: [],
    options: {
      categories: [],
      names: [],
      codes: [],
    },
  },
  packingsData: {
    packingTypes: [],
    packings: [],
    loadingPacking: null,
    contractSelected: null,
    loadingPostPacking: null,
    showPacking: false,
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getOptions: (state) => {
      const categoryArr = state.productsData.products.results.map((prod) => {
        return prod.category.name;
      });

      const codes = state.productsData.products.results.map((prod) => {
        return { label: prod.code, value: prod.code };
      });
      const names = state.productsData.products.results.map((prod) => {
        return { label: prod.name, value: prod.name };
      });

      let result = categoryArr.reduce((acc, item) => {
        // @ts-ignore
        if (!acc.includes(item)) {
          // @ts-ignore
          acc.push(item);
        }
        return acc;
      }, []);
      const categories = result.map((prod) => {
        return { label: prod, value: prod };
      });

      const options = {
        categories: categories,
        codes: codes,
        names: names,
      };

      state.productsData.options = options;
      console.log(options);
    },

    getFilterProductsArray: (state, action: PayloadAction<string>) => {
      const filterArray = state.productsData.products.results.filter(
        (prod) =>
          prod.code.includes(action.payload.toUpperCase()) ||
          prod.category.name.includes(action.payload.toUpperCase()) ||
          prod.name.includes(action.payload.toUpperCase())
      );

      state.productsData.filterResults = filterArray;
    },
    clearFilter: (state) => {
      state.productsData.filterResults = state.productsData.products.results;
    },
    clearProductsState: (state) => {
      state.productsData.products = initialState.productsData.products;
      state.productsData.filterResults =
        initialState.productsData.filterResults;
    },
    setContractSelected: (state, action: PayloadAction<IContractSelected>) => {
      state.packingsData.contractSelected = action.payload;
      state.packingsData.showPacking = true;
    },
    clearShowPacking: (state) => {
      state.packingsData.showPacking = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getALLProducts.pending, (state) => {
      state.productsData.products.loading = true;
    }),
      builder.addCase(getALLProducts.fulfilled, (state, { payload }) => {
        (state.productsData.products = payload),
          (state.productsData.products.loading = false),
          (state.productsData.filterResults = payload.results);
      }),
      builder.addCase(getALLProducts.rejected, (state) => {
        state.productsData.products.loading = false;
        state.productsData.products.error =
          "Ah ocurrido un error en la petición";
      });
    builder.addCase(getProducDetail.pending, (state) => {
      state.productsData.loadingProductDetail = true;
    });
    builder.addCase(getProducDetail.fulfilled, (state, { payload }) => {
      state.productsData.loadingProductDetail = false;
      state.productsData.productDetails = payload!;

      payload!.productMonthlyRotations.sort((a, b): any => {
        if (a.dateMonth < b.dateMonth) {
          return -1;
        }
        if (a.dateMonth > b.dateMonth) {
          return 1;
        }

        return 0;
      });

      payload!.productMonthlyOutputs.sort((a, b): any => {
        if (a.dateMonth < b.dateMonth) {
          return -1;
        }
        if (a.dateMonth > b.dateMonth) {
          return 1;
        }

        return 0;
      });
      payload!.productMonthlyPurchases.sort((a, b): any => {
        if (a.dateMonth < b.dateMonth) {
          return -1;
        }
        if (a.dateMonth > b.dateMonth) {
          return 1;
        }

        return 0;
      });

      // state.productsData.productDetails.productRotations = newProductsRotation;
    });
    builder.addCase(putProductContract.pending, (state) => {
      state.productsData.fileLoading = true;
    });
    builder.addCase(putProductContract.fulfilled, (state, { payload }) => {
      state.productsData.fileLoading = false;
      state.productsData.productDetails!.providerContracts[
        payload!.index
      ].dataSheetUrl = payload!.data.dataSheetUrl;
    });
    builder.addCase(getAllPackingType.fulfilled, (state, { payload }) => {
      const packingTypesSelect = payload?.map((packing) => {
        return { label: packing.name, value: packing.id };
      });

      state.packingsData.packingTypes = packingTypesSelect!;
    });
    builder.addCase(getAllPackingByProviderAndProduct.pending, (state) => {
      state.packingsData.loadingPacking = true;
    });
    builder.addCase(
      getAllPackingByProviderAndProduct.fulfilled,
      (state, { payload }) => {
        state.packingsData.packings = payload!;
        state.packingsData.loadingPacking = false;
      }
    );
    builder.addCase(postPacking.pending, (state) => {
      state.packingsData.loadingPacking = true;
    });
    builder.addCase(postPacking.fulfilled, (state, { payload }) => {
      state.packingsData.loadingPacking = false;
      const newPacking = {
        id:
          state.packingsData.packings.length !== 0
            ? state.packingsData.packings[
                state.packingsData.packings.length - 1
              ].id + 1
            : 1,
        code: payload!.code,
        quantity: payload!.quantity,
        packingType: payload!.packingType,
      };
      state.packingsData.packings = [
        ...state.packingsData.packings,
        newPacking,
      ];
    });
  },
});

export const {
  getOptions,
  getFilterProductsArray,
  clearFilter,
  clearProductsState,
  setContractSelected,
  clearShowPacking,
} = productsSlice.actions;

export default productsSlice;
