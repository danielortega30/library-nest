import { BooksService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): Promise<import("./entities/book.entity").Book>;
    findAll(): Promise<import("./entities/book.entity").Book[]>;
    search(query: string): Promise<import("./entities/book.entity").Book[]>;
    findOne(id: string): Promise<import("./entities/book.entity").Book | null>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<import("./entities/book.entity").Book | null>;
    remove(id: string): Promise<import("./entities/book.entity").Book>;
}
