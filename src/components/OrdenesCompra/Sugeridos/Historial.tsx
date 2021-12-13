import useSuggestionsHistory from "@hooks/useSuggestionsHistory";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { RiDownload2Fill } from "react-icons/ri";
import * as sc from "../styles";

export interface IDataDates {
  initialDate: string;
  finalDate: string;
}

const Historial = () => {
  const {
    initialDate,
    finalDate,
    handleChangeInitialDate,
    handleChangeFinalDate,
    handleGetExcelHistory,
  } = useSuggestionsHistory();

  return (
    <sc.HistorialSugeridosContainer>
      <h4>Historial Sugeridos</h4>
      <sc.FieldsContainer>
        <sc.InputContainer>
          <sc.IconInputsBox>
            <BiSearchAlt />
          </sc.IconInputsBox>
          <input
            type="date"
            placeholder="FechaInicio"
            value={initialDate}
            onChange={(e) => handleChangeInitialDate(e)}
          />
        </sc.InputContainer>
        <sc.InputContainer>
          <sc.IconInputsBox>
            <BiSearchAlt />
          </sc.IconInputsBox>
          <input
            type="date"
            placeholder="FechaInicio"
            value={finalDate}
            onChange={(e) => handleChangeFinalDate(e)}
            min={initialDate}
          />
        </sc.InputContainer>
        <sc.DownloadContainer>
          <sc.IconInputsBox>
            <RiDownload2Fill />
          </sc.IconInputsBox>
          <button onClick={handleGetExcelHistory}>Descargar</button>
        </sc.DownloadContainer>
      </sc.FieldsContainer>
    </sc.HistorialSugeridosContainer>
  );
};

export default Historial;
