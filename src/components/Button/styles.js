import styled, { css } from "styled-components";

export const Button = styled.button`
  padding: 8px 4px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #0EBDD2;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;