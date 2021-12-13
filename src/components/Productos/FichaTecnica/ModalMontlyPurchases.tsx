import React, { useEffect } from "react";
import * as sc from "./styles";
import "aos/dist/aos.css";
import Aos from "aos";
import { IPurchase } from "@redux/features/products/interface";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
interface IProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  purchases: IPurchase[];
}

const ModalMontlyPurchases = ({ setShowModal, purchases }: IProps) => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <sc.ModalContainer data-aos="fade-down">
      <sc.PurschasesContainer>
        <sc.HeaderTitleContainer header={true}>
          <sc.DescListTitle>FACTURA</sc.DescListTitle>
          <sc.DescListTitle>CANTIDAD</sc.DescListTitle>
          <sc.DescListTitle>PROVEEDOR</sc.DescListTitle>
          <sc.DescListTitle>FECHA FACTURA</sc.DescListTitle>
          <sc.DescListTitle>VALOR EN FACTURA</sc.DescListTitle>
        </sc.HeaderTitleContainer>
        <sc.TablePurchases>
          {purchases.map((purchase, index) => (
            <sc.HeaderTitleContainer header={false} key={index}>
              <sc.DescTable>{purchase.invoice}</sc.DescTable>
              <sc.DescTable>{purchase.quantity}</sc.DescTable>
              <sc.DescTable>{purchase.provider}</sc.DescTable>
              <sc.DescTable>
                {dayjs(purchase.date).format("YYYY-MM-DD")}
              </sc.DescTable>
              <sc.DescTable>{`$ ${new Intl.NumberFormat("DE-de").format(
                purchase.invoiceValue
              )}`}</sc.DescTable>
            </sc.HeaderTitleContainer>
          ))}
        </sc.TablePurchases>
        <sc.FooterModal>
          <button onClick={() => setShowModal(false)}>Cerrar</button>
        </sc.FooterModal>
      </sc.PurschasesContainer>
    </sc.ModalContainer>
  );
};

export default ModalMontlyPurchases;
