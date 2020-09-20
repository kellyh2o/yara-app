import { Guid } from 'guid-typescript';

export interface ReflectionResponse {
    id: Guid; 
    title: string;
    text: string;
    type: ReflectionType;
    createdAt: Date;
}

export enum ReflectionType {
    Open = 'Open',
    Guided = 'Guided',
}