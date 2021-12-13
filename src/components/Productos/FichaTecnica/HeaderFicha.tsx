import { RootState } from "@redux/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as sc from "./styles";
import { FiEdit } from "react-icons/fi";
import { FaSave } from "react-icons/fa";
const HeaderFicha = () => {
  const { productDetails } = useSelector(
    (store: RootState) => store.products.productsData
  );
  const [edit, setEdit] = useState<boolean>(true);
  return (
    <>
      <sc.FichaHeader>
        <sc.TitleContainer>
          <sc.Title principal={true}>Ficha técnica Producto</sc.Title>
          <sc.EditAndSaveContainer onClick={() => setEdit(!edit)}>
            {edit ? (
              <>
                <p>Editar</p>
                <FiEdit />
              </>
            ) : (
              <>
                <p>Guardar</p>
                <FaSave />
              </>
            )}
          </sc.EditAndSaveContainer>
        </sc.TitleContainer>
      </sc.FichaHeader>
      <sc.HeaderFieldsContainer background={true} border={false}>
        <sc.FieldContainer>
          <label>Código:</label>
          <p>{productDetails?.productCode}</p>
        </sc.FieldContainer>
        <sc.FieldContainer>
          <label>Nombre:</label>
          <p>{productDetails?.productName}</p>
        </sc.FieldContainer>
        <sc.FieldContainer>
          <label>Nombre genérico:</label>
          <p>Lorem, ipsum dolor.</p>
        </sc.FieldContainer>
        <sc.FieldContainer>
          <label>PBS/NO PBS:</label>
          <p>{productDetails?.productPosNoPos}</p>
        </sc.FieldContainer>
        <sc.FieldContainer>
          <label>Concentración:</label>
          <p>{productDetails?.productConcentration}</p>
        </sc.FieldContainer>
        <sc.FieldContainer>
          <label>Forma Farmacéutica:</label>
          <p>
            {productDetails?.productPharmForm
              ? productDetails?.productPharmForm
              : "N/A"}
          </p>
        </sc.FieldContainer>

        <sc.FieldContainer>
          <label>Tipo:</label>
          <p>Medicamentos (Revisar)</p>
        </sc.FieldContainer>
        <sc.FieldContainer>
          <label>clasificación del riesgo:</label>
          <p>Lorem, ipsum.</p>
        </sc.FieldContainer>
        <sc.FieldContainer>
          <label>Grupo Terapéutico:</label>
          <p>{productDetails?.productSubcategory}</p>
        </sc.FieldContainer>
        <sc.FieldContainer>
          <label>Sub grupo:</label>
          <p> {productDetails?.productCategory}</p>
        </sc.FieldContainer>
      </sc.HeaderFieldsContainer>
      <sc.SecondaryFieldsContainer>
        <sc.FichaHeader>
          <sc.TitleContainer>
            <sc.Title principal={false}>Técnico:</sc.Title>
          </sc.TitleContainer>
        </sc.FichaHeader>
        <sc.HeaderFieldsContainer background={false} border={true}>
          <sc.FieldContainer>
            <label>Reg. INVIMA:</label>
            {!edit ? (
              <sc.InputEdit width="105px" type="text" />
            ) : (
              <p>{productDetails?.productInvimaCode}</p>
            )}
          </sc.FieldContainer>
          <sc.FieldContainer>
            <label>Fecha Vencimiento Reg. INVIMA :</label>
            {!edit ? (
              <sc.InputEdit width="125px" type="date" />
            ) : (
              <p>Lorem, ipsum dolor.</p>
            )}
          </sc.FieldContainer>
          <sc.FieldContainer>
            <label>Código CUM:</label>
            <p>{productDetails?.productCumCode}</p>
          </sc.FieldContainer>
          <sc.FieldContainer>
            <label>Código ATC:</label>
            <p>{productDetails?.productAtcCode}</p>
          </sc.FieldContainer>
          <sc.FieldContainer>
            <label>Medicamento controlado:</label>
            <p>Lorem, ipsum dolor.</p>
          </sc.FieldContainer>
          <sc.FieldContainer>
            <label>Vida útil:</label>
            <p>Lorem, ipsum.</p>
          </sc.FieldContainer>
          <sc.FieldContainer>
            <label>Indicaciones de uso:</label>
            {!edit ? (
              <sc.TextAreaEdit width="100%" />
            ) : (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, quod. Aperiam distinctio recusandae dolore quibusdam!
              </p>
            )}
          </sc.FieldContainer>
        </sc.HeaderFieldsContainer>
      </sc.SecondaryFieldsContainer>

      <sc.SecondaryFieldsContainer>
        <sc.FichaHeader>
          <sc.TitleContainer>
            <sc.Title principal={false}>Financiero:</sc.Title>
          </sc.TitleContainer>
        </sc.FichaHeader>
        <sc.HeaderFieldsContainer background={false} border={true}>
          <sc.FieldContainer>
            <label>Precio anterior:</label>
            <p>Lorem ipsum dolor sit amet.</p>
          </sc.FieldContainer>

          <sc.FieldContainer>
            <label>Precio de lista:</label>
            <p>{productDetails?.productAtcCode}</p>
          </sc.FieldContainer>
          <sc.FieldContainer>
            <label>Precio negociado:</label>
            <p>Lorem, ipsum dolor.</p>
          </sc.FieldContainer>
          <sc.FieldContainer>
            <label>Alto costo:</label>
            <p>Lorem, ipsum.</p>
          </sc.FieldContainer>
          <sc.FieldContainer>
            <label>Precio de regulación:</label>
            {!edit ? (
              <sc.InputEdit width="105px" type="number" />
            ) : (
              <p>Lorem ipsum dolor sit amet.</p>
            )}
          </sc.FieldContainer>
          <sc.FieldContainer>
            <label>Medicamento regulado:</label>
            <p>Lorem, ipsum.</p>
          </sc.FieldContainer>

          <sc.FieldContainer>
            <label>Clasificación según el costo:</label>
            <p>Lorem, ipsum.</p>
          </sc.FieldContainer>
          <sc.FieldContainer>
            <label>Observación:</label>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, voluptas.
            </p>
          </sc.FieldContainer>
        </sc.HeaderFieldsContainer>
      </sc.SecondaryFieldsContainer>
      {/* <sc.HeaderFieldsContainer>
        <sc.SecondaryFieldContainer>
          <label>Última Entrada:</label>
          <p>24/06/2021</p>
          <p>16:42:29</p>
        </sc.SecondaryFieldContainer>
        <sc.SecondaryFieldContainer>
          <label>Última Salida:</label>
          <p>37/07/202</p>
          <p>11:03:33</p>
        </sc.SecondaryFieldContainer>
      </sc.HeaderFieldsContainer> */}
    </>
  );
};

export default HeaderFicha;
