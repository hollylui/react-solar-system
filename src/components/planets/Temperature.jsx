import { tempButton } from "../../helper/helper";
import { useContext } from "react";
import StateContext from "../../context/StateContext";

const Temperature = () => {
  const { temp, setTemp, tempStatement } = useContext(StateContext);
  return (
    <div className="card">
      <button onClick={(e) => tempButton(e, setTemp)} value="hottest">
        Hottest
      </button>{" "}
      <span>|</span>
      <button onClick={(e) => tempButton(e, setTemp)} value="coldest">
        Coldest
      </button>
      <h3>{temp} Temperature</h3>
      {temp && <p>{tempStatement}</p>}
    </div>
  );
};

export default Temperature;
