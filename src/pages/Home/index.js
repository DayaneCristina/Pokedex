import { React, useState, useEffect } from "react";

import { getPokemonData, getPokemons, searchPokemon } from "../../api/pokeapi";

import { FavoriteProvider } from "../../contexts/favoritesContext";
import Navbar from "../../components/Navbar";
import Pokedex from "../../components/Pokedex";

import * as C from './styles';

const favoritesKey = "f";

const Home = () => {

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 25;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
      setFavorites(pokemons);
  };

  useEffect(() => {
    fetchPokemons();
    loadFavoritePokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }
    localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);

  };

  return (
    <C.Container>
      <FavoriteProvider
        value={{
          favoritePokemons: favorites,
          updateFavoritePokemons: updateFavoritePokemons
        }}
      >
        <div>
          <Navbar />
          {notFound ? (
            <div class-name="not-found-text"> Não encontrado </div>
          ) : (
            <Pokedex
              local={false}
              pokemons={pokemons}
              loading={loading}
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />
          )}
        </div>
      </FavoriteProvider>
    </C.Container>
  );
};

export default Home;
