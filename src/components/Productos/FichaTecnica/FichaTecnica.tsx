import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ComprasMesualesTable from "./ComprasMesualesTable";
import DespachosMensuales from "./DespachosMensuales";
import FacturacionMensual from "./FacturacionMensual";
import HeaderFicha from "./HeaderFicha";
import ProveedorsContainer from "./ProveedorsContainer";
import RotacionMensual from "./RotacionMensual";
import { RiArrowLeftSLine } from "react-icons/ri";
import QRimage from "../../../assets/images/qr.jpg";
import * as sc from "./styles";
import {
  getAllPackingType,
  getProducDetail,
} from "../../../redux/features/products/services";
import {
  clearFilter,
  clearProductsState,
} from "../../../redux/features/products/productsSlice";
import { RootState } from "@redux/store";
import { LoaderContainer } from "@components/Inventario/styles";
import { GridLoader } from "react-spinners";

const FichaTecnica = () => {
  const { loadingProductDetail } = useSelector(
    (store: RootState) => store.products.productsData
  );
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(getProducDetail(id));
  }, [id]);

  useEffect(() => {
    dispatch(clearProductsState());
    dispatch(clearFilter());
    dispatch(getAllPackingType());
  }, []);

  return (
    <sc.FichaContainer>
      {!loadingProductDetail ? (
        <>
          <sc.HeaderContainer>
            <sc.BackBtnContainer to="/farmacia/productos">
              <RiArrowLeftSLine />
              <p> Regresar</p>
            </sc.BackBtnContainer>
            <sc.QRContainer>
              <h4>Código QR</h4>
              <sc.QRImage src={QRimage} />
            </sc.QRContainer>
          </sc.HeaderContainer>
          <sc.FichaContainerData>
            <HeaderFicha />
            <ProveedorsContainer />
            <RotacionMensual />
            <ComprasMesualesTable />
            <DespachosMensuales />
            <FacturacionMensual />
          </sc.FichaContainerData>
        </>
      ) : (
        <>
          <LoaderContainer>
            <GridLoader color={"#CDCFFE"} size={50} />
          </LoaderContainer>
        </>
      )}
    </sc.FichaContainer>
  );
};

export default FichaTecnica;
