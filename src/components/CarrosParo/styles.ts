import { Link } from "react-router-dom";
import styled from "styled-components";
import { themes } from "../../assets/themes/theme";

interface IProps {
  dark?: boolean;
  columns?: string;
  statusColor?: boolean;
  chek?: boolean;
  locked?: boolean;
  autoWidth?: boolean;
}

export const CarrosParoContainer = styled.div`
  margin: auto;
  width: 100%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-column: 2/6;
  padding-right: 6rem;
  padding-top: 4rem;
  gap: 1rem;

  @media (max-width: 1375px) {
    padding-right: 1rem;
  }
`;

export const CarrosDetailsContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  gap: 3.3rem;
`;
export const CarrosTableContainer = styled.div`
  width: 100%;
  height: 72vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
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

  &:first-child {
    border-radius: 6px 0 0 6px;
  }
  &:last-child {
    border-radius: 0 6px 6px 0;
  }

  &:hover {
    background: ${themes.primaryColor};
    color: black;
  }

  &:last-child {
    border-right: none;
  }
`;

export const TableTitlesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    ${(props: IProps) => (props.columns ? props.columns : "3")},
    1fr
  );
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 7px;
`;
export const TitleDescItem = styled.div`
  width: ${({ autoWidth }: IProps) => (autoWidth ? "auto" : "90%")};
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: ${(props: IProps) =>
    props.dark ? themes.primaryColor : themes.titleColor};
  font-weight: 600;
  background: ${(props: IProps) => (props.dark ? "#4E5C6E" : "#cdcffe")};
  border-radius: 6px;
  box-shadow: 0px 3px 6px #00000029;
  text-align: center;
  cursor: ${(props: IProps) => props.dark && "pointer"};
  padding: ${({ autoWidth }: IProps) => (autoWidth ? "5px" : "0")}; ;
`;

export const TableContainer = styled.div`
  width: 100%;
  height: ${(props: IProps) => (props.columns ? "60%" : "80%")};

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
  cursor: pointer;
  text-decoration: none;
  color: #617187;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    ${(props: IProps) => (props.columns ? props.columns : "3")},
    1fr
  );
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
  padding: 12px;
  border-radius: ${themes.radius};
  gap: 14px;
  transition: all 0.4s;

  &:hover {
    color: #617187;
    background: #dcfff2;
  }
`;

export const CarListItem = styled.div`
  color: #617187;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    ${(props: IProps) => (props.columns ? props.columns : "3")},
    1fr
  );
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #00000029;
  /* box-shadow: 0px 3px 6px #00000029; */
  padding: 12px;
  border-radius: ${themes.radius};
  gap: 14px;
  transition: all 0.4s ease;
  cursor: pointer;
  &:hover {
    background: #dcfff2;
  }
`;

export const DescItem = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;

  font-weight: 600;
  text-align: center;
  font-size: 14px;
  word-wrap: break-word;
  margin-bottom: 0;
  transition: all 0.4s;
  & button {
    font-size: 13px;
    width: 72%;
    border: none;
    border-radius: ${themes.radius};
    padding: 6px;
    background: #4e5c6e;
    color: #ffffff;
    box-shadow: ${themes.shadowBlack};
  }
`;

export const HeaderMessage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: ${themes.radius};
  box-shadow: ${themes.shadowBlack};
  background: #eeeeff;
  gap: 5px;

  & h4 {
    width: 80%;
    flex: 1;
    color: #9a9ff9;
    background: #eeeeff;
    font-size: 16px;
    text-align: center;
    margin-bottom: 0;
    font-weight: bold;
  }
`;

