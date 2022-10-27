import type { NoteItems } from '@/store/types';
import axios from 'axios';

export const getNote = () => {
    return axios.get('http://localhost:5000/notes');
};

export const AddNote = (note: NoteItems) => {
    return axios.post('http://localhost:5000/notes', note);
};
