import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import {
  IcrashCartNameAndId,
  ICrashState,
  IHeaderAlertDetail,
} from "./interfaces";
import {
  getAllAlertDetail,
  getAllAlerts,
  getAllCrashCartInventory,
  getAllCrashCarts,
  getCrashCartInventoryById,
  putLockCode,
} from "./services";
const initialState: ICrashState = {
  crashCarsData: {
    crashCarts: {
      results: [],
      totalResults: 0,
      totalPages: 0,
    },
    crashCartsFilter: [],
    loading: false,
  },
  crashCartsInventory: {
    inventoryById: [],
    loadingInventory: false,
    hidenTable: false,
    crashCartNameAndId: null,
    initialPage: 0,
    maximunPage: 0,
    selected: -1,
  },
  alertsData: {
    alerts: [],
    loadingAlerts: false,
    alertDetailData: {
      alertDetail: [],
      loadingAlertDetail: false,
      headerDetail: null,
      lockOk: null,
      lockLoading: false,
    },
  },
};

export const crashCartsSlice = createSlice({
  name: "crashCarts",
  initialState,
  reducers: {
    getFilterCrashCarts: (state, action: PayloadAction<string>) => {
      const filterCarts = state.crashCarsData.crashCarts.results.filter(
        (carts) =>
          carts.name.includes(action.payload.toUpperCase()) ||
          carts.code.includes(action.payload.toUpperCase())
      );

      state.crashCarsData.crashCartsFilter = filterCarts;
      state.crashCartsInventory.selected = -1;
      state.crashCartsInventory.hidenTable = false;
    },
    setInventaryNameAndId: (
      state,
      action: PayloadAction<IcrashCartNameAndId>
    ) => {
      state.crashCartsInventory.crashCartNameAndId = action.payload;
      state.crashCartsInventory.selected = action.payload.indexSelected;
    },
    nextInventaryPage: (state) => {
      if (
        state.crashCartsInventory.initialPage <
        state.crashCartsInventory.maximunPage - 1
      ) {
        state.crashCartsInventory.initialPage += 1;
        return;
      }
    },
    previousInventaryPage: (state) => {
      if (state.crashCartsInventory.initialPage > 0) {
        state.crashCartsInventory.initialPage -= 1;
        return;
      }
    },
    detectReadyElement: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.alertsData.alertDetailData.lockOk = false;
      } else {
        state.alertsData.alertDetailData.lockOk = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCrashCarts.pending, (state) => {
      state.crashCarsData.loading = true;
    });
    builder.addCase(getAllCrashCarts.fulfilled, (state, { payload }) => {
      state.crashCarsData.loading = false;
      state.crashCarsData.crashCarts = payload!;
      state.crashCarsData.crashCartsFilter = payload!.results;
    });
    builder.addCase(getCrashCartInventoryById.pending, (state) => {
      state.crashCartsInventory.loadingInventory = true;
      state.crashCartsInventory.hidenTable = true;
    });
    builder.addCase(
      getCrashCartInventoryById.fulfilled,
      (state, { payload }) => {
        state.crashCartsInventory.loadingInventory = false;
        state.crashCartsInventory.hidenTable = true;
        state.crashCartsInventory.inventoryById = payload!;
        state.crashCartsInventory.maximunPage = payload!.length;
        state.crashCartsInventory.initialPage = 0;
        state.crashCartsInventory.initialPage = 0;
      }
    );
    builder.addCase(getAllCrashCartInventory.pending, (state) => {
      state.crashCartsInventory.loadingInventory = true;
      state.crashCartsInventory.hidenTable = true;
    });
    builder.addCase(
      getAllCrashCartInventory.fulfilled,
      (state, { payload }) => {
        state.crashCartsInventory.loadingInventory = false;
        state.crashCartsInventory.hidenTable = true;
        state.crashCartsInventory.inventoryById = payload!;
        state.crashCartsInventory.maximunPage = payload!.length;
        state.crashCartsInventory.crashCartNameAndId = {
          code: "TODOS",
          id: 0,
          indexSelected: -1,
        };
        state.crashCartsInventory.initialPage = 0;
      }
    );
    builder.addCase(getAllAlerts.pending, (state) => {
      state.alertsData.loadingAlerts = true;
    });
    builder.addCase(getAllAlerts.fulfilled, (state, { payload }) => {
      state.alertsData.loadingAlerts = false;
      state.alertsData.alerts = payload!;
    });
    builder.addCase(getAllAlertDetail.pending, (state) => {
      state.alertsData.alertDetailData.loadingAlertDetail = true;
    });
    builder.addCase(getAllAlertDetail.fulfilled, (state, { payload }) => {
      state.alertsData.alertDetailData.loadingAlertDetail = false;
      state.alertsData.alertDetailData.alertDetail = payload!;
      if (payload) {
        console.log(payload);
        const headerDetail: IHeaderAlertDetail = {
          crashCartId: payload[0].crashCartId,
          crashCartName: payload[0].crashCartName,
          date: payload[0].date,
          missingProductsCount: payload[0].missingProductsCount,
        };
        state.alertsData.alertDetailData.headerDetail = headerDetail;
      }
    });
    builder.addCase(putLockCode.pending, (state) => {
      state.alertsData.alertDetailData.lockLoading = true;
    });
    builder.addCase(putLockCode.fulfilled, (state, { payload }) => {
      state.alertsData.alertDetailData.lockLoading = false;
      state.alertsData.alertDetailData.lockOk = payload?.ok!;
      Swal.fire("Productos actualizados con exito", "", "info");
    });
  },
});

export const {
  getFilterCrashCarts,
  setInventaryNameAndId,
  nextInventaryPage,
  previousInventaryPage,
  detectReadyElement,
} = crashCartsSlice.actions;
export default crashCartsSlice.reducer;
