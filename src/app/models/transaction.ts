import { TypeName } from "../enums/type-name";

export interface Transaction {
    id?: string,
    type?: TypeName,
    value: number;
    description?: string,
    createdAt: any
}
