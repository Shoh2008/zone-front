import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { theme } from "./theme";

const Boardlink = ({ icon, title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const Line = styled.div`
    border-radius: 10px;
    width: 90%;
    padding: 15px;
    margin: 10px auto;
    font-size: 18px;
    font-weight: bold;
    color: ${theme.color};
    cursor: pointer;
    transition: 0.5s;
    display: flex;
    align-items: center;
    background: transparent !important;
    p {
      margin: 0;
    }
    i {
      color: ${theme.element};
      margin: 0 10px;
      font-size: 30px;
    }
    &:hover {
      background: ${theme.glass};
    }
  `;

  return (
    <Line
      className={location.pathname === (title === "Profile" ? "/" : `/${title.toLocaleLowerCase()}`) ? "active" : ""}
      onClick={() =>
        navigate(title === "Profile" ? "/" : `/${title.toLocaleLowerCase()}`)
      }
    >
      <i className={`bi bi-${icon}`} />
      <p>{title}</p>
    </Line>
  );
};

export default Boardlink;
