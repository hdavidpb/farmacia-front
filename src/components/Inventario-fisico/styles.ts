import styled from "styled-components";

interface IProps {
  cursorPointer?: true;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-column: 2/6;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;

  gap: 20px;

  @media (max-width: 1375px) {
    padding-right: 1rem;
  }
`;

export const FilterContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: #f3f4ff;
  border-radius: 4px;
  padding: 11px;
`;

export const InputContainer = styled.div`
  margin: auto;
  position: relative;
  width: 67%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccccc;
  border-radius: 4px;

  & input {
    width: 100%;
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 4px;
    text-align: center;
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const BtnOption = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #4e5c6e 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  padding: 8px;
  border: none;
  color: #ffffff;
  & p {
    margin-bottom: 0;
    flex: 1;
    font-size: 15px;
    color: #ffffff;
  }
`;

export const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableContainer = styled.div`
  width: 70%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 6px;
`;
export const TitleDesc = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border-radius: 6px;
  background: #cdcffe;
  margin-bottom: 0;
  font-size: 15px;
`;
export const ProductTableListContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: #9a9ff9;
  }
`;

export const TableListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
`;

export const ListDesc = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-word;
  flex-wrap: wrap;
  margin-bottom: 0;
  color: #617187;
  font-size: 14px;
  padding: 10px;
  cursor: ${({ cursorPointer }: IProps) => (cursorPointer ? "pointer" : "")};
`;

export const DownloadBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: none;
  background: #4e5c6e 0% 0% no-repeat padding-box;
  border-radius: 6px;
  padding: 7px;
  & p {
    flex: 1;

    margin-bottom: 0;
    font-size: 14px;
    color: #ffffff;
  }
`;

export const ModalFormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.2rem;
  padding: 7px;
`;

export const FieldContainer = styled.div`
  width: 100%;
  position: relative;
  border: 1px solid #cccccc;
  border-radius: 4px;

  & input {
    width: 100%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    border-radius: 4px;
  }

  & h6 {
    position: absolute;
    margin-bottom: 0;
    top: -16px;
    font-size: 14px;
  }
`;

export const ProductsField = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 33px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & button {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: #4e5c6e 0% 0% no-repeat padding-box;
    border-radius: 6px;
    color: #ffffff;
    cursor: pointer;
    padding: 6px;
  }
`;

export const Btn = styled.button`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #4e5c6e 0% 0% no-repeat padding-box;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
  padding: 6px;
`;

export const TableProductsContainer = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 6px;
  background: #ffffff;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #cdcffe;
    border-radius: 6px;
  }
`;

export const TablListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 33px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: solid 1px #8080806e;
  background: #ffffff;
`;

export const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  border: none;
  border-radius: 50%;
  background: #4e5c6e;
  color: #ffffff;
  top: 2px;
  right: 7px;
  font-size: 14px;
`;

export const formModalCustomStyles = {
  content: {
    width: "400px",
    height: "auto",
    borderRadius: "6px",
    boxShadow: "0px 0px 3px 3px #00000029",

    top: "50%",
    left: "55%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    transition: "all .4s",
    background: "#cdcffe",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.432)",
  },
};
