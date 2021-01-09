/*

Front-end Challenge
We provided some simple React template code. Your goal is to modify the component so that the counter correctly displays and it increments by one whenever the button is pressed. You are free to add classes and styles, but make sure you leave the element ID's as they are.

Submit your code once it is complete and our system will validate your output.

*/


import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CountDisplay = (props) => {
  return <p>{ props.currentCount }</p>;
};

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentCount: 0};
  }

  handleIncrement(event) {
    this.setState({currentCount: this.state.currentCount + 1});
  }

  render() {
    return (
      <div id="mainArea">
        <p>button count: <CountDisplay 
        currentCount={this.state.currentCount}
      /></p>
        <button id="mainButton" onClick={this.handleIncrement.bind(this)}>Increase</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);

/*

Front-end Challenge
We provided a simple HTML template. Your goal is to replace the h1 tag with a table. The table should have 3 rows and 3 columns. The table headers (which counts as the first row) should be FirstName, LastName, and Age. The other two rows should be filled in with some random name data and age data, as long as the names contain only alphabetical characters and the age cell contains only a numeric value.

*/

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Challenge</title>
  </head>
  <body>
    <table>
      <tr>
        <th>First Name</th>
        <td>Wesley</td>
        <td>Alan</td>
        <td></td>
      </tr>
      <tr>
        <th>Last Name</th>
        <td>Adao</td>
        <td>Nascimento</td>
      </tr>
      <tr>
        <th>Age</th>
        <td>32</td>
        <td>30</td>
      </tr>
    </table>
  </body>
</html>


/*

Math Challenge
Have the function MathChallenge(num) return the string yes if the number given is part of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no.

*/

function MathChallenge(num) { 

var fibonacci = [0,1];

  for (var i=0; i<num; i++ ) {

    fibonacci.push(fibonacci[i]+fibonacci[i+1]);

  }

  if (fibonacci.indexOf(num)!=-1) {

    return "yes";

  }else{

	return "no";
 
 }

}

console.log(MathChallenge(readline()));

/*

Array Challenge
Have the function ArrayChallenge(arr) take the array of numbers stored in arr and return the string true if any two numbers can be multiplied so that the answer is greater than double the sum of all the elements in the array. If not, return the string false. For example: if arr is [2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then the sum of all these elements is 42 and doubling it is 84. There are two elements in the array, 16 * 6 = 96 and 96 is greater than 84, so your program should return the string true.
Examples
Input: [2, 2, 2, 2, 4, 1]
Output: false
Input: [1, 1, 2, 10, 3, 1, 12]
Output: true

*/

function ArrayChallenge(arr) { 
  
  const somaA = (a, b) => a + b;
  var totalArray = 0, totalMaior = 0, maior2 = 0;
  var somaArray = arr.reduce(somaA);
  var maior1 = arr.reduce(function(a, b) {
    
    return Math.max(a, b);
    
  });
  
  for (var i = 0; i < arr.length; i++) { 

    if((arr[i] < maior1) && (arr[i] > maior2)) {
      
      maior2 = arr[i];
    
    }
  }

  totalArray = somaArray * 2;
  totalMaior = maior1 * maior2;

  if (totalMaior > totalArray) {

    return true;

  }else{
    
    return false;

  }

}
console.log(ArrayChallenge(readline()));

/*

Recursion Challenge
Have the function RecursionChallenge(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
Examples
Input: 4
Output: 24
Input: 8
Output: 40320


*/

function RecursionChallenge(num) { 

  if (num == 0){
  
    return 1;
  
  }else{
  
    return num * RecursionChallenge(num - 1);

  }

}

console.log(RecursionChallenge(readline()));