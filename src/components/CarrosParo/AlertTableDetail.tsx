import { IAlertDetail } from "@redux/features/crashcarts/interfaces";
import React from "react";
import { BsCheck } from "react-icons/bs";
import * as sc from "./styles";

interface IProps {
  medicaments: IAlertDetail;
}

const AlertTableDetail = ({ medicaments }: IProps) => {
  return (
    <sc.TableDetailContainer>
      <sc.TitleTableDetail>
        <p>{medicaments.category}</p>
        <sc.CheckContainer chek={medicaments.ready}>
          <sc.CkeckIcon>
            <BsCheck />
            <p>Listo</p>
          </sc.CkeckIcon>
        </sc.CheckContainer>
      </sc.TitleTableDetail>
      <sc.TableListContainer>
        {medicaments.results.map((med) => (
          <sc.ListItemDesc key={med.productId}>
            <p> {med.productName}</p>
            <h6>{`${med.quantity}/${med.maxQuantity}`}</h6>
          </sc.ListItemDesc>
        ))}
      </sc.TableListContainer>
    </sc.TableDetailContainer>
  );
};

export default AlertTableDetail;
