
function sum(fromN, toN) {
  if(fromN < toN)
    return fromN + sum(fromN+1, toN);
  return toN;  
}
// console.log(sum(3,7));

module.exports = sum;