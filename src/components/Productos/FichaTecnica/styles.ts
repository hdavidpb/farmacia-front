import { themes } from "../../../assets/themes/theme";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface IProps {
  background?: boolean;
  border?: boolean;
  principal?: boolean;
  gap?: string;
  downloadButton?: boolean;
  mesual?: boolean;
  header?: boolean;
  grid?: boolean;
  width?: string;
}

export const FichaContainer = styled.div`
  margin: auto;
  width: 100%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-column: 2/6;
  padding-right: 3rem;
  padding-left: 1rem;
  padding-top: 1rem;
  gap: 1rem;

  @media (max-width: 1375px) {
    padding-right: 1rem;
  }
  /* @media (min-width: 1629px) {
    width: 1329px;
    margin: auto;
    padding-right: 0;
    padding-left: 0;
  } */
`;

export const FichaContainerData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow-y: scroll;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 13px;
  }
  &::-webkit-scrollbar-thumb {
    background: #64748c;
    border-radius: ${themes.scrollBarRadius};
  }
`;

export const SecondaryFieldsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const FichaHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const TitleContainer = styled.h4`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 6px;
  margin-bottom: 0;
  gap: 10px;
`;
export const Title = styled.span`
  width: auto;
  font-size: 15px;
  padding: ${(props: IProps) => (props.principal ? "8px" : "0px")};
  border-radius: ${themes.radius};
  background: ${(props: IProps) =>
    props.principal ? themes.primaryColor : "#ffffff"};
  font-weight: ${(props: IProps) => (!props.principal ? "bold" : null)};
`;

export const EditAndSaveContainer = styled.button`
  border: none;
  width: auto;
  font-size: 15px;
  padding: 8px;
  border-radius: ${themes.radius};
  background: #4e5c6e;
  /* font-weight: ${(props: IProps) => (!props.principal ? "bold" : null)}; */
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & p {
    margin-bottom: 0;
  }
`;

export const InputEdit = styled.input`
  width: ${(props: IProps) => props.width};
  border: solid 1px gray;
  outline: none;
  padding: 3px;
  font-size: 13px;
  border-radius: 6px;
`;
export const TextAreaEdit = styled.textarea`
  width: ${(props: IProps) => props.width};
  height: 100px;
  border: solid 1px gray;
  outline: none;
  padding: 3px;
  font-size: 13px;
  border-radius: 6px;
`;

export const HeaderFieldsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.3rem;
  background: ${(props: IProps) =>
    props.background ? themes.backgroundCard : "#ffffff"};
  padding: 1rem;
  border-radius: ${themes.radius};
  border: ${(props: IProps) => (props.border ? "solid 2px #9A9FF9" : "none")};
`;
export const FieldContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & label {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 0;
  }
  & p {
    font-size: 13px;

    margin-bottom: 0;
  }
`;

export const SecondaryFieldContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: ${themes.primaryColor};
  border-radius: ${themes.radius};
  padding: 10px;
  & label {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 0;
  }
  & p {
    font-size: 13px;

    margin-bottom: 0;
  }
`;

/**************************PROVEEDORES TABLE CONTAINER********************/
export const TableTitle = styled.h4`
  width: 100%;
  padding: 6px;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
`;

export const ProveedoresContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const ProveedoresTableContainer = styled.div`
  width: 60%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
export const TableContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const HeaderTitles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

export const ProveedoresTableListContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  box-shadow: 0 0 2px 2px #0000001f;
  border-radius: 6px;
  &::-webkit-scrollbar {
    width: ${themes.scrollBarWidth};
  }
  &::-webkit-scrollbar-thumb {
    background: ${themes.primaryColor};
    border-radius: ${themes.scrollBarRadius};
  }
`;

export const LoaderBox = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProveedoresListItem = styled.div`
  width: 100%;
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;

  box-shadow: ${themes.shadowBlack};
  padding: 6px;
  gap: 10px;
  transition: all 0.4s;

  &:hover {
    background: #dcfff2;
  }
`;

export const DescItem = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  color: ${themes.titleColor};
  word-break: break-word;
  color: #4e5c6e;
  font-weight: 600;
  padding: 5px;
  font-size: 15px;
`;

export const DownloadContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
export const DownloadButton = styled.button`
  position: relative;
  width: 80%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: none;
  border-radius: ${themes.radius};
  background: ${(props: IProps) =>
    props.downloadButton === false ? "#ffffff" : "#4e5c6e"};
  padding: 3px;
  color: ${(props: IProps) =>
    props.downloadButton === false ? "#4e5c6e" : "#ffffff"};
  border: ${(props: IProps) =>
    props.downloadButton === false ? "dashed 1.5px #9A9FF9" : null};
  /* z-index: 100; */
  & p {
    flex: 1;
    margin-bottom: 0;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
  }
  & input {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    opacity: 0;
    cursor: pointer;
    /* z-index: 100; */
  }
`;
export const IconBox = styled.div`
  width: 19px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

/**************************VARIABLES DE TOTACIÓN********************/

export const RotacionVariablesContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const VariablesTitle = styled.h4`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${themes.primaryColor};
  color: ${themes.titleColor};
  margin-bottom: 0;
  font-weight: bold;
  font-size: 17px;
  border-radius: ${themes.radius};
`;

export const VariablesListContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  border: solid 1px #80808073;
  border-radius: ${themes.radius};
  padding: 5px;
