import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksService {
    private booksRepository;
    constructor(booksRepository: Repository<Book>);
    create(createBookDto: CreateBookDto): Promise<Book>;
    findAll(): Promise<Book[]>;
    findOne(id: number): Promise<Book | null>;
    search(query: string): Promise<Book[]>;
    update(id: number, updateBookDto: UpdateBookDto): Promise<Book | null>;
    softDelete(id: number): Promise<Book>;
}
