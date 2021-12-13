import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhysicalInventorieState } from "./interfaces";
import { getAllShelfs } from "./services";

const initialState: IPhysicalInventorieState = {
  modalStates: {
    showModal: false,
  },
  shelf: [],
  loading: false,
};

export const physicalInventorieSlice = createSlice({
  name: "PhysicalInventorie",
  initialState,
  reducers: {
    setShowModal: (state) => {
      state.modalStates.showModal = !state.modalStates.showModal;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllShelfs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllShelfs.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.shelf = payload!;
    });
  },
});

export const { setShowModal } = physicalInventorieSlice.actions;
export default physicalInventorieSlice.reducer;
