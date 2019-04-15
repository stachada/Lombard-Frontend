export interface Transaction {
    transactionId: number;
    itemId: number;
    customerId: number;
    quantity: number;
    price: number;
    transactionDate: Date;
}