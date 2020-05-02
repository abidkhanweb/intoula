import { Time } from '@angular/common';

export interface Item {
    docId?:string,
    firstName?:string,
    lastName?:string,
    inTime?:Time,
    outTime?:Time,
    expense?:string,
    shift?:string,
    rides?:string,
    revenue?:string,
}