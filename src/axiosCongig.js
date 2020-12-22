import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.imgur.com/3/',
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
        Accept: 'application/json',
    },
});

export default instance;
