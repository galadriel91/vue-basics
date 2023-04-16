import type { ListItems, PostsItem, UserItems } from '@/store/types';

import axios, { type AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: 'https://api.hnpwa.com/v0/',
});

const fetchListItem = (pageName: string): Promise<AxiosResponse<ListItems>> => {
    return instance.get(`${pageName}/1.json`);
};

const fetchUserItem = (userId: string): Promise<AxiosResponse<UserItems>> => {
    return instance.get(`user/${userId}.json`);
};

const fetchPostItem = (postId: string): Promise<AxiosResponse<PostsItem>> => {
    return instance.get(`item/${postId}.json`);
};

export { 
    fetchListItem, 
    fetchUserItem, 
    fetchPostItem 
};
