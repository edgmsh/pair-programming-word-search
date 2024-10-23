const transpose = function(matrix) {
    // Replace this code with your solution
    let outMax = [];
    let tempArray = [];
    for (let i = 0; i < matrix[0].length; i ++) {
      for (let x = 0; x < matrix.length; x ++) {
        tempArray.push(matrix[x][i]);
      }
      outMax.push(tempArray);
      tempArray = [];
    }
  
    return outMax;
  }

const wordSearch = (letters, word) => { 
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    return false;
}


module.exports = wordSearch