import React from 'react'
import {Card} from './CardComponent'

export const Cards = props => (
    <div className='cards'>
        {props.pokemons.map(pokemon=>(
            <Card key ={pokemon.name} pokemon={pokemon}></Card> 
        ))}
    </div>
)