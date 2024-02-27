import { React, useContext } from "react";
import FavoriteContext from "../../contexts/favoritesContext";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Searchbar from "../Searchbar";
import { Link } from "react-router-dom";

import * as C from "./styles";

const Navbar = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg = require("../assets/pokemon-logo.png");

  return (
    <C.NavContainer>
      <C.Logo>
        <Link to="/home"> <C.LogoImage alt="pokeapi-logo" src={logoImg} /> 
        </Link>  
      </C.Logo>

      <C.SearchbarContainer>
        <Searchbar/>
      </C.SearchbarContainer>

      <C.NavMenu>
          <C.Menu>
            <C.MenuItem>
              <C.LinkButton
                Text="Lista PokeApi"
                onClick={async () => navigate("/home")}
              >
                Lista PokeApi
              </C.LinkButton>
            </C.MenuItem>

            <C.MenuItem>
              <C.LinkButton Text="Lista Local" onClick={async () => navigate("/local")}>
                Lista Local
              </C.LinkButton>
            </C.MenuItem>

            <C.MenuItem>
              <C.LinkButton
                Text="Sair"
                onClick={async () => [await signout(), navigate("/")]}
              >
                Sair
              </C.LinkButton>
            </C.MenuItem>
          </C.Menu>
      </C.NavMenu>
    </C.NavContainer>
  );
};

export default Navbar;
