import React from "react";
import "./style.css";
import NavBtn from "./NavBtn";
import pokeBall from "./Poke_Ball.png";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: null };
  }

  async componentDidMount() {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${this.props.pokemon.name}`
    );
    const data = await result.json();
    this.setState({ pokemon: data });
  }

  async AddPokemon(pokemon) {
    const pokemonClass = Parse.Object.extend("pokemon");
    const query = new Parse.Query(pokemonClass);
    query.equalTo("name", pokemon.name);
    const results = await query.find();
    console.log(results);
    if (results.length) {
      return;
    }

    const myPokemon = new pokemonClass();

    myPokemon.set("name", pokemon.name);
    myPokemon.set("dexNumber", pokemon.id);

    try {
      const result = await myPokemon.save();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (this.state.pokemon) {
      return (
        <div className="card-container">
          <NavBtn onClick={() => this.AddPokemon(this.state.pokemon)}>
            Add Pokemon!
            <img src={pokeBall} />
          </NavBtn>
          <img
            alt="pokemon"
            src={this.state.pokemon.sprites.other.home.front_default}
          />
          <a
            href={`https://www.pokemon.com/us/pokedex/${this.props.pokemon.name}`}
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              {this.props.pokemon.name[0].toUpperCase() +
                this.props.pokemon.name.slice(1)}
            </h2>
          </a>
        </div>
      );
    } else return <div></div>;
  }
}
