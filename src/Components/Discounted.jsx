import React from "react";
import { books } from "../data";
import Book from "./ui/Book"

export const Discounted = () => {
  return (
    <section id="recent"> 
      <div className="container">
        <div className="row">
          <div className="section__title">
            Discounted <span className="purple">Books</span>
          </div>
          <div className="books">
            {books.map((book) => (
              <Book key={book.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
