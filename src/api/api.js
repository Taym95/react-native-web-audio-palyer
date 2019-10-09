import axios from 'axios';
const options =  {
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com',
}
const myAxios = axios.create(options);


export default myAxios;