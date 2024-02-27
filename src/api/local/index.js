const baseURL = 'http://localhost:3333/api/pokemon/';

export const searchPokemon = async (pokemon) => {
  try {
      let url = `${baseURL}${pokemon}`
      const response = await fetch(url)
      return await response.json()
  } catch (error) {
      console.log("error: ", error)
  }
}

export const getPokemons = async (limit = 20, offset = 0) => {
  try {
      let url = `${baseURL}?offset=${offset}&limit=${limit}`
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
      })
      return await response.json()
  } catch (error) {
      console.log("error: ", error)
  }
}

export const getPokemonData = async (url) => {
  try {
      const response = await fetch(url)
      return await response.json()
  } catch (error) {
      console.log("error: ", error)
  }
}

export const importPokemon = async (data) => {
  try {
    await fetch(`${baseURL}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        id: data.id,
        name: data.name,
        sprites: [{
          front_default: data.sprites.front_default
        }],
        order: data.order,
        types: data.types
      })
    })
  } catch (error) {
    console.log("error: ", error)
  }
}

export const deletePokemon = async (data) => {
  try {
    await fetch(`${baseURL}${data.id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    })
  } catch (error) {
    console.log("error: ", error)
  }
}