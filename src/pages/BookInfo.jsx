import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Price from "../Components/ui/Price";
import Rating from "../Components/ui/Rating";

const BookInfo = ({ books }) => {
  const { id } = useParams();

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src="https://covers.openlibrary.org/b/id/8091016-L.jpg"
                  alt=""
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  Crack the Coding Interview
                </h2>
                <Rating rating="4.5" />
                <div className="book__selected--price">
                  <Price originalPrice={50} salePrice={20} />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    ducimus minus debitis id porro commodi aperiam magnam vel
                    neque doloribus fuga eos tempore, perspiciatis veniam
                    mollitia dolorem enim eum. Nam.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    ducimus minus debitis id porro commodi aperiam magnam vel
                    neque doloribus fuga eos tempore, perspiciatis veniam
                    mollitia dolorem enim eum. Nam.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    ducimus minus debitis id porro commodi aperiam magnam vel
                    neque doloribus fuga eos tempore, perspiciatis veniam
                    mollitia dolorem enim eum. Nam.
                  </p>
                </div>
                <button className="btn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
