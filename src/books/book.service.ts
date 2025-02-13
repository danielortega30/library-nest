import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, Like } from "typeorm";
import { Book } from "./entities/book.entity";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>
  ) {}

  async create(createBookDto: CreateBookDto) {
    try {
      const book = this.booksRepository.create(createBookDto);
      return await this.booksRepository.save(book);
    } catch (error) {
      throw new Error(`Failed to create book: ${error.message}`);
    }
  }

  async findAll() {
    try {
      return await this.booksRepository.find({
        where: { isDeleted: false },
      });
    } catch (error) {
      throw new Error(`Failed to fetch books: ${error.message}`);
    }
  }

  async findOne(id: number) {
    try {
      const book = await this.booksRepository.findOne({
        where: { id, isDeleted: false },
      });

      if (!book) {
        throw new NotFoundException(`Book with ID ${id} not found`);
      }

      return book;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error(`Failed to fetch book: ${error.message}`);
    }
  }

  async search(query: string) {
    try {
      return await this.booksRepository.find({
        where: [
          { name: Like(`%${query}%`), isDeleted: false },
          { isbn: Like(`%${query}%`), isDeleted: false },
        ],
      });
    } catch (error) {
      throw new Error(`Failed to search books: ${error.message}`);
    }
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    try {
      await this.findOne(id);
      await this.booksRepository.update(id, updateBookDto);
      return await this.findOne(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new Error(`Failed to update book: ${error.message}`);
    }
  }

  async softDelete(id: number) {
    try {
      const book = await this.findOne(id);
      book.isDeleted = true;
      book.deletedAt = new Date();
      return await this.booksRepository.save(book);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error(`Failed to delete book: ${error.message}`);
    }
  }
}
