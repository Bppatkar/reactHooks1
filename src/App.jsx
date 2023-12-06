import React, { useState } from "react";
import data from "./data.jsx";
import Tours from "./Components/Tours.jsx";
const App = () => {
  const [tours, setTours] = useState(data);
  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>Sorry😢😥😔 !!! </h2>
        <button className="btnWhite" onClick={() => setTours(data)}>Go Back...😊😉</button>
      </div>
    )
  }

  return (
    <div>
      <Tours tours={tours} removeTours={removeTour} />
    </div>
  );
};

export default App;
