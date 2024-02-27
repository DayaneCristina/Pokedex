import styled from "styled-components";
import pokedex from '../../components/assets/fundo-pokedex.jpg';

export const NavContainer = styled.nav`
  height: 150px;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
`;

export const Logo = styled.div`
  margin-top: 50px;
  margin-left: 10px;
  width: 200px;
  float: left;
`;

export const SearchbarContainer = styled.div`
  float: left;
  margin-top: 80px;
`;

export const LogoImage = styled.img`
  width: 200px;
`;

export const NavMenu = styled.div`
  float: right;
  margin-top: 20px;
  margin-right: 50px;
`;

export const Menu = styled.ul`
  float: right;
`;

export const MenuItem = styled.li`
  display: inline-block;
  margin: 63px 10px 0 10px
`;

export const LinkButton = styled.button`
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