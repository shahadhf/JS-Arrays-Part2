/** TASK 1******
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
    // Your code here
Function isArrayLengthOdd(numbers) {
    const sizeOfArray = numbers.length;
    if (sizeOfArray % 2) {
        return true;
        else { 
            return false;
        }
    }
}

  }
//console.log (isArrayLengthOdd)([1 ,2 ,3 ,4])


  /**TASK 2******
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
    // Your code here
    function isArrayLengthEven(numbers) {
        if (numbers.length % 2) {
            return false;
            else {
                return true;
            }
        }
    }
  }

//console.log(isArrayLengthEven) ([1, 2, 3, 4])


  /** TASK 3*******
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
    // Your code here
    function addLailaToArray (instructors) {
        const newInstructors = instructors;
        newInstructors.push ("Laila");
        return newInstructors;

    }

  }
  
  //console.log (addLailaToArray (["Mshary", "hasan"]))



  /** TASK 4 ******
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
    // Your code here
const lastTeam = teams.pop ();
return lastTeam;
  }

//console.log(eliminateTeam(["Brazil", "Germany", "Italy"]))