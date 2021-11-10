import { densityButton } from "../../helper/helper";
import { useContext } from "react";
import StateContext from "../../context/StateContext";

const Density = () => {
  const { density, setDensity, densityStatement } = useContext(StateContext);
  return (
    <div className="card">
      <button onClick={(e) => densityButton(e, setDensity)} value="highest">
        Densest
      </button>
      <span>|</span>
      <button onClick={(e) => densityButton(e, setDensity)} value="lowest">
        Least
      </button>
      <h3>
        {density === "" ? "" : density === "lowest" ? "Least " : "Densest "}
        Dense
      </h3>
      {density && <p>{densityStatement}</p>}
    </div>
  );
};

export default Density;
