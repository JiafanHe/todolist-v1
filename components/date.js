
// exports works same as module.exports
// exports is an object
// By using exports.<variable name> = value or
// exports.<function name>(parameter) = function(parameter){},
// we can export several variables or functions at the same time.


exports.getDate = function(){
  const date = new Date();
  const option = {
    weekday:"long",
    month:"long",
    day:"numeric"
  };

  // format the date
  return date.toLocaleDateString("en-US",option);
}

exports.getDay = function(){
  const date = new Date();
  const option = {
    weekday:"long"
  };

  // format the date
  return date.toLocaleDateString("en-US",option);
}
