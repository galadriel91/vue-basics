import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/',
});

const addNoteItem = note => {
    return instance.post('notes', note);
};

const getNoteItem = () => {
    return instance.get('notes');
};

const getEditNoteItem = id => {
    return instance.get(`notes/${id}`);
};

export { addNoteItem, getNoteItem, getEditNoteItem };
