interface TodoItem {
    id: string;
    created: number;
    content: string;
    isCheck: boolean;
}

interface AddItem {
    created: number;
    content: string;
    isCheck: boolean;
}

interface CheckItem {
    id: string;
    isCheck: boolean;
}

interface UpdateItem {
    id: string;
    content: string;
}

export type { TodoItem, AddItem, CheckItem, UpdateItem };
