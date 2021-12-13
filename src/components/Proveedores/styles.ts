import { themes } from "@assets/themes/theme";
import styled from "styled-components";

interface IProps {
  color?: string;
  margin?: boolean;
  grid?: boolean;
  row?: boolean;
  absolute?: boolean;
}

export const ProveedoresContainer = styled.div`
  margin: auto;
  width: 100%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-column: 2/6;
  padding-right: 6rem;
  padding-top: 2rem;
  gap: 1rem;

  @media (max-width: 1375px) {
    padding-right: 1rem;
  }
`;

export const HeaderFiltersContainer = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #f3f4ff;
  padding: 19px;
  border-radius: 5px;
  @media (max-width: 1365px) {
    width: 70%;
  }
`;

export const FilterBoxContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;

  & h4 {
    position: absolute;
    top: -18px;
    width: 100%;
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    color: #4e5c6e;
  }
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
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const TableTitlesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 7px;
`;
export const TitleDescItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: ${themes.titleColor};
  font-weight: 600;
  background: #cdcffe;
  border-radius: 6px;
  box-shadow: 0px 3px 6px #00000029;
  text-align: center;
  padding: 8px;
`;

export const ProveedoresTableListContainer = styled.div`
  width: 100%;
  height: 70%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  box-shadow: 0px 3px 6px #00000029;
  gap: 8px;
  border-radius: 6px;
  &::-webkit-scrollbar {
    width: ${themes.scrollBarWidth};
  }
  &::-webkit-scrollbar-thumb {
    background: ${themes.primaryColor};
    border-radius: ${themes.scrollBarRadius};
  }

  @media (max-width: 1370px) {
    height: 65%;
  }
`;

export const ProveedoresListItem = styled.div`
  width: 100%;
  height: auto;
  padding: 7px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  color: ${themes.titleColor};
  transition: all 0.4s;
  border-bottom: solid 1px #8080807a;
  cursor: pointer;
  gap: 1rem;
  &:hover {
    background: ${themes.hoverColorGreen};
    color: ${themes.titleColor};
    font-weight: bold;
  }
`;

export const DescItem = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  text-align: center;
  font-size: 14px;
  word-wrap: break-word;
  margin-bottom: 0;
  word-break: break-word;
  hyphens: auto;
  color: #617187;
  font-weight: 600;
`;

export const FooterTable = styled.span`
  width: 100%;
  padding: 5px;
  font-size: 14px;
  text-align: right;
  color: #617187;
  font-weight: 600;
`;

/**************** DETAILS *********************/

export const HeaderDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${(props: IProps) => (props.margin ? "2rem" : "0")};
`;

export const GobackContainer = styled.button`
  padding: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 6px;
  border: none;
  background: ${(props: IProps) => props.color};
  box-shadow: 0px 3px 6px #00000029;

  & h6 {
    flex: 1;
    margin-bottom: 0;
    font-size: 15px;
  }
`;

export const IconBackContainer = styled.div`
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
`;

export const ProviderDescContainer = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: #f3f4ff;
  border-radius: 6px;
  padding: 10px;
`;

export const DescDetailContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  & h6 {
    font-size: 15px;
    margin-bottom: 0;
    color: #9a9ff9;
    font-weight: 600;
  }

  & p {
    flex: 1;
    font-size: 15px;
    margin-bottom: 0;
    word-break: break-word;
  }
`;

export const TableDescContainer = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  @media (max-width: 1350px) {
    height: 60vh;
  }
`;

export const MedicamentsTableTitle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 7px;
`;

export const MedicamentsTableContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  box-shadow: 0px 3px 6px #00000029;

  border-radius: 6px;
  gap: 8px;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${themes.primaryColor};
    border-radius: ${themes.scrollBarRadius};
  }
`;

export const MedicamentsDescItem = styled.div`
  width: 100%;
  height: auto;
  padding: 7px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-content: center;
  align-items: center;

  transition: all 0.3s;

  color: ${themes.titleColor};
  transition: all 0.4s;

  border-bottom: solid 1px #80808096;
  gap: 1rem;
  &:hover {
    background: ${themes.hoverColorGreen};
    color: ${themes.titleColor};
    font-weight: bold;
  }
`;

/**** CONTRACTS **********/

export const ContratsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 7px;
`;

export const FieldsContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  gap: 19px;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border: none;
    font-size: 14px;
    padding: 8px;
    border-radius: 6px;
    background: #4e5c6e;
    color: #cdcffe;
    font-weight: 600;
    grid-column: 1/3;
  }
`;

export const SecondaryFieldsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 10px;
  grid-column: 1/3;
`;

export const inputsContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: ${({ row }: IProps) => (row ? "row-reverse" : "column")};
  justify-content: center;
  align-items: center;
  gap: 2px;
  grid-column: ${(props: IProps) => (props.grid ? "1/3" : "0")};
  & h6 {
    position: ${({ absolute }: IProps) => (absolute ? "absolute" : "statick")};
    top: ${({ absolute }: IProps) => (absolute ? "-18px" : "0")};
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
    padding: 7px;
    border-radius: 6px;
  }
`;

export const CalculingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const SecondaryIconContainer = styled.div`
  width: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  & h6 {
    margin-bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #4e5c6e;
    font-size: 14px;
  }

  & span {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background: #4e5c6e;
    color: #ffffff;
    font-size: 14px;
  }
`;

export const CalculatePromBtn = styled.div`
  width: 100%;
  height: 40px;
  border: none;
  color: #ffffff;
  background: #4e5c6e;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
`;

export const ErrorMsj = styled.span`
  width: auto;
  font-size: 12px;
  bottom: -17px;
  color: red;
  position: absolute;
`;

export const modalCustomStyles = {
  content: {
    width: "577px",

    borderRadius: "6px",
    boxShadow: "0px 0px 3px 3px #00000029",
    background: "#CDCFFE",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    transition: "all .4s",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.432)",
  },
};
