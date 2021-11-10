import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Assignment: React-Solar-System</h1>

      <Link to="/satellites" className="link">
        Satellites
      </Link>
      <Link to="/planets" className="link">
        Planets
      </Link>
    </div>
  );
};

export default Home;
