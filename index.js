// Code your solution here

const findMatching = (drivers, name) => {
  const matchingDrivers = drivers.filter((driver) => {
    return driver.toLowerCase() === name.toLowerCase();
  });
  return matchingDrivers;
};

const fuzzyMatch = (drivers, letters) => {
  const matchingDrivers = drivers.filter((driver) => {
    return driver.slice(0, letters.length) === letters;
  });
  console.log(matchingDrivers);
  return matchingDrivers;
};

const matchName = (drivers, name) => {
  const matchingDrivers = drivers.filter((driver) => {
    return driver.name === name;
  });
  return matchingDrivers;
};
