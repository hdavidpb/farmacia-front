import React, { useState } from "react";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export interface IDataDates {
  initialDate: string;
  finalDate: string;
}

const useSuggestionsHistory = () => {
  const [dates, setDates] = useState<IDataDates>({
    initialDate: "",
    finalDate: "",
  });

  const { initialDate, finalDate } = dates;

  const handleChangeInitialDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDates({
      initialDate: e.target.value,
      finalDate: finalDate,
    });
  };

  const handleChangeFinalDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDates({
      initialDate: initialDate,
      finalDate: e.target.value,
    });
  };

  const handleGetExcelHistory = () => {
    if (initialDate !== "" && finalDate === "") {
      toast.error("Debes agregar una fecha final");
      return;
    }
    let URL = `${process.env.REACT_APP_API_LOCAL_HOST}/orders/suggestions/excel`;

    if (initialDate !== "" && finalDate !== "") {
      URL = `${
        process.env.REACT_APP_API_LOCAL_HOST
      }/orders/suggestions/excel?initialDate=${dayjs(
        initialDate,
        "YYYY-MM-DD"
      ).toISOString()}&finalDate=${dayjs(
        finalDate,
        "YYYY-MM-DD"
      ).toISOString()}`;
    }
    console.log(URL);
    window.open(URL);
  };

  return {
    dates,
    initialDate,
    finalDate,
    handleChangeInitialDate,
    handleChangeFinalDate,
    handleGetExcelHistory,
  };
};

export default useSuggestionsHistory;
