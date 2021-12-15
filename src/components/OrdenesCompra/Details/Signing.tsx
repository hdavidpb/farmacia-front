import React from "react";
import * as sc from "./styles";
const Signing = () => {
  return (
    <sc.SigningContainer>
      <sc.BonnasonaTemplateContinaer>
        <sc.HeaderContainer>
          <sc.ImgHeader>
            <img
              src="http://organizacioncbp.org/images/logo_nofondo.png"
              alt="logo"
            />
          </sc.ImgHeader>
          <sc.ContentHeader>
            <h1>ORGANIZACIÓN CLÍNICA BONNADONA PREVENIR S.A.S</h1>
            <h1>SEDE ÚNICA</h1>
            <h1>800194798-2</h1>
            <sc.FieldContentHeader>
              <sc.FieldSingleContainer>
                <span>Dirección:</span>
                <p>CRA 49C - N. 82- 70</p>
              </sc.FieldSingleContainer>
              <sc.FieldSingleContainer>
                <span>Tel:</span>
                <p>3674800</p>
              </sc.FieldSingleContainer>
            </sc.FieldContentHeader>
            <sc.FieldSingleContainer>
              <span>Órden de compra No. : </span>
              <p>001-OSX-20053</p>
            </sc.FieldSingleContainer>
            <sc.FieldContentHeader>
              <sc.FieldSingleContainer>
                <span>Fecha:</span>
                <p>03/10/2021</p>
              </sc.FieldSingleContainer>
              <sc.FieldSingleContainer>
                <span>Estado:</span>
                <p>Pendiente</p>
              </sc.FieldSingleContainer>
            </sc.FieldContentHeader>
          </sc.ContentHeader>
        </sc.HeaderContainer>
        <sc.ContentContainer grid="2" border={true}>
          <sc.ContentHeader>
            <sc.FieldSingleContainer>
              <span>Proveedor:</span>
              <p>890981683 CORPAUL</p>
            </sc.FieldSingleContainer>
            <sc.FieldSingleContainer>
              <span>Dirección:</span>
              <p>CRA 52A N* 39-80 LA BAYERA</p>
            </sc.FieldSingleContainer>
            <sc.FieldSingleContainer>
              <span>Ciudad:</span>
              <p>BARRANQUILLA (ATLÁNTICO)</p>
            </sc.FieldSingleContainer>
            <sc.FieldSingleContainer>
              <span>Telefono:</span>
              <p>4480550</p>
            </sc.FieldSingleContainer>
          </sc.ContentHeader>
          <sc.ContentHeader>
            <sc.FieldSingleContainer>
              <span>--Contacto</span>
              <p>N/A</p>
            </sc.FieldSingleContainer>
            <sc.FieldSingleContainer>
              <span>CARGO:</span>
              <p>N/A</p>
            </sc.FieldSingleContainer>
            <sc.FieldSingleContainer>
              <span>Pago A:</span>
              <p>120 DÍAS</p>
            </sc.FieldSingleContainer>
          </sc.ContentHeader>
        </sc.ContentContainer>
        <sc.ContentContainer grid="2">
          <sc.ContentHeader>
            <sc.ContentContainer grid="2">
              <sc.FieldSingleContainer>
                <span>Anticipo: </span>
                <p>0.00</p>
              </sc.FieldSingleContainer>
              <sc.FieldSingleContainer>
                <span>Concepto: </span>
                <p>OC</p>
              </sc.FieldSingleContainer>
            </sc.ContentContainer>
            <sc.FieldSingleContainer>
              <span>Observaciones: </span>
              <p>--</p>
            </sc.FieldSingleContainer>
            <sc.FieldSingleContainer>
              <span>URGENTE</span>
              <p>--</p>
            </sc.FieldSingleContainer>
          </sc.ContentHeader>
          <sc.FieldSingleContainer>
            <span>Bodega:</span>
            <p>FARM FARMACIA CENTRAL 02</p>
          </sc.FieldSingleContainer>
        </sc.ContentContainer>
        <sc.FooterGridConteiner>
          <sc.TilteFirstContainer grid="2">
            <sc.TitleLayoutDesc>Referencia</sc.TitleLayoutDesc>
            <sc.TitleLayoutDesc>Descripción</sc.TitleLayoutDesc>
          </sc.TilteFirstContainer>
          <sc.TitleSeconContainer grid="7">
            <sc.TitleLayoutDesc border={true}>T-Ent</sc.TitleLayoutDesc>
            <sc.TitleLayoutDesc border={true}>Und</sc.TitleLayoutDesc>
            <sc.TitleLayoutDesc border={true}>Cantidad</sc.TitleLayoutDesc>
            <sc.TitleLayoutDesc border={true}>Vlr. Unitario</sc.TitleLayoutDesc>
            <sc.TitleLayoutDesc border={true}>Vlr. Dcto.</sc.TitleLayoutDesc>
            <sc.TitleLayoutDesc border={true}>Vlr. IVA</sc.TitleLayoutDesc>
            <sc.TitleLayoutDesc border={true}>Vlr. Neto</sc.TitleLayoutDesc>
          </sc.TitleSeconContainer>
        </sc.FooterGridConteiner>
        <sc.FooterGridConteiner>
          <sc.TilteFirstContainer grid="2">
            <sc.TitleLayoutDesc>MC000026</sc.TitleLayoutDesc>
            <sc.TitleLayoutDesc>AGUA ESTERIL 500 ML</sc.TitleLayoutDesc>
          </sc.TilteFirstContainer>
          <sc.TitleSeconContainer grid="7">
            <sc.TitleLayoutDesc border={true}>5</sc.TitleLayoutDesc>
            <sc.TitleLayoutDesc border={true}>80</sc.TitleLayoutDesc>
            <sc.TitleLayoutDesc border={true}>500000</sc.TitleLayoutDesc>
            <sc.TitleLayoutDesc border={true}>1.722,00</sc.TitleLayoutDesc>
            <sc.TitleLayoutDesc border={true}>0,00</sc.TitleLayoutDesc>
            <sc.TitleLayoutDesc border={true}>0,00</sc.TitleLayoutDesc>
            <sc.TitleLayoutDesc border={true}>1.377.600,00</sc.TitleLayoutDesc>
          </sc.TitleSeconContainer>
        </sc.FooterGridConteiner>
      </sc.BonnasonaTemplateContinaer>
    </sc.SigningContainer>
  );
};

export default Signing;
