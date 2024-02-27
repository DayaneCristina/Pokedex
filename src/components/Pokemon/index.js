import { React, useContext, useState } from "react";
import FavoriteContext from "../../contexts/favoritesContext";
import { importPokemon, deletePokemon } from "../../api/local";

import * as C from "./styles";

const Pokemon = (props) => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);

  const [importing, setImporting] = useState(false);

  const [deleting, setDeleting] = useState(false);

  const [deleted, setDeleted] = useState(false);

  const { pokemon, local } = props;

  const onImportClick = async () => {
    setImporting(true);
    await importPokemon(pokemon);
    updateFavoritePokemons(pokemon.name);
    setImporting(false);
  };

  const onRemoveClick = async () => {
    setDeleting(true);
    await deletePokemon(pokemon);
    updateFavoritePokemons(pokemon.name);
    setDeleting(false);
    setDeleted(true);
  };

  const importText = importing ? "📥 Importando..." : "💾 Importar";
  const imported = favoritePokemons.includes(pokemon.name);

  const deleteText = deleting ? "🗑️ Deletando..." : "❌ Deletar";

  return (
    <div>
      {!deleted && (
        <C.PokemonCard>
          <C.PokemonImageContainer>
            <img
              alt={pokemon.name}
              src={pokemon.sprites.front_default}
              className="pokemon-image"
            />
          </C.PokemonImageContainer>
          <C.CardBody>
            <C.CardTop>
              <h3> {pokemon.name}</h3>
              <div>#{pokemon.id}</div>
            </C.CardTop>
            <C.CardBottom>
              <C.PokemonType>
                {pokemon.types.map((type, index) => {
                  return (
                    <C.PokemonTypeText key={index}>
                      {type.type.name}
                    </C.PokemonTypeText>
                  );
                })}
              </C.PokemonType>

              {!local && (
                <C.PokemonHeartButton
                  disabled={imported || importing}
                  onClick={onImportClick}
                >
                  {imported ? "✅ Importado" : importText}
                </C.PokemonHeartButton>
              )}

              {local && (
                <C.PokemonHeartButton
                  disabled={deleting}
                  onClick={onRemoveClick}
                >
                  {deleteText}
                </C.PokemonHeartButton>
              )}
            </C.CardBottom>
          </C.CardBody>
        </C.PokemonCard>
      )}
    </div>
  );
};

export default Pokemon;
