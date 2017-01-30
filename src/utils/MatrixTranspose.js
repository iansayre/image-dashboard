/**
 * Created by PankajK1 on 12/16/2015.
 */

 function matrixTranspose(a) {
  const rowCount = a.length ? a.length : 0;
  const colCount = a[0] instanceof Array ? a[0].length : 0;

  // In case it is a zero matrix, no transpose routine needed.
  if(colCount === 0 || rowCount === 0) { return []; }

  let t = [];

  for(let col=0; col<colCount; col++) {
    t[col] = [];
    for(let row=0; row<rowCount; row++) {
      t[col][row] = a[row][col];
    }
  }
  return t;
};

export default matrixTranspose;
