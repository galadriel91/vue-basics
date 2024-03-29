import type { NoteItems } from '@/store/types';
import type { AxiosResponse } from 'axios';
import { notes } from './index';

export const getNote = (
    params: object,
): Promise<AxiosResponse<NoteItems[]>> => {
    return notes.get('/', { params });
};

export const getEditNote = (id: string): Promise<AxiosResponse<NoteItems>> => {
    return notes.get(`/${id}`);
};

export const updateNote = (
    info: NoteItems,
): Promise<AxiosResponse<NoteItems>> => {
    return notes.patch(`/${info.id}`, info);
};

export const removeItem = (id: number): Promise<AxiosResponse<NoteItems>> => {
    return notes.delete(`/${id}`);
};

export const addItem = (info: NoteItems): Promise<AxiosResponse<NoteItems>> => {
    return notes.post(`/`, info);
};
