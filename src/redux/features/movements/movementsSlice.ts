import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDataDates, IMovements, IMovementsForReason } from "./interfaces";
import {
  getAllMovementsForEntries,
  getAllMovementsForOutputs,
  getAllMovementsOfReasonForEntries,
  getAllMovementsOfReasonForOutputs,
} from "./services";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

interface IMovementsState {
  movementsEntriesData: IMovements;
  movementsForReason: IMovementsForReason;
  loadingEntries: boolean;
  loadingOutputs: boolean;
  movementsOutputsData: IMovements;
  loadingForReason: boolean;
  showDoneMovements: boolean;
  error: null | string;
  filterDate: {
    initialDate: string;
    finalDate: string;
  };
}

const initialState: IMovementsState = {
  movementsEntriesData: {
    results: [],
    totalPages: 0,
    totalResults: 0,
  },
  movementsForReason: {
    results: [],
    totalPages: 0,
    totalResults: 0,
  },

  movementsOutputsData: {
    results: [],
    totalPages: 0,
    totalResults: 0,
  },
  loadingEntries: false,
  loadingOutputs: false,
  loadingForReason: false,
  showDoneMovements: false,
  error: null,
  filterDate: {
    initialDate: dayjs().toISOString(),
    finalDate: dayjs().toISOString(),
  },
};

export const movementsSlice = createSlice({
  name: "movements",
  initialState,
  reducers: {
    clearShowMovementsDoneState: (state) => {
      state.showDoneMovements = false;
    },
    setFilterStateDates: (state, action: PayloadAction<IDataDates>) => {
      state.filterDate = action.payload;
      console.log(action.payload);
      state.showDoneMovements = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMovementsForEntries.pending, (state) => {
      state.loadingEntries = true;
    });
    builder.addCase(
      getAllMovementsForEntries.fulfilled,
      (state, { payload }) => {
        state.loadingEntries = false;
        state.movementsEntriesData = payload;
      }
    );
    builder.addCase(getAllMovementsForEntries.rejected, (state) => {
      state.loadingEntries = false;
      state.movementsEntriesData = initialState.movementsEntriesData;
      state.error = "HUBO UN ERROR";
    });
    builder.addCase(getAllMovementsForOutputs.pending, (state) => {
      state.loadingOutputs = true;
    });
    builder.addCase(
      getAllMovementsForOutputs.fulfilled,
      (state, { payload }) => {
        state.loadingOutputs = false;
        state.movementsOutputsData = payload;
      }
    );
    builder.addCase(getAllMovementsOfReasonForEntries.pending, (state) => {
      state.loadingForReason = true;
    });
    builder.addCase(
      getAllMovementsOfReasonForEntries.fulfilled,
      (state, { payload }) => {
        state.loadingForReason = false;
        state.movementsForReason = payload;
        state.showDoneMovements = true;
      }
    );
    builder.addCase(getAllMovementsOfReasonForOutputs.pending, (state) => {
      state.loadingForReason = true;
    });
    builder.addCase(
      getAllMovementsOfReasonForOutputs.fulfilled,
      (state, { payload }) => {
        state.loadingForReason = false;
        state.movementsForReason = payload;
        state.showDoneMovements = true;
      }
    );
  },
});

export const { clearShowMovementsDoneState, setFilterStateDates } =
  movementsSlice.actions;

export default movementsSlice;
