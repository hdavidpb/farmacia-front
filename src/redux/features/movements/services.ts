import { RootState } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { movementsPath } from "@routes/routes";
import { rest } from "../../../../services/index";
import { IDataDates, IMovements } from "./interfaces";

export const getAllMovementsForEntries = createAsyncThunk(
  "movements/getEntries",
  async ({ initialDate, finalDate }: IDataDates) => {
    try {
      const res = await rest.get<IMovements>(
        `${process.env.REACT_APP_API_LOCAL_HOST}/movements/reasons-prices?initialDate=${initialDate}&finalDate=${finalDate}&isForEntry=true`
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log({ error });
      return { results: [], totalPages: 0, totalResults: 0 };
    }
  }
);

export const getAllMovementsForOutputs = createAsyncThunk(
  "movements/getOutputs",
  async ({ initialDate, finalDate }: IDataDates) => {
    try {
      const res = await rest.get(
        `${process.env.REACT_APP_API_LOCAL_HOST}/movements/reasons-prices?initialDate=${initialDate}&finalDate=${finalDate}&isForEntry=false`
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

///movements/movements-of-reason?isForEntry=true&reason=Entrada%20Repentina

export const getAllMovementsOfReasonForEntries = createAsyncThunk(
  "movements/getEntriesForReason",
  async (reason: string, { getState }) => {
    const filterDates = getState().movements.filterDate;
    console.log(filterDates);
    try {
      const res = await rest.get(
        `${process.env.REACT_APP_API_LOCAL_HOST}/movements/movements-of-reason?initialDate=${filterDates.initialDate}&finalDate=${filterDates.finalDate}&isForEntry=false&reason=${reason}`
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllMovementsOfReasonForOutputs = createAsyncThunk(
  "movements/getOutputsForReason",
  async (reason: string, { getState }) => {
    const filterDates = getState().movements.filterDate;
    console.log(filterDates);
    try {
      const res = await rest.get(
        `${process.env.REACT_APP_API_LOCAL_HOST}/movements/movements-of-reason?initialDate=${filterDates.initialDate}&finalDate=${filterDates.finalDate}&isForEntry=false&reason=${reason}`
      );
      console.log(
        `${process.env.REACT_APP_API_LOCAL_HOST}/movements/movements-of-reason?initialDate=${filterDates.initialDate}&finalDate=${filterDates.finalDate}&isForEntry=false&reason=${reason}`
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
