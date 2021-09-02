import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    
    const [pokemon, setPokemon] = useState([]);
    
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=2000')
        .then((response) => {
            setPokemon(response.data.results);
        })

        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <h2>Gotta Catch 'em All</h2>
            {
                pokemon.map((pokemonObj, index) => (
                    <div key={index}>
                        {pokemonObj.name}
                    </div>
                ))
            }
        </div>
    )
    }
    
export default Pokemon;