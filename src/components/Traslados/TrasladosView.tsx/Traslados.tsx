import { gestorViewPath } from "@routes/routes";
import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import Modal from "react-modal";
import * as sc from "../styles";
import { TitlesTable } from "./const";
import ModalForm from "./ModalForm";
const Traslados = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <sc.TrasladosContainer>
      <Modal
        isOpen={showModal}
        style={sc.modalFormCustomStyles}
        onRequestClose={() => setShowModal(false)}
        closeTimeoutMS={300}
        ariaHideApp={false}
      >
        <ModalForm setShowModal={setShowModal} />
      </Modal>
      <sc.ViewBtnContainer to={gestorViewPath}>
        Vista Gestor
      </sc.ViewBtnContainer>
      <sc.RequestBtnContainer>
        <sc.AddBtn onClick={() => setShowModal(true)}>
          <sc.IconContainer>
            <FaPlus />
          </sc.IconContainer>
          <p>Nueva Solicitud</p>
        </sc.AddBtn>
      </sc.RequestBtnContainer>
      <sc.FilterContainer>
        <sc.FielterFieldsBox>
          <h6>Filtrar por medicamento</h6>
          <sc.InputContainer>
            <sc.IconSeacrhContainer>
              <BiSearchAlt />
            </sc.IconSeacrhContainer>
            <input type="text" placeholder="Buscar" />
          </sc.InputContainer>
        </sc.FielterFieldsBox>
        <sc.FielterFieldsBox>
          <h6>Filtrar por medicamento</h6>
          <sc.InputContainer>
            <sc.IconSeacrhContainer>
              <BiSearchAlt />
            </sc.IconSeacrhContainer>
            <input type="date" placeholder="Buscar" />
          </sc.InputContainer>
        </sc.FielterFieldsBox>
      </sc.FilterContainer>
      <sc.TableContainer>
        <sc.TitlesTableContainer>
          {TitlesTable.map((title, index) => (
            <sc.DescTitleItem key={index}>{title}</sc.DescTitleItem>
          ))}
        </sc.TitlesTableContainer>
        <sc.TableListContainer>
          <sc.ItemListTable>
            <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
            <sc.DescItemList>Rechazada</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
          </sc.ItemListTable>
          <sc.ItemListTable>
            <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
            <sc.DescItemList>Rechazada</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
          </sc.ItemListTable>
          <sc.ItemListTable>
            <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
            <sc.DescItemList>Rechazada</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
          </sc.ItemListTable>
          <sc.ItemListTable>
            <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
            <sc.DescItemList>Rechazada</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
          </sc.ItemListTable>
          <sc.ItemListTable>
            <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
            <sc.DescItemList>Rechazada</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
          </sc.ItemListTable>
          <sc.ItemListTable>
            <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
            <sc.DescItemList>Rechazada</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
          </sc.ItemListTable>
          <sc.ItemListTable>
            <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
            <sc.DescItemList>Rechazada</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
          </sc.ItemListTable>
          <sc.ItemListTable>
            <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
            <sc.DescItemList>Rechazada</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
          </sc.ItemListTable>
          <sc.ItemListTable>
            <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
            <sc.DescItemList>Rechazada</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
          </sc.ItemListTable>
          <sc.ItemListTable>
            <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
            <sc.DescItemList>Rechazada</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
          </sc.ItemListTable>
          <sc.ItemListTable>
            <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
            <sc.DescItemList>Rechazada</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
          </sc.ItemListTable>
          <sc.ItemListTable>
            <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
            <sc.DescItemList>Rechazada</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
          </sc.ItemListTable>
        </sc.TableListContainer>
      </sc.TableContainer>
    </sc.TrasladosContainer>
  );
};

export default Traslados;

// <sc.ItemListTable>
// <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
// <sc.DescItemList>Rechazada</sc.DescItemList>
// <sc.DescItemList>MC000468</sc.DescItemList>
// <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
// <sc.DescItemList>450mg</sc.DescItemList>
// <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
// </sc.ItemListTable>
// <sc.ItemListTable>
// <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
// <sc.DescItemList>Rechazada</sc.DescItemList>
// <sc.DescItemList>MC000468</sc.DescItemList>
// <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
// <sc.DescItemList>450mg</sc.DescItemList>
// <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
// </sc.ItemListTable>
// <sc.ItemListTable>
// <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
// <sc.DescItemList>Rechazada</sc.DescItemList>
// <sc.DescItemList>MC000468</sc.DescItemList>
// <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
// <sc.DescItemList>450mg</sc.DescItemList>
// <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
// </sc.ItemListTable>
// <sc.ItemListTable>
// <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
// <sc.DescItemList>Rechazada</sc.DescItemList>
// <sc.DescItemList>MC000468</sc.DescItemList>
// <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
// <sc.DescItemList>450mg</sc.DescItemList>
// <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
// </sc.ItemListTable>
// <sc.ItemListTable>
// <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
// <sc.DescItemList>Rechazada</sc.DescItemList>
// <sc.DescItemList>MC000468</sc.DescItemList>
// <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
// <sc.DescItemList>450mg</sc.DescItemList>
// <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
// </sc.ItemListTable>
// <sc.ItemListTable>
// <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
// <sc.DescItemList>Rechazada</sc.DescItemList>
// <sc.DescItemList>MC000468</sc.DescItemList>
// <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
// <sc.DescItemList>450mg</sc.DescItemList>
// <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
// </sc.ItemListTable>
// <sc.ItemListTable>
// <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
// <sc.DescItemList>Rechazada</sc.DescItemList>
// <sc.DescItemList>MC000468</sc.DescItemList>
// <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
// <sc.DescItemList>450mg</sc.DescItemList>
// <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
// </sc.ItemListTable>
// <sc.ItemListTable>
// <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
// <sc.DescItemList>Rechazada</sc.DescItemList>
// <sc.DescItemList>MC000468</sc.DescItemList>
// <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
// <sc.DescItemList>450mg</sc.DescItemList>
// <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
// </sc.ItemListTable>
// <sc.ItemListTable>
// <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
// <sc.DescItemList>Rechazada</sc.DescItemList>
// <sc.DescItemList>MC000468</sc.DescItemList>
// <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
// <sc.DescItemList>450mg</sc.DescItemList>
// <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
// </sc.ItemListTable>
// <sc.ItemListTable>
// <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
// <sc.DescItemList>Rechazada</sc.DescItemList>
// <sc.DescItemList>MC000468</sc.DescItemList>
// <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
// <sc.DescItemList>450mg</sc.DescItemList>
// <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
// </sc.ItemListTable>
// <sc.ItemListTable>
// <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
// <sc.DescItemList>Rechazada</sc.DescItemList>
// <sc.DescItemList>MC000468</sc.DescItemList>
// <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
// <sc.DescItemList>450mg</sc.DescItemList>
// <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
// </sc.ItemListTable>
// <sc.ItemListTable>
// <sc.DescItemList>01 / Julio / 2020</sc.DescItemList>
// <sc.DescItemList>Rechazada</sc.DescItemList>
// <sc.DescItemList>MC000468</sc.DescItemList>
// <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
// <sc.DescItemList>450mg</sc.DescItemList>
// <sc.DescItemList>Brian Centeno Pérez</sc.DescItemList>
// </sc.ItemListTable>
