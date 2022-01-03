import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { IOrdersState, ISuggestionsResult } from "./interfaces";
import {
  deletePurchaseOrderProduct,
  getAllOrdersData,
  getAllOrdersDataByDates,
  getAllSuggestions,
  getOrderDetail,
  putIgnoreSuggestions,
  updateOrderStatus,
} from "./services";

const initialState: IOrdersState = {
  ordersData: {
    orders: [],
    loading: false,
  },
  orderDetailData: {
    orderDetail: null,
    loading: false,
  },
  suggestionsData: {
    suggestions: null,
    quantity: 500,
    actualPage: 1,
    previusPage: 0,
    nextPage: 0,
    loading: false,
  },
  shoppingData: {
    shoppingList: [],
    totalShopping: 0,
  },
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addToShoppingList: (state, action: PayloadAction<ISuggestionsResult>) => {
      const includes = state.shoppingData.shoppingList.some(
        (prod) => prod.id === action.payload.id
      );
      if (includes) {
        toast.error("Ya agrego este producto a la lista", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          // progress: undefined,
        });

        return;
      }

      state.shoppingData.shoppingList = [
        ...state.shoppingData.shoppingList,
        action.payload,
      ];
      console.log(action.payload);
    },
    deleteProductFromList: (state, action: PayloadAction<string>) => {
      const newShoppingList = state.shoppingData.shoppingList.filter(
        (prod) => prod.id !== action.payload
      );
      state.shoppingData.shoppingList = newShoppingList;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllOrdersData.pending, (state) => {
      state.ordersData.loading = true;
    });
    builder.addCase(getAllOrdersData.fulfilled, (state, { payload }) => {
      state.ordersData.loading = false;
      state.ordersData.orders = payload!;
    });
    builder.addCase(getAllOrdersDataByDates.pending, (state) => {
      state.ordersData.loading = true;
    });
    builder.addCase(getAllOrdersDataByDates.fulfilled, (state, { payload }) => {
      state.ordersData.loading = false;
      state.ordersData.orders = payload!;
    });

    builder.addCase(getOrderDetail.pending, (state) => {
      state.orderDetailData.loading = true;
    });
    builder.addCase(getOrderDetail.fulfilled, (state, { payload }) => {
      state.orderDetailData.loading = false;
      state.orderDetailData.orderDetail = payload!;
    });
    builder.addCase(updateOrderStatus.pending, (state) => {
      state.orderDetailData.loading = true;
    });
    builder.addCase(updateOrderStatus.fulfilled, (state, { payload }) => {
      state.orderDetailData.loading = false;
      state.orderDetailData.orderDetail!.status = payload!.orderStatus;

      state.ordersData.orders.forEach((order) => {
        if (order.id === payload?.id) {
          order.status = payload.orderStatus;
          return;
        }
      });
    });
    builder.addCase(deletePurchaseOrderProduct.pending, (state) => {
      state.orderDetailData.loading = true;
    });
    builder.addCase(
      deletePurchaseOrderProduct.fulfilled,
      (state, { payload }) => {
        state.orderDetailData.loading = false;
        state.orderDetailData.orderDetail!.products =
          state.orderDetailData.orderDetail!.products.filter(
            (purchase) => purchase.purchaseOrderProductId !== payload
          );
      }
    );
    builder.addCase(getAllSuggestions.pending, (state) => {
      state.suggestionsData.loading = true;
    });
    builder.addCase(getAllSuggestions.fulfilled, (state, { payload }) => {
      (state.suggestionsData.loading = false),
        (state.suggestionsData.suggestions = payload!);
    });
    builder.addCase(putIgnoreSuggestions.pending, (state) => {
      state.suggestionsData.loading = true;
    });
    builder.addCase(putIgnoreSuggestions.fulfilled, (state, { payload }) => {
      state.suggestionsData.loading = false;
      const newSuggestionsList =
        state.suggestionsData.suggestions!.results.filter(
          (sugg) => sugg.id !== payload?.id
        );
      state.suggestionsData.suggestions!.results = newSuggestionsList;
    });
  },
});

export const { addToShoppingList, deleteProductFromList } = ordersSlice.actions;

export default ordersSlice.reducer;
