import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { IOrdersState } from "./interfaces";
import {
  deletePurchaseOrderProduct,
  getAllOrdersData,
  getAllOrdersDataByDates,
  getAllSuggestions,
  getOrderDetail,
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
    addToShoppingList: (state, action: PayloadAction<string>) => {
      const newShoppingList = current(
        state.suggestionsData.suggestions!.results
      ).filter((el) => el.id === action.payload);
      console.log(newShoppingList);

      if (state.shoppingData.shoppingList.length !== 0) {
        state.shoppingData.shoppingList.forEach((el) => {
          if (el.id === newShoppingList[0].id) {
            console.log("El elemento ya existe en el array");
          } else {
            state.shoppingData.shoppingList = [
              ...state.shoppingData.shoppingList,
              ...newShoppingList!,
            ];
          }
        });
      } else {
        state.shoppingData.shoppingList = [
          ...state.shoppingData.shoppingList,
          ...newShoppingList!,
        ];
      }

      // state.shoppingData.totalShopping = state.shoppingData.shoppingList.length;

      // const newSuggestions = state.suggestionsData.suggestions?.results.filter(
      //   (el) => el.id !== action.payload
      // );
      // state.suggestionsData.suggestions!.results = newSuggestions!;
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
  },
});

export const { addToShoppingList } = ordersSlice.actions;

export default ordersSlice.reducer;
