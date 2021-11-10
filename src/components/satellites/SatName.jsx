import { nameOnChange, satFormSubmit } from "../../helper/helper";
import { useContext } from "react";
import StateContext from "../../context/StateContext";

const SatName = () => {
  const { satName, setSatName, satNameArray, setSatNameArray, satNameUrl } =
    useContext(StateContext);
  return (
    <div className="card">
      <h3>Input the Name</h3>
      <form
        action=""
        onSubmit={(e) =>
          satFormSubmit(e, satNameUrl, setSatNameArray, setSatName)
        }
      >
        <input
          type="text"
          onChange={(e) => nameOnChange(e, setSatName)}
          value={satName}
        />
        <button type="submit">Search</button>
      </form>
      <h4>{satNameArray.name}</h4>
      {satNameArray && (
        <ul className="info">
          <li>Density: {satNameArray.density} g/cm3</li>
          <li>Gavity: {satNameArray.gm} km3/sec2</li>
          <li>Radius: {satNameArray.radius} km</li>
          <li>Albedo: {satNameArray.albedo}</li>
        </ul>
      )}
    </div>
  );
};

export default SatName;
