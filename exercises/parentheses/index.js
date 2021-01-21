/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for (let p of s){
      if(p == '[' || p == '{' || p == '(' ) {
          stack.push(p);
      } else {
        if(p == ']' && '[' != stack.pop()){
          return false;
        }
        if(p == '}' && '{' != stack.pop()){
          return false;
        }
        if(p == ')' &&  '(' != stack.pop()){
          return false;
        }
      }
      
 
  }
  return stack.length === 0;


};


      
console.log(isValid('{[]}'));
  