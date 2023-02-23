import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Block = styled.div`
  height: calc(100vh - 70px);
  padding: 0 10px;
  width: 100%;
  display: flex;
  .box:nth-child(1) {
    width: 70%;
    .user {
      display: flex;
      align-items: center;
      .image {
        border-radius: 50%;
        border: 0.3px solid #1e1e1e;
        border-left: ${theme.border};
        height: 250px;
        width: 250px;
        min-height: 250px;
        min-width: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        position: relative;
        margin: 20px;
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          position: absolute;
          border: 0.3px solid #1e1e1e;
        }
        div.first {
          height: 230px;
          width: 230px;
          border-top: ${theme.border};
        }
        div.second {
          height: 210px;
          width: 210px;
          border-right: ${theme.border};
        }
        div.third {
          height: 190px;
          width: 190px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: ${theme.border};
          h1 {
            text-transform: uppercase;
            font-size: 150px;
          }
        }
      }
      .line {
        a {
          text-decoration: none;
          color: ${theme.element};
        }
      }
    }
    .block {
      .links {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        a {
          color: ${theme.element};
          text-decoration: none;
          font-size: 25px;
          margin: 0 15px;
        }
      }
      .about {
        padding: 20px;
        max-height: 170px;
        margin: 10px 20px;
        border-radius: 10px;
        overflow: scroll;
        border: ${theme.border};
        &::-webkit-scrollbar {
          height: 0;
          width: 6px;
          background: ${theme.box};
        }
        &::-webkit-scrollbar-thumb {
          background: ${theme.element};
          border-radius: 6px;
        }
        h3 {
          overflow-wrap: break-word;
        }
      }
    }
  }
  .box:nth-child(2) {
    width: 30%;
    display: block;
    justify-content: center;
    align-items: center;
    margin: auto;
    .card:nth-child(2) {
      cursor: pointer;
    }
    .card {
      height: 150px;
      width: 150px;
      margin: 10px auto;
      background: ${theme.box};
      border-radius: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      h1 {
        font-size: 50px;
        text-align: center;
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 650px) {
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    .box:nth-child(2){
      display: flex;
    }
    .box {
      width: 100% !important;
      .user {
        flex-wrap: wrap;
        justify-content: center;
        .line {
          text-align: center;
          h1,
          h2 {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
      .block {
        .links {
          margin-top: 30px;
          button {
            width: 45%;
            margin: 20px auto;
          }
          a {
            width: 100%;
            text-align: center;
          }
          flex-wrap: wrap;
        }
      }
    }
  }
`;
