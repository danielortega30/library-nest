import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  create(createBookDto: CreateBookDto) {
    const book = this.booksRepository.create(createBookDto);
    return this.booksRepository.save(book);
  }

  findAll() {
    return this.booksRepository.find({
      where: { isDeleted: false },
    });
  }

  findOne(id: number) {
    return this.booksRepository.findOne({
      where: { id, isDeleted: false },
    });
  }

  async search(query: string) {
    return this.booksRepository.find({
      where: [
        { name: Like(`%${query}%`), isDeleted: false },
        { isbn: Like(`%${query}%`), isDeleted: false },
      ],
    });
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const book = await this.findOne(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    await this.booksRepository.update(id, updateBookDto);
    return this.findOne(id);
  }

  async softDelete(id: number) {
    const book = await this.findOne(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    book.isDeleted = true;
    book.deletedAt = new Date();
    return this.booksRepository.save(book);
  }
}
