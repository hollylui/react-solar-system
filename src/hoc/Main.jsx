import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StateContext from "../context/StateContext";
import Home from "../components/home";
import Planets from "../components/planets";
import Satellities from "../components/satellites";

const {
  satSizeFunction,
  satDensityFunction,
  planetSizeFunction,
  planetMoonFunction,
  planetSunFunction,
  planetTempFunction,
  planetDayFunction,
} = require("../helper/helper");

//! component ------------------------------------------------------------
const Main = () => {
  //! useState --------------------------------------------
  // satellites--------------
  const [satSize, setSatSize] = useState("");
  const [satSizeStatement, setSatSizeStatement] = useState("");

  const [density, setDensity] = useState("");
  const [densityStatement, setDensityStatement] = useState("");

  // planets--------------
  const [planetSize, setPlanetSize] = useState("");
  const [planetSizeStatement, setPlansetSizeStatement] = useState("");

  const [moon, setMoon] = useState("");
  const [moonStatement, setMoonStatement] = useState("");

  const [sun, setSun] = useState("");
  const [sunStatement, setSunStatement] = useState("");

  const [temp, setTemp] = useState("");
  const [tempStatement, setTempStatement] = useState("");

  const [day, setDay] = useState("");
  const [dayStatement, setDayStatement] = useState("");

  const [satName, setSatName] = useState();
  const [satNameArray, setSatNameArray] = useState(false);

  const [planetName, setPlanetName] = useState();
  const [planetNameArray, setPlanetNameArray] = useState(false);

  //! urls -----------------------------------------
  const satUrl = "http://localhost:3001/satellite";
  const planetUrl = "http://localhost:3001/planets";

  const satSizeUrl = `${satUrl}/size?pick=${satSize}`;
  const satDensityUrl = `${satUrl}/density?pick=${density}`;
  const satNameUrl = `${satUrl}/find/${satName}`;

  const planetSizeUrl = `${planetUrl}/size?pick=${planetSize}`;
  const planetMoonUrl = `${planetUrl}/moons?pick=${moon}`;
  const planetSunUrl = `${planetUrl}/sun?pick=${sun}`;
  const planetTempUrl = `${planetUrl}/temperature?pick=${temp}`;
  const planetDayUrl = `${planetUrl}/day?pick=${day}`;
  const planetNameUrl = `${planetUrl}/find/${planetName}`;

  //! useEffect ------------------------------------
  // satellites--------------
  // size
  useEffect(() => {
    satSizeFunction(satSize, satSizeUrl, setSatSizeStatement);
  }, [satSize]);

  // Density
  useEffect(() => {
    satDensityFunction(density, satDensityUrl, setDensityStatement);
  }, [density]);

  // planets--------------
  // size
  useEffect(() => {
    planetSizeFunction(planetSize, planetSizeUrl, setPlansetSizeStatement);
  }, [planetSize]);

  // Moon
  useEffect(() => {
    planetMoonFunction(moon, planetMoonUrl, setMoonStatement);
  }, [moon]);

  // Sun
  useEffect(() => {
    planetSunFunction(sun, planetSunUrl, setSunStatement);
  }, [sun]);

  //Temperature
  useEffect(() => {
    planetTempFunction(temp, planetTempUrl, setTempStatement);
  }, [temp]);

  // Day
  useEffect(() => {
    planetDayFunction(day, planetDayUrl, setDayStatement);
  }, [day]);

  //! props -----------------------------------------
  const props = {
    satName,
    setSatName,
    satNameArray,
    setSatNameArray,
    satNameUrl,

    satSize,
    satSizeStatement,
    satSizeUrl,
    setSatSize,

    density,
    setDensity,
    satDensityUrl,
    densityStatement,
    setDensityStatement,

    planetSize,
    setPlanetSize,
    planetSizeStatement,
    planetSizeUrl,

    moon,
    setMoon,
    moonStatement,
    planetMoonUrl,

    sun,
    setSun,
    sunStatement,
    planetSunUrl,

    temp,
    setTemp,
    tempStatement,
    planetTempUrl,

    day,
    setDay,
    dayStatement,
    planetDayUrl,

    planetName,
    setPlanetName,
    planetNameArray,
    setPlanetNameArray,
    planetNameUrl,
  };

  //! rending ----------------------------------------
  return (
    <StateContext.Provider value={{ ...props }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/planets" element={<Planets />} />
          <Route exact path="/satellites" element={<Satellities />} />
        </Routes>
      </Router>
    </StateContext.Provider>
  );
};

export default Main;
