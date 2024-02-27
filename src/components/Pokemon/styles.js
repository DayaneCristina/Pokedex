import styled from "styled-components";

export const PokemonCard = styled.div`
  display: flex;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  background-color: #87cefa;
`;

export const PokemonImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 10px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px 10px 0px;
  flex: 1;
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonType = styled.div`
  display: flex;
`;

export const PokemonTypeText = styled.div`
  margin-right: 10px;
  text-transform: capitalize;
`;

export const PokemonHeartButton = styled.button`
  border: none;
  background-color: #87cefa;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
  padding: 4px;
  cursor: pointer;
  align-items: center;
`;

export const PokemonImportButton = styled.button``