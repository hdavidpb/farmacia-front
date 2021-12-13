import { configureStore } from "@reduxjs/toolkit";
import warehouseReducer from "./features/bodegas/warehouseSlice";
import inventorieReducer from "./features/inventorie/inventorieSlice";
import productsReducer from "./features/products/productsSlice";
import providersReducer from "./features/providers/providersSlice";
import movementsReducer from "./features/movements/movementsSlice";
import ordersReducer from "./features/orders/ordersSlice";
import crashCartsReducer from "./features/crashcarts/crashcartsSlice";
import physicalInventorieReducer from "./features/physical-inventory/physicalInventorieSlice";
// import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    warehouse: warehouseReducer.reducer,
    inventorie: inventorieReducer.reducer,
    products: productsReducer.reducer,
    providers: providersReducer.reducer,
    movements: movementsReducer.reducer,
    physicalInventorie: physicalInventorieReducer,
    orders: ordersReducer,
    crashCarts: crashCartsReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
