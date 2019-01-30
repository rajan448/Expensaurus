import { Currency } from "../enums/currency";
import { Priority } from "../enums/priority";


export interface IExpense {
    id: number;
    name: string;
    description?: string;
    amount: number;
    date: string;
    currency: Currency;
    priority: Priority;
    rupeeEquivalent: number;
}