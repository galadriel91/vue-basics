import axios from 'axios';

export const getNote = () => {
    return axios.get('http://localhost:5000/notes');
};
