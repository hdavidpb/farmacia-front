import { themes } from "./assets/themes/theme";
import styled from "styled-components";

interface IProps {
  heightWidth?: string;
}

export const FarmaciaContainer = styled.div`
  margin: auto;
  width: 100%;
  height: 96vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.692);

  @media (min-width: 1929px) {
    width: 1629px;
    margin: auto;
  }
`;
export const SmallIconCaontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: IProps) => (props.heightWidth ? props.heightWidth : "20px")};
  height: ${(props: IProps) =>
    props.heightWidth ? props.heightWidth : "20px"};
`;
