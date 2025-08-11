import "../css/Card.css";

function Card({ books }) {
  const fallbackImage =
    "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=2126&q=80";

  return (
    <>
      {books.map((item, index) => {
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let title = item.volumeInfo.title && item.volumeInfo.title;
        let author = item.volumeInfo.authors[0];

        if (thumbnail != undefined){
               return (
	<article className="card">
	<figure className="card-image">
		<img src={thumbnail} alt="" />
	</figure>
	<div className="card-header">
		<a href="#">{title}</a>
	</div>
	<div className="card-footer">
		<div className="card-meta card-meta--views">
			{author}
		</div>
	</div>
</article>
        );
        }
      })}
    </>
  );
}

export default Card;
