import type { NoteItems } from '@/store/types';
import type { AxiosResponse } from 'axios';
import { notes } from './index';

export const getNote = (): Promise<AxiosResponse<NoteItems[]>> => {
    return notes.get('/');
};
