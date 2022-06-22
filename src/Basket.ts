import { Book } from "./types/Book"

export class Basket {
    private books: number[] = [0, 0, 0, 0, 0]
    private discount: number[] = [0, 1, 0.95, 0.9, 0.8]

    public add(book: Book) {
        this.books[book] += 1
    }

    public totalPrice() {
        const booksBought = this.books.filter(book => book > 0)

        if (booksBought.length === 1) {
            return booksBought[0] * 8
        }

        const lowestBook = Math.min(...booksBought)

        return (
            booksBought.length * 8 * this.discount[booksBought.length] +
            booksBought.reduce((acc, book) => {
                if (booksBought.length === 1) {
                    return acc + book * 8
                }
                return acc + (book - lowestBook) * 8
            }, 0)
        )
    }
}
