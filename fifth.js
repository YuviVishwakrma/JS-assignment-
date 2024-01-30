var x = "HIMANSHU";

if (true) {
  var x = "YUVRAJ";
}
console.log(x); 


// Outputs is YUVRAJ - This is showing only new value passing in variables.. 
// var has function scope. it declare inside the function,its only access within that function. if declared  outside any function ,it has global scope 
// var allow reassign as well.
let y = "HIMANSHU";

if (true) {
  let y = "YUVRAJ";
}
console.log(y); 

// Outputs is HIMANSHU - This is shwoing existing variable value.
// let have block scope.they are only access within the block(enclosed by curly braces).
// let allow reassign as well.


const z = "HIMANSHU";

if (true) {
  const z = "YUVRAJ";
}
console.log(z); 
// Outputs is HIMANSHU - once a variable is assign using const,its value cannot bhi change.
// const have block scope.they are only access within the block(enclosed by curly braces).
// const does'not allow  reassign after the variable is declare.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// LIMITATIONS 

/*VAR 

1-Hoisted to the top of its scope.
2-Function-scoped, not block-scoped.
3-Allows reassign.
4-Not affected by the Temporal Dead Zone (TDZ).
5-Allows redeclaration in the same scope.
6-Creates properties on the global object.
7-Allows use before declaration.*/


/*let 

1-Hoisted, but not initialized until the declaration statement is encountered.
2-Block-scoped.
3-Allows reassignment.
4-Affected by the Temporal Dead Zone (TDZ).
5-Does not allow redeclaration in the same scope.*/

/*const

1-Hoisted, but not initialized until the declaration statement is encountered.
2-Block-scoped.
3-Does not allow reassignment after declaration.
4-Affected by the Temporal Dead Zone (TDZ).
5-Does not allow redeclaration in the same scope.
6-Does not create properties on the global object.*/



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// use cases 

/*var

1-Used in pre-ES6 JavaScript for variable declaration.
2-In situations where you deliberately want to leverage hoisting.
3-When you need a variable to be function-scoped rather than block-scoped.
4-When working with legacy codebases. */


/*let
1-Preferred for variable declaration in modern JavaScript.
2-When you need a variable to be block-scoped.
3-When you need to reassign the variable.
4-Use it in loops where you want to create a new binding for each iteration
*/

/*const
1-Preferred when the variable should not be reassigned after declaration.
2-When you want to make the variable value immutable, although it doesn't prevent changes to object or array internals.
3-Use it for constants, configuration values, or any variable that shouldn't change.
4-Enhances code readability by signaling that the variable is not meant to be reassigned*/