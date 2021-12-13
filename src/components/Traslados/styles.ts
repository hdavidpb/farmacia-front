import { Link } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  grid?: boolean;
  mTop?: boolean;
  viewGestor?: boolean;
  background?: string;
}

export const TrasladosContainer = styled.div`
  position: relative;
  width: 100%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-column: 2/6;
  padding-right: 6rem;

  gap: ${(props: IProps) => (props.viewGestor ? "20px" : "10px")};

  @media (max-width: 1375px) {
    padding-right: 1rem;
  }
`;

export const ViewBtnContainer = styled(Link)`
  text-decoration: none;
  position: absolute;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #ff9100;
  border-radius: 6px 0px 0px 6px;
  box-shadow: 0px 3px 6px #00000029;
  color: #ffffff;
  font-size: 14px;
  border: none;

  top: 2rem;
  right: 0;
  padding: 5px;
`;

export const RequestBtnContainer = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5rem;
`;

export const AddBtn = styled.button`
  width: 180px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border-radius: 6px;
  border: none;
  background: #4e5c6e;

  & p {
    margin-bottom: 0;
    flex: 1;
    font-size: 15px;
    color: #ffffff;
    text-align: left;
  }
`;

export const IconContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #ffffff;
`;
export const FilterContainer = styled.div`
  margin-top: ${(props: IProps) => (props.mTop ? "4.5rem" : "0")};
  width: 85%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 5px;
  gap: 1rem;
  background: #f3f4ff;
  border-radius: 6px;
`;
export const FielterFieldsBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & h6 {
    width: 37%;
    text-align: center;
    margin-bottom: 0;
    font-size: 14px;
  }
`;
export const InputContainer = styled.div`
  position: relative;
  width: 46%;
  border: 1px solid #cccccc;
  border-radius: 4px;
  & input {
    width: 100%;
    padding: 6px;
    border: none;
    outline: none;
    font-size: 14px;
    border-radius: 4px;
    padding-left: 35px;
  }
`;

export const IconSeacrhContainer = styled.div`
  position: absolute;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  color: #c7c7c7;
  top: 7px;
`;
export const TableContainer = styled.div`
  /* width: ${(props: IProps) => (props.viewGestor ? "100%" : "90%")}; */
  width: 90%;
  height: 68vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  @media (max-height: 778px) {
    height: 65vh;
  }
`;

export const TableListContainer = styled.div`
  width: ${(props: IProps) => (props.viewGestor ? "100%" : "90%")};
  height: 63vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: #cdcffe;
  }
`;
export const TitlesTableContainer = styled.div`
  width: ${(props: IProps) => (props.viewGestor ? "100%" : "90%")};
  height: 5vh;
  display: grid;
  grid-template-columns: ${(props: IProps) =>
    props.viewGestor ? "repeat(7, 1fr)" : "repeat(6, 1fr)"};
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-height: 778px) {
    height: ${(props: IProps) => (props.viewGestor ? "5vh" : "7vh")};
  }
`;

export const DescTitleItem = styled.p`
  margin-bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #cdcffe;
  color: #3f4a59;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  font-size: 14px;
  color: #4e5c6e;
  font-weight: 600;
  word-break: break-word;
`;

export const ItemListTable = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props: IProps) =>
    props.viewGestor ? "repeat(7, 1fr)" : "repeat(6, 1fr)"};
  justify-content: center;
  align-items: center;
  gap: 1rem;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  padding: ${(props: IProps) => (props.viewGestor ? "3px" : "0")}; ;
`;

export const DescItemList = styled.p`
  margin-bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props: IProps) => (props.viewGestor ? "0" : "10px")};
  color: #3f4a59;
  border-radius: 6px;
  font-size: 14px;
  color: #4e5c6e;
  word-break: break-word;
`;

export const BtnsContainerList = styled.div`
  margin: auto;
  width: 90%;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const BtnOption = styled.button`
  width: 100%;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: ${(props: IProps) => props.background};
  color: ${(props: IProps) =>
    props.background === "#FF5A5A" ? "#ffffff" : "#3f4a59"};
`;
/*** MODAL FORM **/

export const modalFormCustomStyles = {
  content: {
    width: "400px",
    height: "350px",
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

export const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: -10px;
  right: -5px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
  background: #4e5c6e;
  color: #ffffff;
  font-weight: bold;
  font-size: 13px;
  border: none;
`;

export const FieldsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  gap: 2rem;

  & button {
    margin: auto;
    border: none;
    font-size: 14px;
    padding: 7px;
    border-radius: 6px;
    background: #4e5c6e;
    color: #cdcffe;
    font-weight: 600;
    grid-column: 1/3;
  }
`;

export const inputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  grid-column: ${(props: IProps) => (props.grid ? "1/3" : "0")};
  & h6 {
    margin-bottom: 0;
    font-size: 14px;
    width: 100%;
    text-align: left;
    font-weight: 600;
  }

  & input {
    width: 100%;
    border: none;
    outline: none;
    padding: 6px;
    border-radius: 3px;
    transition: all.4s;

    &:focus {
      box-shadow: 0 0 2px 2px #256ae9d2;
    }
  }
`;
