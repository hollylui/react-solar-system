import { sunButton } from "../../helper/helper";
import { useContext } from "react";
import StateContext from "../../context/StateContext";

const Sun = () => {
  const { sun, setSun, sunStatement } = useContext(StateContext);
  return (
    <div className="card">
      <button onClick={(e) => sunButton(e, setSun)} value="furthest">
        Furthest
      </button>
      <span>|</span>
      <button onClick={(e) => sunButton(e, setSun)} value="closest">
        Closest
      </button>
      <h3>{sun} from Sun</h3>
      {sun && <p>{sunStatement}</p>}
    </div>
  );
};

export default Sun;
