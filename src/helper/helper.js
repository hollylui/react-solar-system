import axios from "axios";

// !Satellites --------------------------
// size ------------
export const satSizeButton = (e, setSatSize) => {
  setSatSize(e.target.value);
};

export async function satSizeFunction(size, satSizeUrl, setSizeStatement) {
  if (size) {
    const response = await axios.get(satSizeUrl);
    setSizeStatement(response.data);
  }
}

// density --------------
export async function satDensityFunction(
  density,
  satDensityUrl,
  setDensityStatement
) {
  if (density) {
    const response = await axios.get(satDensityUrl);
    setDensityStatement(response.data);
  }
}

export const densityButton = (e, setDensity) => {
  setDensity(e.target.value);
};

// name -------------------
export const satFormSubmit = async (
  e,
  satNameUrl,
  setSatNameArray,
  setSatName
) => {
  e.preventDefault();
  const response = await axios.get(satNameUrl);
  setSatNameArray(response.data);
  setSatName("");
};

//! Planets ----------------------------

// size--------------------
export async function planetSizeFunction(
  planetSize,
  planetSizeUrl,
  setPlansetSizeStatement
) {
  if (planetSize) {
    const response = await axios.get(planetSizeUrl);
    console.log(response.data);
    setPlansetSizeStatement(response.data);
  }
}

export const planetSizeButton = (e, setPlanetSize) => {
  setPlanetSize(e.target.value);
};

// moon---------------------
export async function planetMoonFunction(
  moon,
  planetMoonUrl,
  setMoonStatement
) {
  if (moon) {
    const response = await axios.get(planetMoonUrl);
    setMoonStatement(response.data);
  }
}

export const moonButton = (e, setMoon) => {
  setMoon(e.target.value);
};

// sun----------------------
export async function planetSunFunction(sun, planetSunUrl, setSunStatement) {
  if (sun) {
    const response = await axios.get(planetSunUrl);
    setSunStatement(response.data);
  }
}

export const sunButton = (e, setSun) => {
  setSun(e.target.value);
};

// temperature ----------------
export async function planetTempFunction(
  temp,
  planetTempUrl,
  setTempStatement
) {
  if (temp) {
    const response = await axios.get(planetTempUrl);
    setTempStatement(response.data);
  }
}

export const tempButton = (e, setTemp) => {
  setTemp(e.target.value);
};

// day ---------------------------
export async function planetDayFunction(day, planetDayUrl, setDayStatement) {
  if (day) {
    const response = await axios.get(planetDayUrl);
    setDayStatement(response.data);
  }
}

export const dayButton = (e, setDay) => {
  setDay(e.target.value);
};

// name --------------------------------
export const planetFormSubmit = async (
  e,
  planetNameUrl,
  setPlanetNameArray,
  setPlanetName
) => {
  e.preventDefault();
  const response = await axios.get(planetNameUrl);
  setPlanetNameArray(response.data);
  setPlanetName("");
};

//! For both ------------------------------

export const nameOnChange = (e, setName) => {
  setName(e.target.value);
};
