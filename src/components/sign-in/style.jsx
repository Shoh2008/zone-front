import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Block = styled.div`
  width: 100%;
  height: 100vh;
  background: ${theme.back};
  color: ${theme.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  background: ${theme.box};
  width: 300px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  input {
    width: 95%;
  }
  h2 {
    margin: 10px;
    color: ${theme.color};
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    button {
      width: 100%;
    }
    button:nth-child(1) {
      background: transparent;
      border: 1px solid ${theme.element};
    }
  }
  @media screen and (max-width: 650px) {
    width: 90%;
    padding: 30px 20px;
  }
`;
