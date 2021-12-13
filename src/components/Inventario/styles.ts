import styled from "styled-components";
import { themes } from "../../assets/themes/theme";

interface IProps {
  columns: string;
}

/***************INVENTARIO LIST CONTAINER STYLES************/

export const AllContainer = styled.div`
  width: 100%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 2/6;
  padding-top: 1rem;
  padding-right: 5rem;

  gap: 2rem;
  @media (max-width: 1375px) {
    padding-right: 1rem;
  }
  gap: 10px;
`;

export const InventarioContainer = styled.div`
  position: relative;
  width: 100%;
  height: 84%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export const InventarioListContainer = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 1rem;

  padding-bottom: 3rem;
`;

export const HeaderTitlesList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props: IProps) => props.columns}, 1fr);
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 10px;
`;
export const TitleDescItem = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: ${themes.titleColor};
  font-weight: 600;
  background: #cdcffe;
  border-radius: 6px;
  box-shadow: 0px 3px 6px #00000029;
  text-align: center;
`;

export const CkeckContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 5px;
  background: #cdcffe;
  border-radius: 6px;
  grid-column: 1/3;
  padding-left: 8%;

  & label {
    margin-bottom: 0;
    font-size: 14px;
    color: #4e5c6e;
  }

  & input {
    width: 20px;
    height: 20px;
    appearance: none;
    --webkit-appearance: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s;
    outline: none;
    border: solid 1px #80808061;
    background: #f2f2f2;

    &:hover {
      background: #f2f2f2;
    }
    &:after {
      font-family: "Font Awesome 5 Free";
      content: "\f00c";
      font-weight: bold;
      font-size: 16px;
      color: #64e85b;
      display: none;
    }

    &:checked {
      background: #f2f2f2;
    }
    &:checked::after {
      display: block;
    }
  }
`;

export const TableInventarioList = styled.div`
  width: 100%;
  height: 75vh;
  overflow-y: scroll;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #ffffff;
  padding-left: 0;

  padding: 2px;
  padding: 5px;
  gap: 5px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  &::-webkit-scrollbar {
    width: ${themes.scrollBarWidth};
  }
  &::-webkit-scrollbar-thumb {
    background: ${themes.primaryColor};
    border-radius: ${themes.scrollBarRadius};
  }
`;

export const TableItemList = styled.div`
  width: 100%;
  height: auto;
  padding: 6px;
  display: grid;
  grid-template-columns: repeat(${(props: IProps) => props.columns}, 1fr);
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #8080808c;
  background: #f6f6f6;

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${themes.hoverColorGreen};
  }
`;

export const DescItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  font-weight: 400;
  text-align: center;
  font-size: 14px;
  word-wrap: break-word;
  margin-bottom: 0;
  gap: 10px;
`;

/***************BODEGAS LIST CONTAINER STYLES************/

export const BodegasListContainer = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 1rem;

  padding-bottom: 3rem; ;
`;

export const BoxColorContainer = styled.div`
  width: 13px;
  height: 36px;
  border-radius: 6px;
  box-shadow: 0px 0px 1px 1px #0c0c0c45;
  /* background: #fc85b9; */
`;

export const TextContainer = styled.p`
  width: auto;
  flex: 1;
  margin-bottom: 0;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
