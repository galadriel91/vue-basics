import type { NoteItems } from '@/store/types';
import axios from 'axios';

export const GetNote = () => {
    return axios.get('http://localhost:5000/notes');
};

export const AddNote = (note: NoteItems) => {
    return axios.post('http://localhost:5000/notes', note);
};

export const GetDetailNote = (id: string) => {
    return axios.get(`http://localhost:5000/notes/${id}`);
};
