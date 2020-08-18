import axios from 'axios';

const serverURL = 'https://hackschool-fa20-test-server.herokuapp.com';

export default {
    getPokemonName: function () {
        return axios.get(`${serverURL}/api/pokemonName`);
    },

    createPokemon: function (payload) {
        const config = {
            method: 'post',
            url: `${serverURL}/api/pokemon`,
            data: {
                name: payload.name,
                description: payload.desc,
                image: payload.image,
                type1: payload.type1,
                type2: payload.type2,
                moves: payload.moves
            }
        };
        return axios(config);
    }
}