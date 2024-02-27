import styled from "styled-components";
import pokedex from "../../components/assets/pokedexm.png";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;
export const Wrapper = styled.div`
  background-image: url(${pokedex});
  background-position: center;
  background-repeat: no-repeat;
  width: 425px;
  height: 637px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 60px;
`;

export const Content = styled.div`
  gap: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  max-width: 250px;
  margin-top: 174px;
  margin-left: 68px;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
  color: #d8d9dc;
  margin-left: 100px;
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #d8d9dc;
  text-align: center;
  width: 100%;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #d8d9dc;
  }
`;
