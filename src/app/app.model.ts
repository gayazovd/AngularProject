export interface Course {
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
    title: string;
    video: string;
    students: number;
    startDate: Date;
    duration: number;
    star: boolean;
}

export interface User {
    login: string;
    password: string;
    token: string;
}