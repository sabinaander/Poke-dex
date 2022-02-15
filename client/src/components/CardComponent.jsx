import React from "react";  

// import css

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

    render(){
        if (this.state.pokemon){
    return <div className="card-container">
        <a href={'https://www.pokemon.com/us/pokedex/${props.pokemon.name}'} target="_blank" rel="noreferrer">
            <img alt="pokemon" src={this.state.pokemon.sprites.other.home.front_default}/>
            <h2>{this.props.pokemon.name[0].toUpperCase()+this.props.pokemon.name.slice(1)}</h2>
        </a>
    </div>
    }
    else return <div></div>
    }
}