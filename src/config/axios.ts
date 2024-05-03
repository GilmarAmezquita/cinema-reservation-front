import axios from 'axios';
import { API_HOST } from './const';

const instance = axios.create({
    baseURL: `${API_HOST}`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export default instance
