import { Book } from "./types/Book"

export class Basket {
    private books: number[] = [0, 0, 0, 0, 0]
    private discount: number[] = [0, 1, 0.95, 0.9, 0.8, 0.75]

    public add(book: Book) {
        this.books[--book] += 1
    }

    public totalPrice() {
        const booksBought = this.books.filter(book => book > 0)

        const uniqueNumbers = booksBought.filter(
            (book, index, self) => self.indexOf(book) === index
        )

        if (booksBought.length === 1) {
            return booksBought[0] * 8
        }

        return uniqueNumbers.reduce((acc, number) => {
            const volumesWithNumber = booksBought.filter(
                book => book >= number
            ).length

            return (
                acc + volumesWithNumber * 8 * this.discount[volumesWithNumber]
            )
        }, 0)
    }
}
