import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { BookStatus } from '../entities/book.entity';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  isbn: string;

  @IsOptional()
  @IsEnum(BookStatus)
  status?: BookStatus;
}
