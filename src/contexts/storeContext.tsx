import {createContext, useContext} from "react";
import {createBookStore} from "../mobx/book_store";

const storeContext = createContext({
    bookStore: createBookStore()
})

export const useStore = () => useContext(storeContext)