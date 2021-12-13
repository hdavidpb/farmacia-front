import { themes } from "../../assets/themes/theme";
import styled from "styled-components";

interface IProps {
  view?: boolean;
  initialDate?: string;
}

export const MovimientosContainer = styled.div`
  width: 100%;
  height: 96vh;
  display: grid;
  grid-template-columns: 3fr 2fr;
  margin: auto;

  grid-column: 2/6;
  padding-right: 2rem;
  padding-top: 3.2rem;
  @media (max-width: 1375px) {
    padding-right: 1rem;
  }
`;
export const MovimientosComponentsContainer = styled.div`
  width: 90%;
  /* height: 93%; */

  display: flex;
  flex-direction: column;
  justify-content: flex-star;
  gap: 1rem;
`;

export const MovContainer = styled.div`
  width: 100%;
  height: 93%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

export const MovBox = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const TitleHeader = styled.h3`
  width: 100%;
  font-size: 20px;
  margin-bottom: 0;
  padding: 6px;
  background: #ebecff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const TableTitles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 1.5rem;
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
`;

export const TableContainer = styled.div`
  width: 100%;
  height: 68%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: #cdcffe;
  }
  padding: 5px;
`;

export const FooterTable = styled.span`
  width: 100%;
  text-align: right;
  padding: 6px;
  font-size: 14px;
  color: #3f4a59;
`;

export const ListMovContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 6px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
`;
export const ListDescMov = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-word;
  flex-wrap: wrap;
  margin-bottom: 0;
  padding: 5px;
  font-size: 14px;
`;

/*****************************Switch Buttons Styles*********************************/
export const SwitchButtonsContainer = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: ${themes.radius}; */
  /* box-shadow: ${themes.shadowBlack}; */
  & button:first-child {
    border-radius: 6px 0 0 6px;
  }
  & button:last-child {
    border-radius: 0 6px 6px 0;
  }
`;

export const ButtonSwitch = styled.button`
  width: 50%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  /* border-radius: ${themes.radius}; */
  transition: all 0.6s;

  background: ${(props: IProps) =>
    props.view ? themes.selectedColor : themes.primaryColor};
  /* &:focus {
    background: ${themes.selectedColor};
    color: white;
  } */
`;

/********** Filter Box *********************/

export const FilterContainer = styled.div`
  margin-top: 4px;
  width: 100%;
  height: 45px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  & h4 {
    position: absolute;
    top: -17px;
    font-size: 14px;
    margin-bottom: 0;
    font-weight: bold;
  }
  & input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 3px;
    border-radius: ${themes.radius};
    box-shadow: ${themes.shadowBorder};
    outline: none;
    color: ${themes.selectedColor};
    font-weight: bold;
    background: #ffffff;
    font-size: 14px;
  }
  & button {
    border: none;
    border-radius: 6px;
    width: 90%;
    height: 100%;
    background: #cdcffe 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    color: #3f4a59;
    font-size: 14px;
    transition: all 0.4s;
    &:hover {
      background: ${({ initialDate }: IProps) =>
        initialDate ? "#4e5c6e" : ""};
      color: ${({ initialDate }: IProps) => (initialDate ? "#ebecff" : "")};
    }
  }
`;

/*******TABLE LIST*************/

export const HeaderTitleTable = styled.div`
  width: 100%;
  height: 46px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const TitleItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${themes.radius};
  color: ${themes.titleColor};
  background: ${themes.primaryColor};
  font-weight: bold;
`;

export const EntradasSalidasContainer = styled.div`
  width: 100%;
  height: 58vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
export const ListContainer = styled.div`
  width: 100%;
  height: 60vh;
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
  gap: 10px;
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

export const ListItemContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 6px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  box-shadow: ${themes.shadowBlack};
  border-radius: ${themes.radius};
  transition: all 0.3s;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background: #dcfff2;
  }
`;

export const ListItem = styled.p`
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

export const TotalContainer = styled.div`
  width: 100%;
  height: 46px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
`;

export const TotalItem = styled.p`
  width: 100%;
  height: 100%;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
