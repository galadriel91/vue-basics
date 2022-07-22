import axios from 'axios';

const instance = axios.create({
    baseURL: ' http://localhost:5000',
});

export const fetchNoteItem = () => {
    return instance.get('/notes');
};

export const addNoteItem = notes => {
    return instance.post('/notes', notes);
};

export const removeNoteItem = id => {
    return instance.delete(`/notes/${id}`);
};
