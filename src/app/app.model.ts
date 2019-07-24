export interface Course {
    listItem: AppCourses;
}
export interface AppCourses {
    length?: number;
    [index: number]: ListItem;
}
export interface ListItem {
    id: number;
    title: string;
    video: string;
    students: number;
    startDate: string;
    duration: string;
}
