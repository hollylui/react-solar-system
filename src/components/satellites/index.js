import { Link } from "react-router-dom";
import Density from "./Density";
import SatName from "./SatName";
import SatSize from "./SatSize";

const Satellities = () => {
  return (
    <div className="container">
      <h2>Satellite's</h2>{" "}
      <Link exact to="/" className="link">
        Home
      </Link>
      <Link to="/planets" className="link">
        Planets
      </Link>
      <div className="cards">
        <SatName />
        <SatSize />
        <Density />
      </div>
    </div>
  );
};

export default Satellities;
