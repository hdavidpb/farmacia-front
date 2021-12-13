import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWareHouse, IWareHouseResult } from "./interface";

import { getWareHouse } from "./services";

interface IWarehousesState {
  warehouseData: {
    warehouses: IWareHouse;
    loading: boolean;
    filterWareHouses: IWareHouseResult[];
  };
}

const initialState: IWarehousesState = {
  warehouseData: {
    warehouses: {
      results: [],
      totalPages: 0,
      totalResults: 0,
    },
    filterWareHouses: [],
    loading: false,
  },
};

export const warehouseSlice = createSlice({
  name: "warehouse",
  initialState,
  reducers: {
    clearWareHouseState: (state) => {
      state.warehouseData.warehouses = initialState.warehouseData.warehouses;
    },
    getFilterWareHouse: (state, action: PayloadAction<string>) => {
      const filterWareHouse = state.warehouseData.warehouses.results.filter(
        (warehouse) =>
          warehouse.code.includes(action.payload.toUpperCase()) ||
          warehouse.description.includes(action.payload.toUpperCase()) ||
          warehouse.costCenterCode.includes(action.payload.toUpperCase())
      );
      state.warehouseData.filterWareHouses = filterWareHouse;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWareHouse.pending, (state) => {
      state.warehouseData.loading = true;
    }),
      builder.addCase(getWareHouse.fulfilled, (state, { payload }) => {
        state.warehouseData.warehouses = payload;
        state.warehouseData.filterWareHouses = payload.results;
        state.warehouseData.loading = false;
      });
  },
});

export const { clearWareHouseState, getFilterWareHouse } =
  warehouseSlice.actions;

export default warehouseSlice;
