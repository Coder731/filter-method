  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0,1,2,3,4];
// .reduce() method has 3 parts: accumulator, current value, and initial value/
let sum = nums.reduce((acc, curr) => acc + curr, 0); // specify initial value // simplified callback with init val of 0
console.log(sum);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'Mark',
    profession: 'Manager',
    yrsExperience: 10
  }
];

// Part 2:
// Totaling a specific object property


// only difference here to  above is that its executing on an object now instead of an individual number.
// so instead of adding the elements up
// we need to dive into it using dot notation to 
// get the yrsExperience
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0); // we are just adding 
                                                                        // current.yrsExperience to the accumulator 
                                                                        // on each pass of the callback function
                                                                        // NOTE: if do not specify initial value
                                                                        // it tries to add an object and an integer together
                                                                        // end up with unusual
                                                                        //  object string integer hybrid
                                                                        // not good
                                                                        // so alsways specify initial value.
console.log(totalExperience);

// Grouping by a property, and totaling it too

// what we want:
// {Developer: 12, Designer: 4}
let experienceByProfession = teamMembers.reduce((acc, curr) => {// first set of braces is the boundary of the callback function
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {}); // second set of braces, after the comma is our inital value, an empty object.  (This is what the accumulator will be on the first pass.)

console.log(experienceByProfession);