import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Block = styled.div`
  width: 100%;
  padding: 10px;
  .card {
    width: 95%;
    border-radius: 10px;
    background: ${theme.box};
    border: ${theme.border};
    padding-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
    margin: 20px auto;
    .user {
      width: 100%;
      border-radius: 10px;
      background: ${theme.element};
      border: ${theme.border};
      padding: 10px;
      margin: 25px;
      margin-bottom: 0px;
      &::first-letter {
        text-transform: uppercase;
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
    .tool {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      border-top: 1px solid ${theme.element};
      border-bottom: 1px solid ${theme.element};
      margin-top: 10px;
      justify-content: space-between;
      .count {
        margin: 0 10px;
        font-size: 20px;
        i {
          margin: 0 10px;
        }
      }
      div {
        display: flex;
        align-items: center;
      }
      .action {
        display: flex;
        align-items: center;
        i {
          margin-right: 10px;
        }
      }
    }
  }
  @media screen and (max-width: 650px) {
    .card {
      .tool {
        .action {
          button {
            padding: 5px;
            height: 40px;
            width: 40px;
            i {
              margin: 0;
            }
            span {
              display: none;
            }
            font-size: 15px;
          }
        }
      }
    }
  }
`;
