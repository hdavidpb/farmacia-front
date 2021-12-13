import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  getAllInventories,
  getinventarieWareHouseById,
} from "../inventorie/services";
import {
  IInventoryWarhouse,
  IInventory,
  IResults,
  IWareHouseResults,
} from "./interface";

interface IInventoriesState {
  inventoriesData: {
    inventorie: IInventory;
    filterResults: IResults[];
    inventoryWarhouse: IInventoryWarhouse;
    filterInventoryWarhouse: IWareHouseResults[];
  };
}

const initialState: IInventoriesState = {
  inventoriesData: {
    inventorie: {
      results: [],
      totalPages: 0,
      totalResults: 0,
      loading: false,
      error: null,
    },
    filterResults: [],
    inventoryWarhouse: {
      results: [],
      totalResults: 0,
      totalPages: 0,
      loadingWarehouse: false,
      error: null,
    },
    filterInventoryWarhouse: [],
  },
};

export const inventorieSlice = createSlice({
  name: "inventorie",
  initialState,
  reducers: {
    changeInventorieWarehouseFilter: (
      state,
      action: PayloadAction<boolean>
    ) => {
      if (action.payload) {
        state.inventoriesData.filterInventoryWarhouse =
          state.inventoriesData.inventoryWarhouse.results;
      } else {
        const filterWarehouse =
          state.inventoriesData.inventoryWarhouse.results.filter(
            (warehouse: IWareHouseResults) => warehouse.quantity !== 0
          );
        state.inventoriesData.filterInventoryWarhouse = filterWarehouse;
      }
    },
    clearInventorieState: (state) => {
      state.inventoriesData.inventorie =
        initialState.inventoriesData.inventorie;
      state.inventoriesData.inventoryWarhouse =
        initialState.inventoriesData.inventoryWarhouse;
      state.inventoriesData.filterResults =
        initialState.inventoriesData.filterResults;
    },
    getFilterInventorie: (state, action: PayloadAction<string>) => {
      const filterArray = state.inventoriesData.inventorie.results.filter(
        (inv) =>
          inv.productcode.includes(action.payload.toUpperCase()) ||
          inv.productcategory.includes(action.payload.toUpperCase()) ||
          inv.productname.includes(action.payload.toUpperCase())
      );
      state.inventoriesData.filterResults = filterArray;
      state.inventoriesData.inventoryWarhouse =
        initialState.inventoriesData.inventoryWarhouse;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllInventories.pending, (state) => {
      state.inventoriesData.inventorie.loading = true;
      state.inventoriesData.inventoryWarhouse =
        initialState.inventoriesData.inventoryWarhouse;
      state.inventoriesData.filterInventoryWarhouse = [];
    }),
      builder.addCase(getAllInventories.fulfilled, (state, { payload }) => {
        state.inventoriesData.inventorie.loading = false;
        state.inventoriesData.inventorie = payload;
        state.inventoriesData.filterResults = payload.results;
        state.inventoriesData.inventorie.error =
          typeof payload === "number" ? payload : null;
      });
    builder.addCase(getAllInventories.rejected, (state) => {
      state.inventoriesData.inventorie.loading = false;
      state.inventoriesData.inventorie.error =
        "Ah ocurrido un error en la petición";
    });

    builder.addCase(getinventarieWareHouseById.pending, (state) => {
      state.inventoriesData.inventoryWarhouse.loadingWarehouse = true;
    });
    builder.addCase(
      getinventarieWareHouseById.fulfilled,
      (state, { payload }) => {
        state.inventoriesData.inventoryWarhouse = payload;
        const filterWarehouse = payload.results.filter(
          (warehouse: IWareHouseResults) => warehouse.quantity !== 0
        );
        state.inventoriesData.filterInventoryWarhouse = filterWarehouse;
        console.log(filterWarehouse);
        state.inventoriesData.inventoryWarhouse.loadingWarehouse = false;
      }
    );
  },
});

// export const {
//   getAllWarehousesData,
//   decrement,
//   incrementByAmount,
//   clearState,
// } = warehouseSlice.actions;

export const {
  clearInventorieState,
  getFilterInventorie,
  changeInventorieWarehouseFilter,
} = inventorieSlice.actions;

export default inventorieSlice;
