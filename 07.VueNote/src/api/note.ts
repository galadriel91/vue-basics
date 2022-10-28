import type { NoteItems } from '@/store/types';
import { notes } from './index';

export const GetNote = (params: object) => {
    return notes.get('/', { params });
};

export const AddNote = (note: NoteItems) => {
    return notes.post('/', note);
};

export const GetDetailNote = (id: string) => {
    return notes.get(`/${id}`);
};

export const UpdateNote = (id: number, note: NoteItems) => {
    return notes.patch(`/${id}`, note);
};

export const RemoveNote = (id: number) => {
    return notes.delete(`/${id}`);
};
