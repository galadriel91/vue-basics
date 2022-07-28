import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/',
});

const addNoteItem = note => {
    return instance.post('notes', note);
};

const getNoteItem = page => {
    return instance.get(`notes?_page=${page}&_sort=id&_order=desc&_limit=3`);
};

const getEditNoteItem = id => {
    return instance.get(`notes/${id}`);
};

const updateNoteItem = (id, note) => {
    return instance.patch(`notes/${id}`, note);
};

const removeNoteItem = id => {
    return instance.delete(`notes/${id}`);
};

export {
    addNoteItem,
    getNoteItem,
    getEditNoteItem,
    updateNoteItem,
    removeNoteItem,
};
