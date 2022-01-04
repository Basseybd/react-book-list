import React from "react";
import ReactDom from "react-dom";
import { books } from "./books";
import Book from "./Book";
import { Children } from "react/cjs/react.production.min";
//CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        //index as id
        //return <Book key={index} book={book} />;
        //pass in book asa object
        //return <Book key={book.id} book={book} />;
        //pass in uising a spread operator
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