`;
export const VariablesItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & label {
    width: 100%;
    text-align: center;
    font-size: 14px;
    margin-bottom: 0;
    font-weight: bold;
  }
  & p {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    margin-bottom: 0;
    text-align: center;
    word-break: break-word;
  }
`;

/*********************************EMBALAJES*******************************/

export const EmbalajesContainer = styled.div`
  width: 40%;
  height: 694px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const EmbajaleHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  & h4 {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const EmbalajeOptions = styled.div`
  position: relative;
  height: 29px;
  width: 40%;

  box-shadow: 0px 3px 6px #00000029;
  border-radius: 25px;
  background: #ffffff;
`;
export const EmbalajeButton = styled.button`
  position: absolute;
  width: 80%;
  height: 100%;
  border: none;
  border-radius: 25px;
  z-index: 10;
  background: #ffffff;
  color: ${themes.titleColor};
  right: 0;
  font-size: 14px;
`;

export const IconPlus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 50;
  color: ${themes.primaryColor};
  font-size: 30px;
`;

export const EmbalajeTableContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const EmbalajeHeaderTitles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const EmbalajeTableListContainer = styled.div`
  width: 100%;
  height: 85%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  box-shadow: ${themes.shadowBorder};
  gap: 10px;
  &::-webkit-scrollbar {
    width: ${themes.scrollBarWidth};
  }
  &::-webkit-scrollbar-thumb {
    background: ${themes.primaryColor};
    border-radius: ${themes.scrollBarRadius};
  }
`;
export const EmbalajesListItem = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;

  box-shadow: ${themes.shadowBlack};
  padding: 6px;
  gap: 15px;
`;
export const GeneralContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const RotacionesContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const RotacionTitle = styled.h4`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;
  font-size: 18px;
  margin-bottom: 0;
  color: #9a9ff9;
  font-weight: bold;
`;

export const RotacionesTableContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;
export const RotacionesGrid = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 10px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: #cdcffe;
  }
`;
export const RotacionesTitleItem = styled.div`
  width: 90px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: ${themes.primaryColor};
  border-radius: ${themes.radius};

  & p {
    width: 100%;
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 0;
  }
`;

export const RotacionesResultsContainer = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  border: solid 1px #dfdfdf;
  border-radius: ${themes.radius};
  overflow-x: scroll;
  gap: 10px;

  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: #cdcffe;
  }
`;
export const RotacionesResultsItem = styled.div`
  width: 90px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;

  border-radius: ${themes.radius};

  & p {
    width: ${(props: IProps) => (props.mesual ? "40px" : "100%")};
    padding: ${(props: IProps) => (props.mesual ? "4px" : "0")};
    border-radius: ${(props: IProps) => (props.mesual ? "4px" : "0")};
    background: ${(props: IProps) => (props.mesual ? "#96DBC1" : null)};
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 0;
    cursor: ${(props: IProps) => (props.mesual ? "pointer" : null)};
    transition: all 0.4s;

    &:hover {
      background: white;
      box-shadow: ${(props: IProps) =>
        props.mesual ? "2px 2px 2px #00000029;" : null};
    }
  }
`;

export const QRContainer = styled.div`
  width: 89px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  top: 0;
  right: 10%;

  & h4 {
    width: 100%;
    text-align: left;
    padding: 5px;
    margin-bottom: 0;
    font-size: 13px;
    color: #9a9ff9;
    font-weight: bold;
  }
`;

export const QRImage = styled.img`
  width: 100%;
  height: 100%;
  border: solid 1px #9a9ff9;
  border-radius: ${themes.radius};
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BackBtnContainer = styled(Link)`
  text-decoration: none;
  width: 125px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: ${themes.primaryColor};
  border-radius: ${themes.radius};
  box-shadow: ${themes.shadowBlack};
  color: black;
  font-size: 20px;
  & p {
    margin-bottom: 0;
    flex: 1;
    text-align: left;
    width: 80%;
    font-size: 16px;
  }
`;

/********************* MONTLY PURCHASES *********************/

export const ModalContainer = styled.div`
  /* position: absolute; */
  width: 100%;
  height: 100%;
  /* border-radius: 6px;
  box-shadow: 0px 0px 3px 3px #00000029;
  background: white;
  z-index: 100; */
`;

export const PurschasesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const HeaderTitleContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: ${(props: IProps) =>
    !props.header ? "solid 1px #808080c2" : ""};

  padding: 13px;
  color: #4e5c6e;
  font-size: 15px;
`;
export const TablePurchases = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: #cdcffe;
  }
`;

export const DescListTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-word;
  padding: 5px;
  font-weight: 600;
`;

export const DescTable = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-word;
  padding: 5px;
`;

export const FooterModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 6px;

  & button {
    border: none;
    background: #ff5a5a;
    border-radius: 6px;
    font-size: 14px;
    padding: 7px;
    box-shadow: 3px 2px 2px #00000029;
  }
`;

export const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
  position: absolute;
  z-index: 50;
`;

export const modalCustomStyles = {
  content: {
    width: "880px",
    height: "50vh",
    borderRadius: "6px",
    boxShadow: "0px 0px 3px 3px #00000029",
    background: "white",
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

export const EmbalajeFormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 7px;
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
    padding: 5px;
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

export const SelectContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const embalajeModalCustomStyles = {
  content: {
    width: "400px",
    height: "280px",
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
// <sc.QRContainer>
//         <h4>Código QR</h4>
//         <sc.QRImage src={QRimage} />
//       </sc.QRContainer>
