import { Link } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  background?: string;
}

export const DetailsContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const OrderNumberTitle = styled.h4`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cdcffe;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 600;
  color: #000000bf;
  border-radius: 6px;
`;
export const DescriptionsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  background: #ebecff;
  border-radius: 6px;
  padding: 8px;
`;

export const HeaderDescriptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  padding-left: 2rem;
`;

export const DescContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  padding: 5px;

  & h6 {
    margin-bottom: 0;
    font-size: 14px;
    width: auto;
    font-weight: bold;
  }
  & p {
    margin-bottom: 0;
    font-size: 14px;
    width: auto;
  }
`;

export const FooterDescriptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const TitlesTableContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 20px 0 20px;
`;
export const TitleDesc = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  color: #3f4a59;
  font-weight: 600;
  background: #cdcffe;
  border-radius: 6px;
  font-size: 15px;

  @media (max-width: 1300px) {
    font-size: 13px;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px 0 20px;
  overflow-y: scroll;
  box-shadow: 0px 3px 6px #00000029;
  &::-webkit-scrollbar {
    width: 9px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cdcffe;
    border-radius: 6px;
  }

  @media (max-width: 1300px) {
    height: 40%;
  }
`;

export const ListaContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 6px;
  border-bottom: solid 1px gray;
`;

export const DescList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  word-break: break-word;
  font-size: 15px;
  @media (max-width: 1300px) {
    font-size: 13px;
  }
`;

export const IconContainer = styled.div`
  padding: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff5a5a;
  color: white;
  font-size: 17px;
  border-radius: 6px;
  cursor: pointer;
  @media (max-width: 1300px) {
    font-size: 13px;
  }
`;

export const FooterOptionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding-right: 10px;
`;
export const BtnOption = styled.button`
  width: auto;
  padding: 7px;
  border: none;
  border-radius: 6px;
  background: ${(props: IProps) => props.background};
  font-size: 15px;
  transition: all 0.4s;

  &:focus {
    box-shadow: 0px 0px 2px 2px #cdcffe;
  }
`;

export const GoBackContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
export const BtnBack = styled(Link)`
  text-decoration: none;
  color: black;
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background: #cdcffe;
  font-size: 15px;
  transition: all 0.4s;

  &:focus {
    box-shadow: 0px 0px 2px 2px #cdcffe;
  }

  & p {
    flex: 1;
    margin-bottom: 0;
  }
`;
