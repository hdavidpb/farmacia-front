import React, { useEffect, useState } from "react";
import * as sc from "./styles";
import { FaCloudUploadAlt } from "react-icons/fa";
import { AiOutlineCloudDownload } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "@redux/store";
import {
  getAllPackingByProviderAndProduct,
  putProductContract,
} from "../../../redux/features/products/services";
import GridLoader from "react-spinners/GridLoader";
import { toast, ToastContainer } from "react-toastify";
import { ProviderContract } from "../../../redux/features/products/interface";
import { setContractSelected } from "../../../redux/features/products/productsSlice";

export interface IPutContractData {
  id: number;
  formData: FormData;
  index: number;
}

const ProveedoresTable = () => {
  const [selected, setSelected] = useState<number>(-1);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const { productDetails, fileLoading } = useSelector(
    (store: RootState) => store.products.productsData
  );

  const handlePutFile = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
    index: number
  ) => {
    const formData = new FormData();
    const file = e.target.files![0];
    formData.append("contractDataSheetFile", file);
    const data: IPutContractData = {
      id: id,
      formData: formData,
      index: index,
    };

    if (e.target.files?.length !== 0) {
      dispatch(putProductContract(data));
      toast.success("Datos actualizados con Exito");
      return;
    }

    if (e.target.files?.length === 0) {
      dispatch(putProductContract(data));
      toast.warning("No se selecciono ningún archivo");
      return;
    }
  };

  const handleSelectContract = (contract: ProviderContract, index: number) => {
    const contractSelect = {
      providerId: contract.providerId,
      productId: id,
      productCode: productDetails!.productCode,
    };
    dispatch(setContractSelected(contractSelect));
    dispatch(getAllPackingByProviderAndProduct(contractSelect));
    setSelected(index);
  };

  return (
    <sc.ProveedoresTableContainer>
      <sc.TableContainer>
        <sc.TableTitle>Listado Proveedores</sc.TableTitle>
        <sc.HeaderTitles>
          <sc.TitleDescItem>NIT</sc.TitleDescItem>
          <sc.TitleDescItem>Nombre</sc.TitleDescItem>
          <sc.TitleDescItem>Precio Negociado</sc.TitleDescItem>
          <sc.TitleDescItem>Ficha Técnica</sc.TitleDescItem>
        </sc.HeaderTitles>
        <sc.ProveedoresTableListContainer>
          {fileLoading ? (
            <sc.LoaderBox>
              <GridLoader color={"#CDCFFE"} size={20} />
            </sc.LoaderBox>
          ) : null}
          {productDetails?.providerContracts.length !== 0 ? (
            productDetails?.providerContracts.map((contract, index) => (
              <sc.ProveedoresListItem
                style={{ background: selected === index ? "#dcfff2" : "white" }}
                key={contract.id}
                onClick={() => handleSelectContract(contract, index)}
              >
                <sc.DescItem>{contract.providerNit}</sc.DescItem>
                <sc.DescItem>{contract.providerName.trim()}</sc.DescItem>
                <sc.DescItem>{`$ ${new Intl.NumberFormat("de-DE").format(
                  contract.negotiatedPrice
                )}`}</sc.DescItem>
                <sc.DownloadContainer>
                  {contract.dataSheetUrl ? (
                    <sc.DownloadButton
                      style={{ opacity: !contract.dataSheetUrl ? 0.5 : 1 }}
                      disabled={contract.dataSheetUrl ? false : true}
                      onClick={() => window.open(contract.dataSheetUrl)}
                    >
                      <sc.IconBox>
                        <AiOutlineCloudDownload />
                      </sc.IconBox>
                      <p>Descargar datos</p>
                    </sc.DownloadButton>
                  ) : null}

                  <sc.DownloadButton downloadButton={false}>
                    <sc.IconBox>
                      <FaCloudUploadAlt />
                    </sc.IconBox>
                    <p>Subir datos</p>
                    <input
                      type="file"
                      onChange={(e) => handlePutFile(e, contract.id, index)}
                    />
                  </sc.DownloadButton>
                </sc.DownloadContainer>
              </sc.ProveedoresListItem>
            ))
          ) : (
            <div>Este producto aún no tiene proveedores con contratos</div>
          )}
        </sc.ProveedoresTableListContainer>
      </sc.TableContainer>
      <sc.RotacionVariablesContainer>
        <sc.VariablesTitle>Variables de Rotación</sc.VariablesTitle>
        <sc.VariablesListContainer>
          <sc.VariablesItem>
            <label> Saldo</label>
            <p>
              {productDetails?.currentStock ? productDetails.currentStock : 0}
            </p>
          </sc.VariablesItem>
          <sc.VariablesItem>
            <label> Promedio</label>
            <p>{productDetails?.promStock}</p>
          </sc.VariablesItem>
          <sc.VariablesItem>
            <label>Min</label>
            <p>{productDetails?.minimumStock}</p>
          </sc.VariablesItem>
          <sc.VariablesItem>
            <label>Alerta Sobre stock</label>
            <p>{productDetails?.stockAlert}</p>
          </sc.VariablesItem>
        </sc.VariablesListContainer>
      </sc.RotacionVariablesContainer>
      <ToastContainer theme={"colored"} autoClose={2000} />
    </sc.ProveedoresTableContainer>
  );
};

export default ProveedoresTable;
