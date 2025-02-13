import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum BookStatus {
  AVAILABLE = 'available',
  BORROWED = 'borrowed',
  LOST = 'lost',
}

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  isbn: string;

  @Column({
    type: 'enum',
    enum: BookStatus,
    default: BookStatus.AVAILABLE,
  })
  status: BookStatus;

  @Column({ default: false })
  isDeleted: boolean;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
