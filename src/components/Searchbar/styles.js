import styled from "styled-components";

export const SearchbarContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;
`;

export const Searchbar = styled.div`
  background-color: white;
  margin-right: 20px;
  cursor: pointer;
`;

export const SearchbarBtn = styled.div``;

export const SearchbarInput = styled.input`
  padding: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  height: 32px;
  width: 250px;
`;

export const SearchbarButton = styled.button`
  background-color: #0e6f9f;
  border: none;
  border-radius: 4px;
  height: 36px;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #008b8b;
  }
`;