import { themes } from "@assets/themes/theme";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductosContainer = styled.div`
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

export const FilterContainer = styled.div`
  width: 80%;
  height: 90px;
  background: ${themes.secondaryColor};
  border-radius: ${themes.radius};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px;
`;

export const InputsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & input {
    width: 100%;
    height: 100%;
    outline: none;
    padding: 4.8px;
    border: solid 1px #0000002b;
    border-radius: 4px;
  }
`;
export const ClearInputsContainer = styled.div`
  width: 80%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  border-radius: 6px;
  background: #ffffff;
  cursor: pointer;
  box-shadow: 0 0 1px 1px #0000002b;
  transition: all 0.4s;
  /* grid-column: 1/4; */
  &:hover {
    background: #4d58e82e;
  }
`;

export const Label = styled.label`
  width: 100%;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  position: absolute;
  top: -20px;
`;
export const SelectContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/******************TABLE COTAINER********************/

export const TableContainer = styled.div`
  width: 100%;
  height: 76%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 1rem;

  padding-left: 1rem;
  padding-right: 1rem;
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
export const TableListContainer = styled.div`
  width: 100%;
  height: 65vh;
  overflow-y: scroll;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #ffffff;
  padding-left: 0;
  gap: 10px;

  padding: 5px;
  border-radius: 6px;

  &::-webkit-scrollbar {
    width: ${themes.scrollBarWidth};
  }
  &::-webkit-scrollbar-thumb {
    background: ${themes.primaryColor};
    border-radius: ${themes.scrollBarRadius};
  }
`;
export const TableListItem = styled.div`
  text-decoration: none;
  width: 100%;
  height: auto;
  padding: 6px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  color: ${themes.titleColor};
  transition: all 0.4s;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;

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
  padding: 6px;

  font-weight: 400;
  text-align: center;
  font-size: 14px;
  word-wrap: break-word;
  margin-bottom: 0;
  color: #617187;
  font-weight: 600;
`;

export const SelectImputContainer = styled.div`
  width: 100%;
  height: 40px;
`;

// .input__text {
//   width: 100%;
//   height: 38px;
//   border-radius: 5px;
//   border: none;
//   border: 1px solid #cccccc;
//   padding-left: 6px;
// }
