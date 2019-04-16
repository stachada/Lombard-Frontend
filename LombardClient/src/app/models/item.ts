import { ItemCategory } from './ItemCategory';

export interface Item {
    itemId: number;
    price: number;
    name: number;
    quantity: number;
    productCategory: ItemCategory;
}