import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/',
});

const addNoteItem = note => {
    return instance.post('notes', note);
};

const getNoteItem = (page, search) => {
    return instance.get(`notes?_page=${page}&_sort=id&_order=desc&_limit=3`, {
        params: {
            title_like: search,
        },
    });
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
