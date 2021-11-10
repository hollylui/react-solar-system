import { dayButton } from "../../helper/helper";
import { useContext } from "react";
import StateContext from "../../context/StateContext";

const Day = () => {
  const { day, setDay, dayStatement } = useContext(StateContext);
  return (
    <div className="card">
      <button onClick={(e) => dayButton(e, setDay)} value="longest">
        Longest
      </button>
      <span>|</span>
      <button onClick={(e) => dayButton(e, setDay)} value="shortest">
        Shortest
      </button>
      <h3>{day} Day</h3>
      {day && <p>{dayStatement}</p>}
    </div>
  );
};

export default Day;
