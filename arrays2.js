//Task 1

function isArrayLengthOdd(numbers) {
  const sizeOfArray = numbers.length;
  if (sizeOfArray % 2) {
    return true;
  } else {
    return false;
  }
}
//console.log(isArrayLengthOdd([1, 2, 3, 4]));

//Task 2

function isArrayLengthEven(numbers) {
  if (numbers.length % 2) {
    return false;
  } else {
    return true;
  }
}

//console.log(isArrayLengthEven([1, 2, 3, 4]));

//Task 3

function addLailaToArray(instructors) {
  const newInstructors = instructors;
  newInstructors.push("Laila");
  return newInstructors;
}

//console.log (addLailaToArray(["Mshary", "Hasan"]))

//Task 4

function eliminateTeam(teams) {
  const lastTeam = teams.pop();
  return lastTeam;
}

//console.log (eliminateTeam(["Brazil", "Germany", "Italy"]));

//Challenge 1

function secondHalfOfArrayIfItIsEven(fruits) {
  if (isArrayLengthEven(fruits)) {
    return fruits.slice(0, 2);
  }
}

//console.log(secondHalfOfArrayIfItIsEven (["apple", "orange", "banana", "kiwi"]));

//Challenge 2

function youGottaCalmDown(shout) {
  if (shout[shout.length - 1] !== "!") {
    return shout;
  }
}

//console.log (youGottaCalmDown ("Hello"));
