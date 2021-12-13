import React, { useState } from "react";
import ProveedoresTable from "./ProveedoresTable";
import * as sc from "./styles";
import { TiPlus } from "react-icons/ti";
import Modal from "react-modal";
import EmbalajeFormModal from "./EmbalajeFormModal";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { LoaderContainer } from "@components/Inventario/styles";
import GridLoader from "react-spinners/GridLoader";

const ProveedorsContainer = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { packings, loadingPacking, showPacking } = useSelector(
    (store: RootState) => store.products.packingsData
  );

  return (
    <sc.ProveedoresContainer>
      <ProveedoresTable />
      {showPacking ? (
        <sc.EmbalajesContainer>
          <Modal
            isOpen={showModal}
            style={sc.embalajeModalCustomStyles}
            onRequestClose={() => setShowModal(false)}
            closeTimeoutMS={300}
            ariaHideApp={false}
          >
            <EmbalajeFormModal />
          </Modal>
          <sc.EmbajaleHeader>
            <h4>Tipos Embalaje según proveedor seleccionado:</h4>
            <sc.EmbalajeOptions onClick={() => setShowModal(true)}>
              <sc.EmbalajeButton>Embalaje</sc.EmbalajeButton>
              <sc.IconPlus>
                <TiPlus />
              </sc.IconPlus>
            </sc.EmbalajeOptions>
          </sc.EmbajaleHeader>
          <sc.EmbalajeTableContainer>
            <sc.EmbalajeHeaderTitles>
              <sc.TitleDescItem>Código</sc.TitleDescItem>
              <sc.TitleDescItem>Tipo</sc.TitleDescItem>
              <sc.TitleDescItem>Cantidad</sc.TitleDescItem>
            </sc.EmbalajeHeaderTitles>
            <sc.EmbalajeTableListContainer>
              {!loadingPacking ? (
                packings.map((packing) => (
                  <sc.EmbalajesListItem key={packing.id}>
                    <sc.DescItem>{packing.code.toUpperCase()}</sc.DescItem>
                    <sc.DescItem>{packing.packingType.name}</sc.DescItem>
                    <sc.DescItem>{packing.quantity}</sc.DescItem>
                  </sc.EmbalajesListItem>
                ))
              ) : (
                <LoaderContainer>
                  <GridLoader color={"#CDCFFE"} size={50} />
                </LoaderContainer>
              )}
            </sc.EmbalajeTableListContainer>
          </sc.EmbalajeTableContainer>
        </sc.EmbalajesContainer>
      ) : (
        <div>Seleccione un prooveedor para ver sus tipos de embalaje</div>
      )}
    </sc.ProveedoresContainer>
  );
};

export default ProveedorsContainer;
