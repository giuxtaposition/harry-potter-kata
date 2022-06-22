import { Book } from "./types/Book"

export class Basket {
    private books: number[] = [0, 0, 0, 0, 0]

    public add(book: Book) {
        this.books[book] += 1
    }

    public totalPrice() {
        const booksBought = this.books.filter(book => book > 0)

        if (booksBought.length === 1) {
            return booksBought[0] * 8
        }

        if (booksBought.length === 2) {
            const lowestBook = Math.min(...booksBought)

            return (
                booksBought.length * 8 * 0.95 +
                booksBought.reduce((acc, book) => {
                    return acc + (book - lowestBook) * 8
                }, 0)
            )
        }

        return 0
    }
}
