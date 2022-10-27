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

export const UpdateNote = (id: number, note: NoteItems) => {
    return axios.patch(`http://localhost:5000/notes/${id}`, note);
};

export const RemoveNote = (id: number) => {
    return axios.delete(`http://localhost:5000/notes/${id}`);
};
