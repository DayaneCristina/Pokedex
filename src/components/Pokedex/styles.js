import styled from "styled-components";
import pokedex from '../../components/assets/fundo-pokedex.jpg';

export const PokedexHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding: 2px;
  background-image: url(${pokedex});
  background-repeat: no-repeat;
`;

export const PokedexGrid = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3, 1fr);
`;

export const PaginationWrapper = styled.div`
  float: right;
`;