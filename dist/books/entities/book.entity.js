"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.BookStatus = void 0;
const typeorm_1 = require("typeorm");
var BookStatus;
(function (BookStatus) {
    BookStatus["AVAILABLE"] = "available";
    BookStatus["BORROWED"] = "borrowed";
    BookStatus["LOST"] = "lost";
})(BookStatus || (exports.BookStatus = BookStatus = {}));
let Book = class Book {
};
exports.Book = Book;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Book.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "isbn", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: BookStatus,
        default: BookStatus.AVAILABLE,
    }),
    __metadata("design:type", String)
], Book.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Book.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Book.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Book.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Book.prototype, "deletedAt", void 0);
exports.Book = Book = __decorate([
    (0, typeorm_1.Entity)('books')
], Book);
//# sourceMappingURL=book.entity.js.map