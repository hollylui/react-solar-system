import { planetSizeButton } from "../../helper/helper";
import { useContext } from "react";
import StateContext from "../../context/StateContext";

const PlanetSize = () => {
  const { planetSize, setPlanetSize, planetSizeStatement } =
    useContext(StateContext);
  return (
    <div className="card">
      <button
        onClick={(e) => planetSizeButton(e, setPlanetSize)}
        value="largest"
      >
        Largest
      </button>
      <span>|</span>
      <button
        onClick={(e) => planetSizeButton(e, setPlanetSize)}
        value="smallest"
      >
        Smallest
      </button>
      <h3>{planetSize} Size</h3>
      {planetSize && <p>{planetSizeStatement}</p>}
    </div>
  );
};

export default PlanetSize;
