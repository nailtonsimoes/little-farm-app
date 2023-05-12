import { TypeName } from "../enums/type-name";

export interface Transaction {
    id: String,
    type: TypeName,
    description?: String,
    creatAt: Date
}