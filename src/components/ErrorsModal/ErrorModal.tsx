import React from "react";
import * as sc from "./styles";

interface IModalError {
  error: number | string | null;
}

const ErrorModal = ({ error }: IModalError) => {
  return (
    <sc.ModalContainer>
      <sc.DescError>
        {typeof error === "number" ? "Ah ocurrido un error" : error}
      </sc.DescError>
      {typeof error === "number" ? (
        <sc.NumberError>{error}</sc.NumberError>
      ) : null}
      <sc.DescError>
        Favor comunicarse con el departamento de sistemas
      </sc.DescError>
    </sc.ModalContainer>
  );
};

export default ErrorModal;
