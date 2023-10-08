import Carousel from "./Carousel";
import SlickCarousel from "./ReactLibrarySlickCarousel";
import { longList } from "./data";
import { useState, useEffect } from "react";

const App = () => {
  const [people, setPeople] = useState(longList);
  const [index, setIndex] = useState(0); //current person

  const sizeOfList = people.length - 1;

  const handleNextPerson = (idx) => {
    const nextPerson = idx + 1;
    if (nextPerson > sizeOfList) {
      return setIndex(0);
    }
    return setIndex(nextPerson);
  };
  const handlePreviousPerson = (idx) => {
    const prevPerson = idx - 1;
    if (prevPerson < 0) {
      return setIndex(sizeOfList);
    }
    return setIndex(prevPerson);
  };
  useEffect(() => {
    let sliderId = setInterval(() => handleNextPerson(index), 3000);
    return () => clearInterval(sliderId);
  }, [index]);

  return (
    <main>
      {/* <Carousel
        people={people}
        index={index}
        handleNextPerson={handleNextPerson}
        handlePreviousPerson={handlePreviousPerson}
      /> */}
      <SlickCarousel />
    </main>
  );
};
export default App;
