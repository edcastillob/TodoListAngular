import { UserInterface } from "./user.interface";

export interface TaskInterface{
    id: string | number;
    title: string;
    tags: string[]; //--> Array<string>; 
    user: UserInterface;
    status: 'in-progess' | 'completed' | 'wait';
}