import styled from "styled-components";
import pokedex from '../../components/assets/pokedexm.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  position: relative;
`;

export const Wrapper = styled.div`
background-image: url(${pokedex});
background-position: center;
background-repeat: no-repeat;
width: 425px;
height: 637px;
`
export const ButtonWrapper = styled.div`
margin-top: 50px;
`

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  max-width: 250px;
  margin-top: 220px;
  margin-left:68px;
  `;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #d8d9dc;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #d8d9dc;
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