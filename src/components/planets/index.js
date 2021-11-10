import { Link } from "react-router-dom";
import Day from "./Day";
import Moons from "./Moons";
import PlanetName from "./PlanetName";
import PlanetSize from "./PlanetSize";
import Sun from "./Sun";
import Temperature from "./Temperature";

const Planets = () => {
  return (
    <div className="container">
      <h2>Planet's</h2>
      <Link exact to="/" className="link">
        Home
      </Link>
      <Link to="/satellites" className="link">
        Satellites
      </Link>

      <div className="cards">
        <PlanetName />
        <PlanetSize />
        <Moons />
        <Sun />
        <Temperature />
        <Day />
      </div>
    </div>
  );
};

export default Planets;
