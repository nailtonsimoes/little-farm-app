import { TypeName } from "../enums/type-name";

export interface Transaction {
    id: String,
    type: TypeName,
    value: number;
    description?: String,
    createdAt: Date
}
