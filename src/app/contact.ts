import {Types} from "./types";

export class Contact {
    public id: number;
    public name: string;
    public type: Types;
    public contacts: Contact[];
}