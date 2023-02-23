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
  overflow: scroll;
  padding: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 650px) {
    padding: 10px;
    height: auto;
  }
`;

export const Box = styled.div`
  background: ${theme.box};
  width: 600px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  input {
    width: 95%;
  }
  h2 {
    margin: 0 10px;
    color: ${theme.color};
  }
  .link{
    width: 100%;
    margin: 10px 0;
  }
  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 5px;
    padding: 10px;
    textarea {
      margin: 0;
      min-width: 100%;
      max-width: 100%;
      min-height: 100px;
      max-height: 100px;
      &::-webkit-scrollbar{
        display: none;
      }
    }
    input {
      width: 30%;
      margin: 0;
    }
    button {
      width: 48%;
      margin: 0;
    }
    button:nth-child(1) {
      background: transparent;
      border: 1px solid ${theme.element};
    }
  }
  @media screen and (max-width: 650px) {
    width: 100%;
    padding: 15px;
    div {
      input {
        width: 100%;
        margin: 5px 0;
      }
    }
  }
`;
