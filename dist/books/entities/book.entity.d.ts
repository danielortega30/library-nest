export declare enum BookStatus {
    AVAILABLE = "available",
    BORROWED = "borrowed",
    LOST = "lost"
}
export declare class Book {
    id: number;
    name: string;
    isbn: string;
    status: BookStatus;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
