import { themes } from "../../assets/themes/theme";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface IProps {
  add?: boolean;
  status?: string;
}

export const OrdenesContainer = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-column: 2/6;
  padding-right: 4rem;
  padding-top: 3rem;
  gap: 1rem;

  @media (max-width: 1375px) {
    padding-right: 1rem;
  }
`;

export const BtnsContainer = styled.div`
  width: 600px;
  height: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  border-radius: ${themes.radius};
  box-shadow: ${themes.shadowBlack};
`;

export const BtnItem = styled(Link)`
  text-decoration: none;

  width: 100%;
  height: 100%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-right: solid 1px gray;
  transition: all 0.4s;
  color: black;

  &:last-child {
    border-right: none;
    border-radius: 0px 6px 6px 0px;
  }
  &:first-child {
    border-radius: 6px 0px 0px 6px;
  }

  &:hover {
    background: ${themes.primaryColor};
    color: black;
  }
`;

export const SugeridosContainer = styled.div`
  width: 90%;
  height: 77vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* border: solid 1px red; */
`;

export const HeaderSugeridos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const ListaCompraBtnContainer = styled(Link)`
  position: relative;
  text-decoration: none;
  width: auto;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background: ${themes.primaryColor};
  border-radius: ${themes.radius};
  box-shadow: ${themes.shadowBlack};
  padding-right: 8px;
  font-size: 20px;
  color: black;

  & h4 {
    width: 100%;
    margin-bottom: 0;
    flex: 1;
    text-align: left;
    font-size: 14px;
  }
`;

export const BubbleContainer = styled.div`
  top: -6px;
  right: -10px;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #9a9ff9;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: bold;
`;
export const IconContainer = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HistorialSugeridosContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;

  & h4 {
    margin-bottom: 0;
    width: 100%;
    text-align: left;
    font-size: 15px;
  }
`;

export const FieldsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  border: solid 1px #cccccc;
  border-radius: ${themes.radius};

  & input {
    width: 100%;
    height: 100%;
    outline: none;
    border-radius: ${themes.radius};
    z-index: 20;
    padding-left: 26px;
    padding-right: 15px;
    border: none;
    background: #ffffff;
  }
`;
export const IconInputsBox = styled.div`
  position: absolute;
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const DownloadContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  border: solid 1px #cccccc;
  border-radius: ${themes.radius};
  background: #4e5c6e;
  color: #ffffff;
  font-size: 17px;
  & button {
    width: 100%;
    height: 100%;
    outline: none;
    border-radius: ${themes.radius};
    z-index: 20;
    padding-left: 26px;
    padding-right: 15px;
    border: none;
    background: transparent;
    color: #ffffff;
    font-size: 15px;
  }
`;

export const SugeridosTableContainer = styled.div`
  width: 100%;
  height: 87%;

  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;

  gap: 8px;
  border-radius: 6px;
  &::-webkit-scrollbar {
    width: ${themes.scrollBarWidth};
  }
  &::-webkit-scrollbar-thumb {
    background: ${themes.primaryColor};
    border-radius: ${themes.scrollBarRadius};
  }
`;

export const SegeridosListItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
  padding: 12px;
  border-radius: ${themes.radius};
`;

export const ItemsOne = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
`;

export const ItemsTwo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  padding-right: 20px;
`;

export const DescContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  & h6 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 0;
  }

  & p {
    font-size: 14px;
    margin-bottom: 0;
  }
`;

export const DescontainerTwo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & h6 {
    color: #9a9ff9;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 0;
    width: 90px;
    text-align: left;
  }

  & p {
    width: 100px;

    font-size: 14px;
    margin-bottom: 0;
    text-align: left;
  }
`;

export const SegerencyNumberBox = styled.span`
  width: 40px;
  height: 30px;

  background: #ebecff;
  font-size: 13px;
  margin-bottom: 0;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: ${themes.radius};
`;

export const Button = styled.button`
  width: 100px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: ${themes.radius};
  box-shadow: ${themes.shadowBlack};
  background: ${(props: IProps) => (props.add ? "#86E97F" : "#FF5A5A")};
  color: ${(props: IProps) => (props.add ? "black" : "#FFFFFF")}; ;
`;

/**********************ORDENES TABLE*************************************************/
export const OrdenesTableContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 5px;
`;

export const TableTitlesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 20px;
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

export const TableContainer = styled.div`
  width: 100%;
  height: 95%;

  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;

  border-radius: ${themes.radius};
  gap: 8px;
  &::-webkit-scrollbar {
    width: ${themes.scrollBarWidth};
  }
  &::-webkit-scrollbar-thumb {
    background: ${themes.primaryColor};
    border-radius: ${themes.scrollBarRadius};
  }
