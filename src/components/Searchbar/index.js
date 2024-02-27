import React, { useState } from "react";
import { searchPokemon } from "../../api/pokeapi";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import './custom-modal.css'

import * as C from "./styles";
import Pokemon from "../Pokemon";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();
  const [showModal, setShowModal] = useState(false);

  const onChangeHandler = (e) => {
    const name = e.target.value.trim().toLowerCase();

    if (name !== "") {
      setSearch(name);
    }
  };

  const onButtonClickHandler = () => {
    if (search !== "") {
      onSearchHandler(search);
    }
  };

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);

    if (result != undefined) {
      setPokemon(result);
      toggleModal();
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <C.SearchbarContainer>
      <C.Searchbar>
        <C.SearchbarInput
          placeholder="Buscar Pokémon"
          onChange={onChangeHandler}
        />
      </C.Searchbar>
      <C.SearchbarBtn>
        <C.SearchbarButton onClick={onButtonClickHandler}>
          Buscar
        </C.SearchbarButton>
      </C.SearchbarBtn>

      <Modal
        open={showModal}
        onClose={toggleModal}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
      >
        <Pokemon local={false} key={0} pokemon={pokemon}></Pokemon>
      </Modal>
    </C.SearchbarContainer>
  );
};

export default Searchbar;
