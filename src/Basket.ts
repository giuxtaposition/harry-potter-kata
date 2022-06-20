import { Book } from "./types/Book"

export class Basket {
    private books: Book[] = []

    public add(book: Book) {
        this.books.push(book)
    }

    public totalPrice() {
        return this.books.length * 8
    }
}
