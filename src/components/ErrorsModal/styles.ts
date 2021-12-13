import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 40%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 0px 2px 2px #10101094;
  border-radius: 6px;
  background: #ffffff;
`;

export const TitleError = styled.h3`
  width: 100%;
  padding: 1rem;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 0;
`;

export const NumberError = styled.h1`
  width: 100%;
  height: 100px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
`;

export const DescError = styled.p`
  width: 100%;
  padding: 1rem;
  text-align: center;
  font-size: 20px;
  margin-bottom: 0;
`;
