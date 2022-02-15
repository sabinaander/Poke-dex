import React from "react";  
import './CardComponent.css';
import NavBtn from "./NavBtn";

export class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {pokemon:null}
    }

    async componentDidMount(){
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemon.name}`)
        const data = await result.json()
        this.setState({ pokemon: data });
    }

    async AddPokemon(pokemon){

        const pokemonClass = Parse.Object.extend('pokemon')
        const query = new Parse.Query(pokemonClass)
        query.equalTo('name', pokemon.name)
        const results = await query.find()
        console.log(results)
        if (results.length){
            return
            
        }

        const myPokemon = new pokemonClass()

        myPokemon.set('name', pokemon.name)
        myPokemon.set('dexNumber', pokemon.id)

        try{
            const result = await myPokemon.save()
        }
        catch(error){
            console.log(error)
        }

    }

    render(){
        if (this.state.pokemon){
    return <div className="card-container">
        <NavBtn onClick={() => this.AddPokemon(this.state.pokemon)}>Add Pokemon!</NavBtn>
        <a href={`https://www.pokemon.com/us/pokedex/${this.props.pokemon.name}`} target="_blank" rel="noreferrer">
            <img alt="pokemon" src={this.state.pokemon.sprites.other.home.front_default}/>
            <h2>{this.props.pokemon.name[0].toUpperCase()+this.props.pokemon.name.slice(1)}</h2>
        </a>
    </div>
    }
    else return <div></div>
    }
}