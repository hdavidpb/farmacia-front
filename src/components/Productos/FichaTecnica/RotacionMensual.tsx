import { RootState } from "@redux/store";
import React from "react";
import { useSelector } from "react-redux";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import updateLocale from "dayjs/plugin/updateLocale";
import { months } from "@components/CarrosParo/const/const";
dayjs.extend(customParseFormat);
dayjs.extend(updateLocale);
dayjs.updateLocale("en", { months });
import * as sc from "./styles";

const RotacionMensual = () => {
  const { productDetails } = useSelector(
    (store: RootState) => store.products.productsData
  );

  return (
    <sc.RotacionesContainer>
      <sc.RotacionTitle>Rotación Mensual</sc.RotacionTitle>
      <sc.GeneralContainer>
        <sc.RotacionesTableContainer>
          {productDetails?.productMonthlyRotations.length !== 0 ? (
            <>
              {" "}
              <sc.RotacionesGrid>
                {productDetails?.productMonthlyRotations.map((product) => (
                  <sc.RotacionesTitleItem key={product.dateMonth}>
                    <p>{`${dayjs(product.dateMonth).format("MMMM")}`}</p>
                    <p>{`${dayjs(product.dateMonth).format("YYYY")}`}</p>
                  </sc.RotacionesTitleItem>
                ))}
              </sc.RotacionesGrid>
              <sc.RotacionesResultsContainer>
                {productDetails?.productMonthlyRotations.map((product) => (
                  <sc.RotacionesResultsItem key={product.dateMonth}>
                    <p>{product.rotation}</p>
                  </sc.RotacionesResultsItem>
                ))}
              </sc.RotacionesResultsContainer>
            </>
          ) : (
            <>
              {" "}
              <div>Aún no hay rotaciones</div>{" "}
            </>
          )}
        </sc.RotacionesTableContainer>
      </sc.GeneralContainer>
    </sc.RotacionesContainer>
  );
};

export default RotacionMensual;
