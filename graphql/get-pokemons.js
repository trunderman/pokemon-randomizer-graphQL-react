import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
    query pokemons($first: Int!) {  
        pokemons(first: $first) {
            id
            name
            image
            maxHP
            maxCP
            attacks {
                special {
                    name
                    damage
                }
            }
        }   
    }
`;

//simple query that references: https://graphql-pokemon.now.sh/