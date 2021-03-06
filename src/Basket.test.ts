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

    test("5% discount, add two different books", () => {
        basket.add(Book.First)
        basket.add(Book.Second)

        expect(basket.totalPrice()).toEqual(2 * 8 * 0.95)
    })

    test("5% discount, add two different book and one of the same", () => {
        basket.add(Book.First)
        basket.add(Book.First)
        basket.add(Book.Second)

        expect(basket.totalPrice()).toEqual(2 * 8 * 0.95 + 1 * 8)
    })

    test("10% discount, add three different books", () => {
        basket.add(Book.First)
        basket.add(Book.Second)
        basket.add(Book.Third)

        expect(basket.totalPrice()).toEqual(3 * 8 * 0.9)
    })

    test("10% discount, add three different books and one of the same", () => {
        basket.add(Book.First)
        basket.add(Book.Second)
        basket.add(Book.Third)
        basket.add(Book.Third)

        expect(basket.totalPrice()).toEqual(3 * 8 * 0.9 + 1 * 8)
    })

    test("20% discount, add four different books", () => {
        basket.add(Book.First)
        basket.add(Book.Second)
        basket.add(Book.Third)
        basket.add(Book.Fourth)

        expect(basket.totalPrice()).toEqual(4 * 8 * 0.8)
    })

    test("25% discount, add five different books", () => {
        basket.add(Book.First)
        basket.add(Book.Second)
        basket.add(Book.Third)
        basket.add(Book.Fourth)
        basket.add(Book.Fifth)

        expect(basket.totalPrice()).toEqual(5 * 8 * 0.75)
    })

    test("handle multiple discounts", () => {
        basket.add(Book.First)
        basket.add(Book.First)
        basket.add(Book.Second)
        basket.add(Book.Second)
        basket.add(Book.Third)

        expect(basket.totalPrice()).toEqual(3 * 8 * 0.9 + 2 * 8 * 0.95)
    })
})
