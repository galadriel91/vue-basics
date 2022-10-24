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

export type { TodoItem, AddItem, CheckItem };
