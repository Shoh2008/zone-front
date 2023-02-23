import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Block = styled.div`
  width: 100%;
  .line {
    display: flex;
    padding: 15px 30px;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    height: 100px;
    margin: 30px;
    border-radius: 10px;
    cursor: pointer;
    background: ${theme.box};
  }
  .border {
    border: ${theme.border};
  }
  .bronza {
    border: 2px solid #412409;
  }
  .silver {
    border: 2px solid silver;
  }
  .gold {
    border: 2px solid gold;
  }
  @media screen and (max-width: 750px) {
  }
`;
