import {action, computed, makeObservable, observable} from "mobx";

class BookStore {
    books: Array<string> = []

    constructor(books: Array<string>) {
        makeObservable(this, {
            books: observable,
            addBook: action,
            removeBook: action,
            bookCount: computed
        })
        this.books = books
    }

    addBook(title: string) {
        this.books.push(title);
    }

    removeBook(title: string) {
        this.books = this.books.filter((book) => book !== title);
    }

    get bookCount() {
        return this.books.length;
    }
}

export const createBookStore = () => new BookStore([]);