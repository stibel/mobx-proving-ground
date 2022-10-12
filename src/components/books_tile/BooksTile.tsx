import {observer} from "mobx-react-lite";
import {useRef} from "react";
import {useStore} from "../../contexts/storeContext";

export const BooksTile = observer(() => {
    const {bookStore} = useStore()
    const ref = useRef(null)

    return (
        <div>
            <span>
                <input ref={ref} type={"text"}/>
                {/*@ts-ignore*/}
                <button onClick={() => bookStore.addBook(ref?.current.value)}>Dodaj</button>
            </span>
            <span>Liczba książek: {bookStore.bookCount}</span>
            <ul>
                {bookStore.books.map((book) => <li>{book}</li>)}
            </ul>
        </div>
    )
})