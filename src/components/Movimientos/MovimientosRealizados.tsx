import React from "react";
import * as sc from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { LoaderContainer } from "@components/Inventario/styles";
import { GridLoader } from "react-spinners";
dayjs.extend(customParseFormat);
const MovimientosRealizados = () => {
  const { movementsForReason, loadingForReason } = useSelector(
    (store: RootState) => store.movements
  );

  return (
    <sc.MovBox>
      <sc.TitleHeader>Movimientos Realizados</sc.TitleHeader>
      <sc.TableTitles>
        <sc.TitleDesc>Fecha</sc.TitleDesc>
        <sc.TitleDesc>Producto</sc.TitleDesc>
        <sc.TitleDesc>Valor</sc.TitleDesc>
      </sc.TableTitles>
      <sc.TableContainer>
        {!loadingForReason ? (
          movementsForReason.results.map((data, index) => (
            <sc.ListMovContainer key={index}>
              <sc.ListDescMov>
                {dayjs(data.date).format("DD/MM/YYYY")}
              </sc.ListDescMov>

              <sc.ListDescMov>{data.productName}</sc.ListDescMov>
              <sc.ListDescMov>{`$ ${new Intl.NumberFormat("de-DE").format(
                data.price
              )}`}</sc.ListDescMov>
            </sc.ListMovContainer>
          ))
        ) : (
          <LoaderContainer>
            <GridLoader color={"#CDCFFE"} size={50} />
          </LoaderContainer>
        )}
      </sc.TableContainer>
      <sc.FooterTable>{` Total registros: ${new Intl.NumberFormat(
        "DE-de"
      ).format(movementsForReason.totalResults)}`}</sc.FooterTable>
    </sc.MovBox>
  );
};

export default MovimientosRealizados;
