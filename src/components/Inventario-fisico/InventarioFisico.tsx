import React from "react";
import Filter from "./Filter";
import * as sc from "./styles";
import Table from "./Table";
import Modal from "react-modal";
import ModalForm from "./ModalForm";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@redux/store";
import { setShowModal } from "@redux/features/physical-inventory/physicalInventorieSlice";
import { ToastContainer } from "react-toastify";
const InventarioFisico = () => {
  const dispatch = useDispatch();
  const { showModal } = useSelector(
    (store: RootState) => store.physicalInventorie.modalStates
  );

  return (
    <sc.Container>
      <Modal
        isOpen={showModal}
        style={sc.formModalCustomStyles}
        onRequestClose={() => dispatch(setShowModal())}
        closeTimeoutMS={300}
        ariaHideApp={false}
      >
        <ModalForm />
      </Modal>
      <Filter />
      <Table />
      <ToastContainer theme="colored" autoClose={2000} />
    </sc.Container>
  );
};

export default InventarioFisico;