`;

export const ListItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
  padding: 12px;
  border-radius: ${themes.radius};
  text-decoration: none;
  color: black;
  gap: 1rem;
  cursor: pointer;
`;

export const DescItem = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;

  font-weight: 400;
  text-align: center;
  font-size: 14px;
  word-wrap: break-word;
  margin-bottom: 0;
`;
export const StateCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background: ${(props: IProps) =>
    props.status === "ATRASADA"
      ? "#131AE3"
      : props.status === "RECHAZADA" || props.status === "CANCELADA"
      ? "#FF0000"
      : props.status === "RECIBIDO PARCIALMENTE"
      ? "#F3A949"
      : props.status === "ENVIADA"
      ? "#86E97F"
      : props.status === "APROBADA"
      ? "#6DD7FF"
      : props.status === "PENDIENTE"
      ? "#9779FE"
      : props.status === "RECIBIDO"
      ? "#96D657"
      : ""};
  /* background: greenyellow; */
`;

/***********************LISTA COMPRAS**********************/

export const TitleTable = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${themes.radius};
  background: ${themes.primaryColor};
`;

export const TitleContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 30px;

  & p {
    flex: 1;
    margin-bottom: 0;
    font-size: 17px;
  }
`;

export const ComprasContainer = styled.div`
  width: 100%;
  height: 70%;

  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  box-shadow: ${themes.shadowBorder};
  border-radius: ${themes.radius};
  gap: 8px;
  &::-webkit-scrollbar {
    width: ${themes.scrollBarWidth};
  }
  &::-webkit-scrollbar-thumb {
    background: ${themes.primaryColor};
    border-radius: ${themes.scrollBarRadius};
  }
`;

export const ComprasListItems = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 90px;
  justify-content: center;
  align-items: center;
  box-shadow: ${themes.shadowBorder};
  padding: 12px;
  border-radius: ${themes.radius};
`;

export const ProveedorItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescsItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const ProveedorDescItem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebecff;
  border-radius: ${themes.radius};
  gap: 16px;

  & h6 {
    font-size: 14px;
    margin-bottom: 0;
    color: #9a9ff9;
    font-weight: bold;
  }
  & p {
    font-size: 14px;
    margin-bottom: 0;
    color: black;
  }
`;

export const PiceItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const PriceItemOne = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & h6 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 0;
    color: #9a9ff9;
  }

  & p {
    font-size: 14px;
    margin-bottom: 0;
  }
  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    height: 30px;
    width: 30px;
    color: #ffffff;
    background: #f35959;
    border: none;
    border-radius: ${themes.radius};
    box-shadow: ${themes.shadowBlack};
  }
`;

export const CantidadItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & h6 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 0;
    color: #9a9ff9;
  }

  & p {
    font-size: 14px;
    padding: 5px;
    margin-bottom: 0;
    background: #ebecff;
    border-radius: ${themes.radius};
  }
`;

export const GenerateOrderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 55px;
  padding: 5px;
  cursor: pointer;

  & h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 100%;
    font-size: 15px;
    text-align: center;
    margin-bottom: 0;
    background: ${themes.primaryColor};
    border-radius: ${themes.radius};
    box-shadow: ${themes.shadowBlack};
  }
`;

export const BackBtnContainer = styled(Link)`
  position: absolute;
  top: 15px;
  left: 0;
  text-decoration: none;
  width: 125px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${themes.primaryColor};
  border-radius: ${themes.radius};
  box-shadow: ${themes.shadowBlack};
  color: black;
  font-size: 20px;
  & p {
    margin-bottom: 0;
    flex: 1;
    text-align: left;

    font-size: 16px;
    text-align: center;
  }
`;

export const OrdersFiltersContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: #f3f4ff;
  padding: 19px;
`;

export const FilterFieldsContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & h4 {
    position: absolute;
    top: -18px;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
  }
  & input {
    outline: none;
    width: 100%;
    padding: 5px;
    border: solid 1px #cccccc;
    border-radius: 4px;
    background: #ffffff;
  }
`;

export const BtnSearch = styled.button`
  margin: auto;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 6px;
  background: #4e5c6e;
  color: #ffffff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    width: 100%;
    height: 100%;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }
`;

export const IconSearchContainer = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: -1px;
  left: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const FooteerBtnsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px;
  gap: 1rem;
`;

export const BtnsOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const ButtonOption = styled.button`
  border: none;
`;

export const Registers = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #4e5c6e;
`;
