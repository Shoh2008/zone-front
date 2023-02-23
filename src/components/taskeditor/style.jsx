import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Block = styled.div`
  width: 100%;
  padding: 40px;
  .card {
    width: 100%;
    border-radius: 10px;
    background: ${theme.box};
    border: ${theme.border};
    padding-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
    textarea {
      max-width: 95%;
      min-width: 95%;
      max-height: 300px;
      min-height: 250px;
      height: 300px;
      &::-webkit-scrollbar {
        height: 0;
        width: 6px;
        background: ${theme.box};
      }
      &::-webkit-scrollbar-thumb {
        background: ${theme.element};
        border-radius: 6px;
      }
    }
    .task {
      border: ${theme.border};
      width: 95%;
      padding: 10px;
      margin: 20px 0;
      border-radius: 10px;
      background: ${theme.back};
    }
    .line {
      border: ${theme.border};
      width: 95%;
      padding: 10px;
      margin: 10px 0;
      border-radius: 10px;
    }
    input:nth-child(2) {
      border: 1px solid ${theme.element};
    }
    input:nth-child(3) {
      border: 1px solid ${theme.element};
    }
  }
  button.createbtn {
    width: 100%;
    margin: 20px auto;
  }
  @media screen and (max-width: 750px) {
  }
`;
