import type { NoteItems } from '@/store/types';
import type { AxiosResponse } from 'axios';
import { notes } from './index';

export const GetNote = (): Promise<AxiosResponse<NoteItems[]>> => {
    return notes.get('/');
};
