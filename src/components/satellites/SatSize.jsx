import { satSizeButton } from "../../helper/helper";
import { useContext } from "react";
import StateContext from "../../context/StateContext";

const SatSize = () => {
  const { satSize, setSatSize, satSizeStatement } = useContext(StateContext);
  return (
    <div className="card">
      <button onClick={(e) => satSizeButton(e, setSatSize)} value="largest">
        Largest
      </button>

      <button onClick={(e) => satSizeButton(e, setSatSize)} value="smallest">
        Smallest
      </button>
      <h3>{satSize} Size</h3>
      {satSize && <p>{satSizeStatement}</p>}
    </div>
  );
};

export default SatSize;
