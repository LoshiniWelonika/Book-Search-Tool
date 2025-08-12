import { useState } from "react"; 
import "../css/Card.css";
import Modal from "./Modal";

function Card({ books }) {
  const [show,setShow] = useState(false);
  const [bookItem, setItem] = useState();

  return (
    <>
      {books.map((item) => {  
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let title = item.volumeInfo.title && item.volumeInfo.title;
        let pages = item.volumeInfo.pageCount && item.volumeInfo.pageCount;

        if (thumbnail != undefined ){
               return (
                <>
                  <article className="bookCard" onClick={() => {setShow(true); setItem(item)}}>
                  <figure className="bookCard-image">
                    <img src={thumbnail} alt="" />
                  </figure>
                  <div className="bookCard-header">
                    {title}
                    <button className="icon-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="Heart">
                        <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
                      </svg>

                    </button>
                  </div>
                  <div className="bookCard-footer">
                    {pages} pages
                  </div>
                </article>
                </>
        );
        }
      })}
      <Modal show={show} item={bookItem} onClose={() => setShow(false)}/>
    </>
  );
}

export default Card;
