import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClear } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import * as sc from "../styles";
import { DataOptionsForm } from "./interfaces";
import {
  getAllOrdersData,
  getAllOrdersDataByDates,
} from "@redux/features/orders/services";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const FilterOrders = () => {
  const dispatch = useDispatch();
  const [dataDates, setDataDates] = useState<DataOptionsForm>({
    initialDate: dayjs().format("YYYY-MM-DD"),
    finalDate: dayjs().format("YYYY-MM-DD"),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const FomatFilter: DataOptionsForm = {
      initialDate: dayjs(dataDates.initialDate, "YYYY-MM-DD").toISOString(),
      finalDate: dayjs(dataDates.finalDate, "YYYY-MM-DD").toISOString(),
    };
    dispatch(getAllOrdersDataByDates(FomatFilter));
    console.log(FomatFilter);
  };

  const handleClearFilter = () => {
    setDataDates({
      initialDate: dayjs().format("YYYY-MM-DD"),
      finalDate: dayjs().format("YYYY-MM-DD"),
    });
    dispatch(getAllOrdersData());
  };

  return (
    <sc.OrdersFiltersContainer onSubmit={(e) => handleSubmit(e)}>
      <sc.FilterFieldsContainer>
        <h4>Fecha inicio:</h4>
        <input
          type="date"
          value={dataDates.initialDate}
          onChange={(e) =>
            setDataDates({
              initialDate: e.target.value,
              finalDate: dataDates.finalDate,
            })
          }
        />
      </sc.FilterFieldsContainer>
      <sc.FilterFieldsContainer>
        <h4>Fecha final:</h4>
        <input
          type="date"
          value={dataDates.finalDate}
          min={dataDates.initialDate}
          onChange={(e) =>
            setDataDates({
              initialDate: dataDates.initialDate,
              finalDate: e.target.value,
            })
          }
        />
      </sc.FilterFieldsContainer>
      <sc.BtnSearch>
        <sc.IconSearchContainer>
          <BiSearchAlt />
        </sc.IconSearchContainer>
        <p>Buscar</p>
      </sc.BtnSearch>
      <sc.BtnSearch type="button" onClick={handleClearFilter}>
        <sc.IconSearchContainer>
          <AiOutlineClear />
        </sc.IconSearchContainer>
        <p>Limpiar</p>
      </sc.BtnSearch>
    </sc.OrdersFiltersContainer>
  );
};

export default FilterOrders;
