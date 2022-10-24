interface TodoItem {
    // id: string;
    created: number;
    content: string;
    isCheck: boolean;
}

interface AddItem {
    created: number;
    content: string;
    isCheck: boolean;
}

export type { TodoItem, AddItem };
