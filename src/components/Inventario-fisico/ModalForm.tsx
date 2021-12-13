import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import * as sc from "./styles";
const ModalForm = () => {
  return (
    <sc.ModalFormContainer>
      <sc.FieldContainer>
        <h6>Nombre Estante</h6>
        <input type="text" />
      </sc.FieldContainer>

      <sc.ProductsField>
        <sc.FieldContainer>
          <h6>Productos</h6>
          <input type="text" />
        </sc.FieldContainer>
        <sc.FieldContainer>
          <input type="text" />
        </sc.FieldContainer>
        <sc.Btn>
          <FaPlus />
        </sc.Btn>
      </sc.ProductsField>
      <sc.TableProductsContainer>
        <sc.TablListContainer>
          <sc.ListDesc>MC000468</sc.ListDesc>
          <sc.ListDesc>Producto021</sc.ListDesc>
          <sc.ListDesc cursor={true}>
            <FaTrash color="#FF4848" />
          </sc.ListDesc>
        </sc.TablListContainer>
      </sc.TableProductsContainer>
      <sc.Btn>Listo</sc.Btn>
    </sc.ModalFormContainer>
  );
};

export default ModalForm;
