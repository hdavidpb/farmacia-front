import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { RiArrowLeftSLine } from "react-icons/ri";
import Modal from "react-modal";

import * as sc from "../styles";
import ContratModal from "./ContratModal";
import { RootState } from "@redux/store";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { LoaderContainer } from "@components/Inventario/styles";
import GridLoader from "react-spinners/GridLoader";
import {
  getAllContratsByProviderId,
  getProviderDataById,
} from "../../../redux/features/providers/services";

dayjs.extend(customParseFormat);
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearProduct } from "../../../redux/features/providers/providersSlice";

const ProviderDetails = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const { providerData, contracts, loading } = useSelector(
    (store: RootState) => store.providers.providersData.contractsData
  );
  const { error } = useSelector(
    (store: RootState) =>
      store.providers.providersData.contractsData.productDetail
  );
  useEffect(() => {
    dispatch(getProviderDataById(id));
    dispatch(getAllContratsByProviderId(id));
  }, [id]);

  useEffect(() => {
    if (error) {
      toast.error("Código inválido");
      return;
    }
  }, [error]);

  const handleCloseModal = () => {
    dispatch(clearProduct());
    setShowModal(false);
  };
  return (
    <sc.ProveedoresContainer>
      <ToastContainer theme={"colored"} autoClose={2000} />
      <Modal
        style={sc.modalCustomStyles}
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        closeTimeoutMS={300}
        ariaHideApp={false}
      >
        <ContratModal />
      </Modal>
      <sc.HeaderDetails margin={true}>
        <sc.GobackContainer
          color="#CDCFFE"
          onClick={() => history.push("/farmacia/proveedores")}
        >
          <sc.IconBackContainer>
            <RiArrowLeftSLine />
          </sc.IconBackContainer>
          <h6>Regresar</h6>
        </sc.GobackContainer>
      </sc.HeaderDetails>
      <sc.ProviderDescContainer>
        <sc.DescDetailContainer>
          <h6>NIT</h6>
          <p>{providerData?.providerCode}</p>
        </sc.DescDetailContainer>
        <sc.DescDetailContainer>
          <h6>Nombre</h6>
          <p>{providerData?.providerName}</p>
        </sc.DescDetailContainer>
        <sc.DescDetailContainer>
          <h6>Dirección:</h6>
          <p>{providerData?.providerAddress}</p>
        </sc.DescDetailContainer>
        <sc.DescDetailContainer>
          <h6>Teléfono:</h6>
          <p>{providerData?.providerPhone}</p>
        </sc.DescDetailContainer>
        <sc.DescDetailContainer>
          <h6>Correo</h6>
          <p>
            {providerData?.providerEmail ? providerData.providerEmail : "N/A"}
          </p>
        </sc.DescDetailContainer>
      </sc.ProviderDescContainer>
      <sc.FilterContratContainer>
        <input type="text" placeholder="Buscar código o nombre" />
      </sc.FilterContratContainer>

      <sc.TableDescContainer>
        <sc.HeaderDetails>
          <sc.GobackContainer
            color="#4E5C6E"
            onClick={() => setShowModal(true)}
          >
            <sc.IconBackContainer>
              <FaPlus color="#FFFFFF" />
            </sc.IconBackContainer>
            <h6 style={{ color: "#ffffff" }}>Crear Contrato</h6>
          </sc.GobackContainer>
        </sc.HeaderDetails>
        <sc.MedicamentsTableTitle>
          <sc.TitleDescItem color="#CDCFFE">Código</sc.TitleDescItem>
          <sc.TitleDescItem color="#CDCFFE">Fecha Expiración</sc.TitleDescItem>
          <sc.TitleDescItem color="#CDCFFE">Medicamento</sc.TitleDescItem>
          <sc.TitleDescItem color="#CDCFFE">Precio Anterior</sc.TitleDescItem>
          <sc.TitleDescItem color="#CDCFFE">Precio Lista</sc.TitleDescItem>
          <sc.TitleDescItem color="#CDCFFE">
            Precio despúes de Negociación
          </sc.TitleDescItem>
          <sc.TitleDescItem color="#CDCFFE">Observación</sc.TitleDescItem>
          <sc.TitleDescItem color="#CDCFFE">
            Obs. Dcto pronto pago
          </sc.TitleDescItem>
        </sc.MedicamentsTableTitle>
        <sc.MedicamentsTableContainer>
          {!loading ? (
            contracts.map((contract) => (
              <sc.MedicamentsDescItem key={contract.id}>
                <sc.DescItem>{contract.product.code}</sc.DescItem>
                <sc.DescItem>
                  {dayjs(contract.expirationDate).format("DD/MM/YYYY")}
                </sc.DescItem>
                <sc.DescItem>{contract.productGenericName}</sc.DescItem>
                <sc.DescItem>{`$ ${new Intl.NumberFormat("DE-de").format(
                  contract.previousPrice
                )}`}</sc.DescItem>
                <sc.DescItem>{`$ ${new Intl.NumberFormat("DE-de").format(
                  contract.listPrice
                )}`}</sc.DescItem>
                <sc.DescItem>{`$ ${new Intl.NumberFormat("DE-de").format(
                  contract.priceAfterNegotiation
                )}`}</sc.DescItem>
                <sc.DescItem>{contract.observation}</sc.DescItem>
                <sc.DescItem>N/A</sc.DescItem>
              </sc.MedicamentsDescItem>
            ))
          ) : (
            <LoaderContainer>
              <GridLoader color={"#CDCFFE"} size={50} />
            </LoaderContainer>
          )}
        </sc.MedicamentsTableContainer>
      </sc.TableDescContainer>
    </sc.ProveedoresContainer>
  );
};

export default ProviderDetails;
