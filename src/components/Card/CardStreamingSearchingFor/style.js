import styled from "styled-components";
import { Container as Card } from "../styles";

export const Container = styled.li`
  width: 100px;
  height: 100px;
  padding: 10px;

  input {
    
  }

  label {
    display: block;
    position: relative;
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  label::before {
    background-color: white;
    color: white;
    content: " ";
    display: block;
    border-radius: 50%;
    border: 1px solid grey;
    position: absolute;
    top: -5px;
    left: -5px;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 28px;
    transition-duration: 0.4s;
    transform: scale(0);
  }

  label img {
    height: 100%;
    width: 100%;
    transition-duration: 0.2s;
    transform-origin: 50% 50%;
  }

  :checked + label {
    border-color: #ddd;
  }

  :checked + label::before {
    content: "✓";
    background-color: grey;
    transform: scale(1);
  }

  :checked + label img {
    transform: scale(0.9);
    box-shadow: 0 0 5px #333;
    z-index: -1;
  }
`;

export const Img = styled.img`
  height: 100%;
`;
