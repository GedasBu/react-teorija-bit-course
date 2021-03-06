import { useContext } from "react"
import Books from "../../Contexts/Books"
import ListBook from "./ListBook";

const List=()=>{
    const books = useContext(Books); //Ateina is Books.js

    if(books.showBooks.length === 0){
        return (
          <div className="books__list__loading">
            <span className="btn-shine">Loading Books List...</span>
        </div>   
        )
       

    } 
    return(
        <div className="books__list">
            {books.showBooks.map(b=><ListBook key={b.id} book={b}></ListBook>)}


        </div>
    )
}

export default List