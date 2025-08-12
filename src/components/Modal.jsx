import "../css/Modal.css";

function Modal({show, item, onClose}) {
  if(!show){
    return null;
  }

  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  let title = item.volumeInfo.title && item.volumeInfo.title;

  return (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <nav>
        <svg
          className="cross"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={onClose}
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </nav>

      <div className="photo">
        <img src={thumbnail} alt="" />
      </div>

      <div className="description">
        <h2>{title}</h2>
        <h4>{item.volumeInfo.authors && + " " + item.volumeInfo.authors}</h4>
        <p>
          {item.volumeInfo.description && item.volumeInfo.description}
        </p>
        <button><a href={item.volumeInfo.previewLink && item.volumeInfo.previewLink} target="blank">More Info</a></button>
      </div>
    </div>
  </div>
);

}

export default Modal;
