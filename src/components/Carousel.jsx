import "../css/Carousel.css";
import CategoryCard from "./CategoryCard";

function Carousel() {
  return (
    <div className="carousel-container">
      <input type="radio" name="position" id="pos1" defaultChecked />
      <input type="radio" name="position" id="pos2" />
      <input type="radio" name="position" id="pos3" />
      <input type="radio" name="position" id="pos4" />
      <input type="radio" name="position" id="pos5" />

      <main id="carousel">
        <CategoryCard className="item"/>
        <CategoryCard className="item"/>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </main>
    </div>
  );
}

export default Carousel;
