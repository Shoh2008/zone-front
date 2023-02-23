import styled from "styled-components";
import { theme } from "./utils/theme";

export const LayOut = styled.div`
  display: flex;
  background: ${theme.back};
  color: ${theme.color};
  .menu_btn {
    display: none;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 15;
    height: 45px;
    width: 45px;
    border-radius: 50%;
  }
  .mt-2 {
    margin-top: 20px;
  }
  .break {
    overflow-wrap: break-word;
  }
  input,
  button,
  textarea {
    outline: none;
    border: none;
    font-size: 20px;
    margin: 5px 10px;
    transition: 0.5s;
    border-radius: 10px;
  }
  button {
    cursor: pointer;
    background: ${theme.element};
    height: 45px;
    display: flex;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    color: ${theme.color};
    i {
      margin: 0 5px;
    }
  }
  input {
    padding: 10px;
    background: transparent;
    border: 1px solid ${theme.element};
    color: ${theme.element};
    &:focus {
      background: ${theme.element};
      color: ${theme.color};
      &::placeholder {
        color: ${theme.color};
      }
    }
  }
  textarea {
    padding: 10px;
    background: transparent;
    border: 1px solid ${theme.element};
    color: ${theme.element};
    &:focus {
      background: ${theme.element};
      color: ${theme.color};
      &::placeholder {
        color: ${theme.color};
      }
    }
  }
  @media screen and (max-width: 750px) {
    .menu_btn {
      display: flex;
    }
  }
`;

export const NavbarLeft = styled.div`
  height: 100vh;
  width: 230px;
  background: ${theme.box};
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.5s;
  i {
    margin: 0 10px;
  }
  .name {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: ${theme.border};
  }
  .foot {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: ${theme.border};
    width: 100%;
    position: absolute;
    bottom: 0%;
    button {
      width: 90%;
      font-size: 18px;
      padding: 10px;
      margin: auto;
    }
  }
  .active {
    background: ${theme.glass} !important;
    color: ${theme.element} !important;
  }
  @media screen and (max-width: 750px) {
    height: 100vh;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 6;
  }
`;

export const Block = styled.div`
  width: calc(100% - 230px);
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const NavbarTop = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
  height: 70px;
  border-bottom: ${theme.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: ${theme.box};
  div {
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user {
    height: 60px;
    display: flex;
    align-items: center;
    span {
      height: 50px;
      border: ${theme.border};
      width: 50px;
      border-radius: 50%;
      margin: 0 10px;
      display: flex;
      text-transform: uppercase;
      font-size: 30px;
      justify-content: center;
      align-items: center;
      background: ${theme.box};
    }
    .title {
      padding: 7px 0;
      width: 130px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      b::first-letter,
      p::first-letter {
        text-transform: uppercase;
      }
      b,
      p {
        min-width: 100%;
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  @media screen and (max-width: 750px) {
    h2 {
      max-width: 300px;
    }
    .user {
      display: none;
    }
  }
`;

export const Component = styled.div`
  height: calc(100vh - 70px);
  overflow: scroll;
  &::-webkit-scrollbar {
    height: 0;
    width: 6px;
    background: ${theme.box};
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.element};
    border-radius: 6px;
  }
`;
