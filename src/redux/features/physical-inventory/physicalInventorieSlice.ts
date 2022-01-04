import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { IPhysicalInventorieState, ProductsArr } from "./interfaces";
import { CreateShelf, getAllShelfs, getProductName } from "./services";

const initialState: IPhysicalInventorieState = {
  modalStates: {
    showModal: false,
    productDetail: null,
    loadingModal: false,
    productsArray: [],
  },
  shelf: [],
  filterShelf: [],
  loading: false,
};

export const physicalInventorieSlice = createSlice({
  name: "PhysicalInventorie",
  initialState,
  reducers: {
    setShowModal: (state) => {
      state.modalStates.showModal = !state.modalStates.showModal;
    },
    setProductsArr: (state, action: PayloadAction<ProductsArr>) => {
      if (
        state.modalStates.productsArray.some(
          (product) => product.code === action.payload.code
        )
      ) {
        toast.error("Este producto ya esta en la lista");
        return;
      }
      state.modalStates.productsArray = [
        ...state.modalStates.productsArray,
        action.payload,
      ];
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      const newProductsArr = state.modalStates.productsArray.filter(
        (product) => product.id !== action.payload
      );
      state.modalStates.productsArray = newProductsArr;
    },
    clearProductDetail: (state) => {
      state.modalStates.productDetail = null;
    },
    setShelfFilter: (state, action: PayloadAction<string>) => {
      const newShelfs = state.shelf.filter((value) =>
        value.shelfName.toLowerCase().includes(action.payload.toLowerCase())
      );

      state.filterShelf = newShelfs;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllShelfs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllShelfs.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.shelf = payload!;
      state.filterShelf = payload!;
    });
    builder.addCase(getProductName.pending, (state) => {
      state.modalStates.loadingModal = true;
    });
    builder.addCase(getProductName.fulfilled, (state, { payload }) => {
      state.modalStates.loadingModal = false;
      state.modalStates.productDetail = payload!;
    });
    builder.addCase(CreateShelf.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(CreateShelf.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.shelf = [...state.shelf, payload!];
      state.filterShelf = [...state.filterShelf, payload!];
      toast.success("Estante agregado con exito!");
    });
  },
});

export const {
  setShowModal,
  setProductsArr,
  deleteProduct,
  clearProductDetail,
  setShelfFilter,
} = physicalInventorieSlice.actions;
export default physicalInventorieSlice.reducer;
