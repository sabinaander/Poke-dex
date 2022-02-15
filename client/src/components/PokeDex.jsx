import { render } from "react-dom";
import React from "react";
// import SomeComponent from '../SomeComponent';
import "./App";
import { Cards } from "./Cards";
import { SearchField } from "./SearchField";
import { NavBtn } from "./NavBtn";

class PokeDex extends React.Component {
  constructor(props) {
    super(props);
    this.FetchPokemon();
    this.state = {
      pokemons: [],
      search: "",
    };
  }

  // get the API

  FetchPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=500")
      .then((response) => response.json())
      .then((name) => this.setState({ pokemons: name.results }));

  }

  handleChange = (searchedPokemon) => {
    this.setState({ search: searchedPokemon.target.value });
  };

  render() {
    const { pokemons, search } = this.state;
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    ).slice(0,10)

    return (
      <div className="Pokemon">
        <h1>Welcome to the PokeDex!</h1>
        <SearchField
          placeholder="Search for a pokemon..."
          handleChange={this.handleChange}
        />
        <Cards pokemons={filteredPokemons}></Cards>
      </div>
    );
  }
}

export default PokeDex;
