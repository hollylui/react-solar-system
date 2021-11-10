import { moonButton } from "../../helper/helper";
import { useContext } from "react";
import StateContext from "../../context/StateContext";

const Moons = () => {
  const { moon, setMoon, moonStatement } = useContext(StateContext);
  return (
    <div className="card">
      <button onClick={(e) => moonButton(e, setMoon)} value="most">
        Most
      </button>
      <span>|</span>
      <button onClick={(e) => moonButton(e, setMoon)} value="none">
        Without moon
      </button>
      <h3>{moon === "none" ? "Without Moon" : `${moon} Moons`}</h3>
      {moon && <p>{moonStatement}</p>}
    </div>
  );
};

export default Moons;
