import React, { useEffect } from "react";
import * as sc from "../styles";
import Aos from "aos";
interface IProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalForm = ({ setShowModal }: IProps) => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <sc.ModalContainer data-aos="fade-down">
      <sc.CloseBtn onClick={() => setShowModal(false)}>x</sc.CloseBtn>
      <sc.FieldsContainer>
        <sc.inputsContainer>
          <h6>Código</h6>
          <input type="text" placeholder="Buscar" />
        </sc.inputsContainer>
        <sc.inputsContainer>
          <h6>Fecha</h6>
          <input type="date" />
        </sc.inputsContainer>
        <sc.inputsContainer grid={true}>
          <h6>Medicamento</h6>
          <input type="text" />
        </sc.inputsContainer>
        <sc.inputsContainer grid={true}>
          <h6>Cantidad</h6>
          <input type="number" min={0} />
        </sc.inputsContainer>
        <button>Crear</button>
      </sc.FieldsContainer>
    </sc.ModalContainer>
  );
};

export default ModalForm;
