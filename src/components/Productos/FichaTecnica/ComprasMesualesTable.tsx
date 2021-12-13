import React, { useState } from "react";
import ModalMontlyPurchases from "./ModalMontlyPurchases";
import * as sc from "./styles";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import updateLocale from "dayjs/plugin/updateLocale";
import { months } from "@components/CarrosParo/const/const";
import { IPurchase } from "@redux/features/products/interface";
dayjs.extend(customParseFormat);
dayjs.extend(updateLocale);
dayjs.updateLocale("en", { months });

const ComprasMesualesTable = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [purchases, setPurchases] = useState<IPurchase[]>([]);

  const productMonthlyPurchases = useSelector(
    (store: RootState) =>
      store.products.productsData.productDetails?.productMonthlyPurchases
  );

  const handlePrepareModal = (purchase: IPurchase[]) => {
    setShowModal(true);
    setPurchases(purchase);
  };

  return (
    <sc.RotacionesContainer>
      <Modal
        style={sc.modalCustomStyles}
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        closeTimeoutMS={300}
        ariaHideApp={false}
      >
        <ModalMontlyPurchases
          setShowModal={setShowModal}
          purchases={purchases}
        />
      </Modal>

      <sc.RotacionTitle>Compras Mensuales</sc.RotacionTitle>
      <sc.GeneralContainer>
        <sc.RotacionesTableContainer>
          {productMonthlyPurchases?.length !== 0 ? (
            <>
              {" "}
              <sc.RotacionesGrid>
                {productMonthlyPurchases?.map((product) => (
                  <sc.RotacionesTitleItem key={product.dateMonth}>
                    <p>{`${dayjs(product.dateMonth).format("MMMM")}`}</p>
                    <p>{`${dayjs(product.dateMonth).format("YYYY")}`}</p>
                  </sc.RotacionesTitleItem>
                ))}
              </sc.RotacionesGrid>
              <sc.RotacionesResultsContainer>
                {productMonthlyPurchases?.map((product) => (
                  <sc.RotacionesResultsItem
                    mesual={true}
                    key={product.dateMonth}
                  >
                    <p onClick={() => handlePrepareModal(product.purchases)}>
                      {product.purchasesCount}
                    </p>
                  </sc.RotacionesResultsItem>
                ))}
              </sc.RotacionesResultsContainer>
            </>
          ) : (
            <>
              <div>Aún no hay compras para este producto</div>
            </>
          )}
        </sc.RotacionesTableContainer>
      </sc.GeneralContainer>
    </sc.RotacionesContainer>
  );
};

export default ComprasMesualesTable;
