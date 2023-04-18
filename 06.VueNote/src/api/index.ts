import axios from 'axios';

const create = (url: string) => {
    const instance = axios.create({
        baseURL: url,
    });
    return instance;
};

export const notes = create('http://localhost:5000/notes');
