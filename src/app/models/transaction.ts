import { TypeName } from "../enums/type-name";

export interface Transaction {
    id: Number,
    type: TypeName,
    description?: String,
    createdAt: Date
}
