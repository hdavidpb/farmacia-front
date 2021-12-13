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
const DespachosMensuales = () => {
  const productMontlyOutputs = useSelector(
    (store: RootState) =>
      store.products.productsData.productDetails?.productMonthlyOutputs
  );

  return (
    <sc.RotacionesContainer>
      <sc.RotacionTitle>Despachos Mensuales</sc.RotacionTitle>
      <sc.GeneralContainer>
        <sc.RotacionesTableContainer>
          {productMontlyOutputs?.length !== 0 ? (
            <>
              <sc.RotacionesGrid>
                {productMontlyOutputs?.map((product) => (
                  <sc.RotacionesTitleItem key={product.dateMonth}>
                    <p>{`${dayjs(product.dateMonth).format("MMMM")}`}</p>
                    <p>{`${dayjs(product.dateMonth).format("YYYY")}`}</p>
                  </sc.RotacionesTitleItem>
                ))}
              </sc.RotacionesGrid>
              <sc.RotacionesResultsContainer>
                {productMontlyOutputs?.map((product) => (
                  <sc.RotacionesResultsItem key={product.dateMonth}>
                    <p>{product.outputQuantity}</p>
                  </sc.RotacionesResultsItem>
                ))}
              </sc.RotacionesResultsContainer>
            </>
          ) : (
            <>
              <div> Aún No hay Despachos para este producto</div>
            </>
          )}
        </sc.RotacionesTableContainer>
      </sc.GeneralContainer>
    </sc.RotacionesContainer>
  );
};

export default DespachosMensuales;
