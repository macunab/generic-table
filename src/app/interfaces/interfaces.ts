export interface User {
    uid: string;
    email: string;
    password: string;
    permissionsLevel: string;
    isActive: boolean;
}

export interface Column<T> {
    name: keyof T;
    title: string;
}

export interface Row<T> {
    values: T;
}

export interface TableEvent<T> {
    data: T;
    type: string;
}

export interface ButtonSettings {
    title?: string;
    class: string;
    functionType: string;
    icon?: string;
}
