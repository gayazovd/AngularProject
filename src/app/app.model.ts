export interface Course {
    id: number;
    listItem: ListItem[];
    length?: number;
}

export interface AppCourses {
    length?: number;
    [index: number]: ListItem;
}

export interface DeletePopup {
    id: number;
    title: string;
}

export interface ListItem {
    id: number;
    name: string;
    authors: Author[];
    date: Date;
    length: number;
    isTopRated: boolean;
    description: string;
}

export interface User {
    login: string;
    password: string;
}

export interface Author {
    id: number,
    firstName: string,
    lastName: string
}

export interface Pagination<T> {
    body: T[],
    count: number
}

export interface PopupData {
    id: number;
    listItem: ListItem;
}

export interface IdByCourse {
    coursesId: number;
    listItemId: number;
}

export interface CreatedListItem {
    listItem: ListItem
    flag: boolean;
}