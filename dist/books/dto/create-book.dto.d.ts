import { BookStatus } from '../entities/book.entity';
export declare class CreateBookDto {
    name: string;
    isbn: string;
    status?: BookStatus;
}
