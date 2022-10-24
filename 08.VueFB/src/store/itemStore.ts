import type { AddItem, CheckItem, UpdateItem, TodoItem } from './types';
import { useCommon } from './commonStore';
import { defineStore } from 'pinia';
import { dbService } from '@/utils/fb';

const onLoading = () => {
    const { ON_LOADING } = useCommon();
    ON_LOADING();
};

export const useItem = defineStore('item', {
    state: () => ({
        todos: [] as TodoItem[],
    }),
    actions: {
        async ADD_TODO(item: AddItem) {
            onLoading();
            await dbService.collection('todos').add(item);
        },
        GET_TODO() {
            onLoading();
            dbService.collection('todos').onSnapshot(snap => {
                const todos = snap.docs.map(todo => ({
                    ...(todo.data() as AddItem),
                    id: todo.id,
                }));
                todos.sort((a, b) => b.created - a.created);
                this.todos = todos;
            });
        },
        async CHECK_TODO(item: CheckItem) {
            onLoading();
            await dbService
                .doc(`todos/${item.id}`)
                .update({ isCheck: item.isCheck });
        },
        async REMOVE_TODO(item: string) {
            onLoading();
            await dbService.doc(`todos/${item}`).delete();
        },
        async UPDATE_TODO(item: UpdateItem) {
            onLoading();
            await dbService
                .doc(`todos/${item.id}`)
                .update({ content: item.content });
        },
    },
});
