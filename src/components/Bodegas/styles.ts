import { themes } from "../../assets/themes/theme";
import styled from "styled-components";

export const BodegasContainer = styled.div`
  width: 100%;
  height: 96vh;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2/6;
  padding-right: 6rem;
  /* gap: 1rem; */

  @media (max-width: 1375px) {
    padding-right: 1rem;
  }
`;

/***********************BODEGAS LIST STYLES ************************/

export const BodegasListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;
export const HeaderTitles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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

export const TableBodegasListContainer = styled.div`
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

  padding: 2px;
  /* box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.185); */
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

export const TableBodegasListItem = styled.div`
  width: 100%;
  height: auto;
  padding: 6px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;

  transition: all 0.3s;
`;

export const DescItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  font-weight: 600;
  & p {
    width: 100px;
    font-weight: 400;
    text-align: center;
    font-size: 14px;
    word-wrap: break-word;
    margin-bottom: 0;
  }
`;

export const FilterContainer = styled.div`
  width: 100%;
  padding: 6px;
  border-radius: 6px;
  background: #f3f4ff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const FilterBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  & p {
    margin-bottom: 0;
    text-align: center;
  }
  & button {
    width: 100px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    font-size: 15px;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 3px 3px 3px #0000004a;
  }
`;

export const InputFiltyerBox = styled.div`
  position: relative;
  width: 40%;
  padding: 8px;
  border: 1px solid #cccccc;
  background: #ffffff;
  border-radius: 6px;

  & input {
    width: 100%;
    height: 100%;
    padding-left: 20px;
    outline: none;
    border: none;
    text-align: left;
  }
`;
export const IconBox = styled.div`
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 5px;
  font-size: 25px;
  color: #cccccc;
`;
/******************************* SUPLIYING CONTAINER STYLESS ***************************/

export const SupliyingContainer = styled.div`
  width: 35%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 1rem;
  padding-top: 4rem;
  padding-bottom: 3rem;

  box-shadow: ${themes.shadowBorder};
  border-radius: ${themes.radius};
`;

export const DoughnutProgressContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.295);
  background: #ffffff;
  border-radius: 6px;
`;

export const DoughnutGraphContainer = styled.div`
  width: 300px;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1370px) {
    width: 220px;
  }
`;

export const DoughnutItemsTable = styled.div`
  width: 100%;
  height: auto;
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* flex-direction: column; */
  align-items: flex-start;
  flex-wrap: wrap;
  overflow: scroll;
  list-style: none;
  padding-left: 0;
  gap: 8px;
  margin-bottom: 0;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${themes.primaryColor};
    border-radius: ${themes.scrollBarRadius};
  }
`;
export const PointDescItem = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: cornflowerblue;
  background: rgb(100, 255, 255);
  box-shadow: 2px 2px 2px #0000008c;
`;
export const DescName = styled.div`
  width: 100px;
  /* width: 100%; */
  margin-bottom: 0;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
`;
export const DescPercentaje = styled.div`
  width: 30px;
  text-align: center;
  /* width: 100%; */
  margin-bottom: 0;
  font-size: 13px;
  font-weight: bold;
`;
