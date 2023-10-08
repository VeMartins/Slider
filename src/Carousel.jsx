import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = ({
  people,
  index,
  handleNextPerson,
  handlePreviousPerson,
}) => {
  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            key={id}
            style={{
              transform: `translateX(${100 * (personIndex - index)}%)`,
              opacity: personIndex === index ? 1 : 0,
              visibility: personIndex === index ? "visible" : "hidden",
            }}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name"> {name}</h5>
            <p className="title">{title} </p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button
        type="button"
        className="prev"
        onClick={() => handlePreviousPerson(index)}
      >
        {" "}
        <FiChevronLeft />
      </button>
      <button
        type="button"
        className="next"
        onClick={() => handleNextPerson(index)}
      >
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
