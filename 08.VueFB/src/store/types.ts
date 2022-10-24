interface TodoItem {
    // id: string;
    id: number;
    created: number;
    content: string;
    isCheck: boolean;
}

interface AddItem {
    id: number;
    created: number;
    content: string;
    isCheck: boolean;
}

interface CheckItem {
    id: number;
    isCheck: boolean;
}

interface UpdateItem {
    id: number;
    content: string;
}

export type { TodoItem, AddItem, CheckItem, UpdateItem };
