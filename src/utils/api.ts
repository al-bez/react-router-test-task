import axios from 'axios';

// /pokemon?limit=5
export default axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});
