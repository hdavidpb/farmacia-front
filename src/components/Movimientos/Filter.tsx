import { IDataDates } from "@redux/features/movements/interfaces";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { toast } from "react-toastify";
import * as sc from "./styles";
import {
  getAllMovementsForEntries,
  getAllMovementsForOutputs,
} from "@redux/features/movements/services";
import { setFilterStateDates } from "@redux/features/movements/movementsSlice";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const Filter = () => {
  const dispatch = useDispatch();
  const [filterDates, setFilterDates] = useState<IDataDates>({
    initialDate: "",
    finalDate: "",
  });
  const { initialDate, finalDate } = filterDates;

  const handleFilterDates = () => {
    if (!initialDate) {
      toast.error("No ha seleccionado una fecha Inicial!");
      return;
    }
    if (!initialDate && !finalDate) {
      toast.error("No ha seleccionado ninguna fecha!");
      return;
    }
    if (!finalDate) {
      toast.error("No ha seleccionado una fecha Final!");
      return;
    }

    const newFiltersData: IDataDates = {
      initialDate: dayjs(initialDate, "YYYY-MM-DD")
        .startOf("day")
        .toISOString(),
      finalDate: dayjs(finalDate, "YYYY-MM-DD").startOf("day").toISOString(),
    };
    dispatch(getAllMovementsForEntries(filterDates));
    dispatch(getAllMovementsForOutputs(filterDates));
    dispatch(setFilterStateDates(newFiltersData));
    console.log(newFiltersData);
  };

  const handleCleanFilter = () => {
    const newDates: IDataDates = {
      initialDate: dayjs().toISOString(),
      finalDate: dayjs().toISOString(),
    };
    dispatch(getAllMovementsForEntries(newDates));
    dispatch(getAllMovementsForOutputs(newDates));
    dispatch(setFilterStateDates(newDates));
    setFilterDates({
      finalDate: "",
      initialDate: "",
    });
  };

  return (
    <sc.FilterContainer>
      <sc.InputContainer>
        <h4>Fecha inicio</h4>
        <input
          type="date"
          value={initialDate}
          onChange={(e) =>
            setFilterDates({ initialDate: e.target.value, finalDate })
          }
        />
      </sc.InputContainer>
      <sc.InputContainer>
        <h4>Fecha fin</h4>
        <input
          type="date"
          value={finalDate}
          onChange={(e) =>
            setFilterDates({ initialDate, finalDate: e.target.value })
          }
          min={initialDate}
        />
      </sc.InputContainer>
      <sc.InputContainer initialDate={initialDate}>
        <button
          style={{ opacity: !initialDate ? 0.4 : 1 }}
          disabled={initialDate ? false : true}
          onClick={handleFilterDates}
        >
          Buscar
        </button>
      </sc.InputContainer>
      <sc.InputContainer>
        <button onClick={handleCleanFilter}>Limpiar</button>
      </sc.InputContainer>
    </sc.FilterContainer>
  );
};

export default Filter;
