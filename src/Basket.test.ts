import { Basket } from "./Basket"
import { Book } from "./types/Book"

describe("Harry Potter Kata tests", () => {
    let basket: Basket

    beforeEach(() => {
        basket = new Basket()
    })

    test("empty basket", () => {
        expect(basket.totalPrice()).toEqual(0)
    })

    test("no discount, add one book", () => {
        basket.add(Book.First)

        expect(basket.totalPrice()).toEqual(8)
    })

    test("no discount, add three of the same book", () => {
        basket.add(Book.Second)
        basket.add(Book.Second)
        basket.add(Book.Second)

        expect(basket.totalPrice()).toEqual(3 * 8)
    })
})