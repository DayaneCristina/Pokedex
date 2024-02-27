import React from "react";
import Pagination from "../Pagination";
import Pokemon from "../Pokemon";

import * as C from "./styles";

const Pokedex = (props) => {
  const { pokemons, local, loading, page, setPage, totalPages } = props;
  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <C.PokedexHeader>
        <C.PaginationWrapper>
          <Pagination
            page={page + 1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
          />
        </C.PaginationWrapper>
      </C.PokedexHeader>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <C.PokedexGrid>
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon local={local} key={index} pokemon={pokemon} />;
            })}
        </C.PokedexGrid>
      )}
    </div>
  );
};

export default Pokedex;
