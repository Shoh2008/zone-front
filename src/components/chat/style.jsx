import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Block = styled.div`
  background: ${theme.back};
  transition: 0.5s;
  .messages {
    height: calc(100vh - 140px);
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    align-content: baseline;
    padding: 5px 0;
    .line {
      width: 100%;
      display: flex;
    }
    .message {
      justify-content: end;
      width: 60%;
      padding: 10px;
      margin: 5px 10px;
      background: ${theme.box};
      border: ${theme.border};
      backdrop-filter: blur(30px);
      height: auto;
      color: ${theme.color};
      font-size: 20px;
      align-items: baseline;
      border-radius: 20px;
      p {
        color: ${theme.color};
        font-size: 13px;
        margin: 0;
        &::first-letter {
          text-transform: uppercase;
        }
      }
      img,
      .ant-image-mask {
        border-radius: 10px;
      }
      .ant-image-mask-info {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
      }
      .title {
        width: 100%;
        border-radius: 10px;
        background: ${theme.element};
        border: ${theme.border};
        height: 35px;
        margin: 5px auto;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &::first-letter {
          text-transform: uppercase;
        }
        .x-delete {
          width: 20px;
          height: 20px;
          margin: 0;
          padding: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: ${theme.box};
        }
      }
    }
    .left {
      justify-content: flex-start;
    }
    .right {
      justify-content: end;
    }
    .left .message{
      border-top-left-radius: 0;
      text-align: left;
    }
    .right .message{
      border-top-right-radius: 0;
      text-align: right;
    }
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
  .line-bottom {
    height: 70px;
    display: flex;
    padding: 0 10px;
    align-items: center;
    border-top: ${theme.border};
    input {
      width: 100%;
      margin: 0 5px;
    }
  }
  @media screen and (max-width: 650px) {
    width: 100% !important;
    .messages {
      .message {
        width: 80%;
      }
    }
  }
`;
