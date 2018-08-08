// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const lowerCased = drivers.map(function(name){
    return name.toLowerCase();
  });
  return lowerCased;
}