export const CheckAllContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & label {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4e5c6e;
  }

  & input {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DescStateItem = styled.div`
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
  gap: 30px;

  & p {
    width: 80%;
    flex: 1;
    word-wrap: break-word;
    margin-bottom: 0;
    text-align: center;
    font-weight: 600;
  }

  & p::before {
    position: relative;
    display: inline-block;
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 50%;
    box-shadow: ${themes.shadowBlack};
    background: #ff3d3d;
    top: 2px;
    left: -3%;
  }
`;
export const CircleStateColor = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  box-shadow: ${themes.shadowBlack};
  background: #ff3d3d;
`;
/*********************CONTAIN DETAILS ***************/

export const ContainsDetailsContainer = styled.div`
  width: 100%;
  height: 72vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

export const TypeOptionsContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  padding: 5px;
  color: #ffffff;
`;

export const ArrowIconContainer = styled.button`
  border: none;
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${themes.radius};
  background: #9a9ff9;
  font-size: 1.5rem;
  cursor: pointer;
  color: #ffffff;
`;

export const Label = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${themes.radius};
  background: #9a9ff9;
  padding: 5px;
`;

export const ContainsDetailsTable = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 3px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  box-shadow: 0px 3px 6px #00000029;
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

export const ContainsDetailsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  /* box-shadow: ${themes.shadowBorder}; */
  border-bottom: solid 1px #00000029;
  padding: 12px;
  border-radius: ${themes.radius};
  gap: 14px;
`;

export const HeaderFilterContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  align-items: center;
  padding: 7px;
  gap: 10px;
  background: #f3f4ff;
`;
export const FielContainer = styled.div`
  width: 100%;
  height: 38px;

  border-radius: 4px;

  & h6 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 13px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  & input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding-left: 25px;
    border-radius: 4px;
    border: solid 1px #8080806b;
  }
`;
export const IconContainer = styled.div`
  top: 4px;
  position: absolute;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  color: gray;
`;

export const BtnClear = styled.button`
  width: 100%;
  padding: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/3;
  border-radius: 6px;
  box-shadow: 1px 1px 1px #2125295e;
  transition: all 0.4s;

  &:hover {
    background: #d5d6f6;
  }
`;

/******************ALERT DETAILS****************************************/

export const HeaderDetails = styled.div`
  width: 100%;
  height: 55px;
  display: grid;
  grid-template-columns: 30px 70% auto;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px;
`;
export const IconHeaderBox = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  background: #cdcffe 0% 0% no-repeat padding-box;
  color: #4e5c6e;
  font-weight: bold;
  cursor: pointer;
`;
export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  padding: 5px;
`;

export const DescInfo = styled.p`
  margin-bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-word;
  font-size: 14px;

  &::before {
    content: "";
    display: ${({ statusColor }: IProps) =>
      statusColor ? "inline-block" : "none"};

    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: red;
    margin-right: 5px;
  }
`;

export const LockContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & input {
    width: 100%;
    flex: 1;
    padding: 8px;
    border: 1px solid #afafaf;
    outline: none;
    border-radius: 4px;
  }
`;

export const IConLockContainer = styled.button`
  border: none;
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  background: ${({ locked }: IProps) => (locked ? "#86E97F" : "#bfbfbf")};
  color: ${({ locked }: IProps) => (locked ? "black" : "#ffffff")};

  cursor: pointer;
`;

export const FooterTablesContainer = styled.div`
  width: 100%;
  height: 67vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const TablesMessage = styled.div`
  width: 60%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #eeeeff;
  color: #888efc;
  font-size: 14px;
`;

export const TablesContainer = styled.div`
  width: 100%;
  height: 85%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  overflow-y: scroll;
  padding: 18px;
  &::-webkit-scrollbar {
    width: ${themes.scrollBarWidth};
  }
  &::-webkit-scrollbar-thumb {
    background: ${themes.primaryColor};
    border-radius: 6px;
  }
`;

export const TableDetailContainer = styled.div`
  margin: auto;
  width: 88%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  border: 1px solid #c1c1c1;
  border-radius: 4px;

  &::-webkit-scrollbar {
    width: 1px;
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: red;
  }
`;
export const TitleTableDetail = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 2fr 60px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 8px;
  border-bottom: 0.6px solid #c1c1c1;

  & p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 0;
    color: #9a9ff9;
    word-break: break-word;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const CheckContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 2px;
  border-radius: 7px;
  background: ${({ chek }: IProps) => (chek ? "#86e97f" : "#C7C7C7")};
  & p {
    margin-bottom: 0;
    font-size: 13px;
    color: #3f4a59;
    flex: 0%;
  }
`;
export const CkeckIcon = styled.div`
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
`;

export const TableListContainer = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #9a9ff9;
  }
`;

export const ListItemDesc = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 60px;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  padding: 8px;
  border-bottom: 0.6px solid #c1c1c1;
  & p {
    text-transform: lowercase;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: 0;
    color: #4e5c6e;
    word-break: break-word;
    font-size: 13px;
  }

  & h6 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    width: 100%;
    font-weight: 400;
    padding: 5px;
    background: #cdcffe 0% 0% no-repeat padding-box;
    border-radius: 4px;
    font-size: 13px;
  }
`;
/*********************** REACT SELECT *********************************/

export const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
};
