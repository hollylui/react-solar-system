import { nameOnChange, planetFormSubmit } from "../../helper/helper";
import { useContext } from "react";
import StateContext from "../../context/StateContext";

const PlanetName = () => {
  const {
    planetName,
    setPlanetName,
    planetNameArray,
    setPlanetNameArray,
    planetNameUrl,
  } = useContext(StateContext);
  return (
    <div className="card">
      <h3>Input the Name</h3>
      <form
        action=""
        onSubmit={(e) =>
          planetFormSubmit(e, planetNameUrl, setPlanetNameArray, setPlanetName)
        }
      >
        <input
          type="text"
          onChange={(e) => nameOnChange(e, setPlanetName)}
          value={planetName}
        />
        <button type="submit">Search</button>
      </form>
      <h4>{planetNameArray.name}</h4>
      {planetNameArray && (
        <ul className="info">
          <li>Diamenter: {planetNameArray.diameter} km</li>
          <li>Density: {planetNameArray.density} g/cm3</li>
          <li>Gavity: {planetNameArray.gm} km3/sec2</li>
          <li>Mass: {planetNameArray.mass} kg</li>
        </ul>
      )}
    </div>
  );
};

export default PlanetName;
