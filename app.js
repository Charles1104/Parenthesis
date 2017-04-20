/*jshint esversion: 6 */

function parenthesesAreBalanced(string) {

  let parentheses = "[]{}()<>";
  let stack = [];
  let bracePosition = 0;

  for(let i = 0; i < string.length; i++) {

    bracePosition = parentheses.indexOf(string[i]);

    //Check if the character is any kind of parentheses. If it is not, it jumps to the next character
    if(bracePosition === -1) {
      continue;
    }

    //If remainder of the position is equal to 0, it means it is an opening parenthesis
    if(bracePosition % 2 === 0) {
      stack.push(bracePosition + 1); // this pushes the closing parenthesis into the stack array
    } else {
      // This checks that if either there is a closing parenthesis with an empty stack or if the closing parenthesis doesn't have a opening parenthesis match then it returns false.
      if(stack.length === 0 || stack[stack.length - 1] !== bracePosition) {
        return false;
      }
      stack.pop(); //in case it did not return false, need to remove the last element from the stack
    }
  }

  if(stack.length === 0){
    return true;
  }else{
    return false;
  }
}

module.exports = parenthesesAreBalanced;

