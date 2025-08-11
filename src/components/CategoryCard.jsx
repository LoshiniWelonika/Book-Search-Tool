import "../css/CategoryCard.css";

function CategoryCard(){
    let image = "https://i.imgur.com/QYWAcXk.jpeg";
    return(
        <article className="card">
  <img
    className="card__background"
    src={image} 
    width="1920"
    height="2193"
  />
  <div className="card__content | flow">
    <div className="card__content--container | flow">
      <h2 className="card__title">Colombia</h2>
      <p className="card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
        labore laudantium deserunt fugiat numquam.
      </p>
    </div>
    <button className="card__button">Read more</button>
  </div>
</article> 
    )
}

export default CategoryCard;