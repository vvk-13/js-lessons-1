let body = document.querySelector('body');

let desk = document.createElement('table');
desk.className = 'desk';
body.appendChild(desk);

let size = 8;

let WF = ["&#9817;", "&#9814;", "&#9816;", "&#9815;",
                   "&#9812;", "&#9813;", "&#9815;", "&#9816;", "&#9814;"];
 
let BF = ['&#9823;', "&#9820;", "&#9822;", "&#9821;",
                    "&#9818;", "&#9819;", "&#9821;", "&#9822;", "&#9820;"];

let tmpStr = " ABCDEFGH ";
let arrOfChar = tmpStr.split("");
let tmpNum = "87654321";
let arrOfNum = tmpNum.split("");

let row = document.createElement('tr');
for (let i = 0; i < size + 2; i++) {
  let col = document.createElement('td');
  col.className = 'cell letters';
  col.innerHTML = arrOfChar[i];
  row.appendChild(col);
}
desk.appendChild(row)

let chessDesk = [[]];

chessDeskCreate(desk, chessDesk);

function chessDeskCreate(desk, chessDesk) {
  for (let i = 0; i < size; i++) {
    let row = document.createElement('tr');
    desk.appendChild(row);
    for (let j = 0; j < size +2; j++) {
      let col = document.createElement('td');
      if (j == 0) {
        col.className = 'cell LeftNum';
        col.innerHTML = arrOfNum[i];
        row.appendChild(col);
      } else if (j == 9) {
        col.className = 'cell RightNum';
        col.innerHTML = arrOfNum[i];
        row.appendChild(col);
      } else
      col.className = 'cell field';
      row.appendChild(col);
      if (i == 0 && (j != 0 && j != 9)) {
        col.innerHTML = BF[j];
        row.appendChild(col);
      } else if (i == 1 && ( j != 0 && j != 9)) {
        col.innerHTML = BF[0];
        row.appendChild(col);
      } else if (i == 6 && (j != 0 && j != 9)) {
        col.innerHTML = WF[0];
        row.appendChild(col);
      } else if (i == 7 && (j != 0 && j != 9)) {
        col.innerHTML = WF[j];
        row.appendChild(col);
      } 
    } 
  }
}

let fRow = document.createElement('tr');
for (let i = 0; i < size + 2; i++) {
  let col = document.createElement('td');
  col.className = 'cell letters';
  col.innerHTML = arrOfChar[i];
  fRow.appendChild(col);
}
desk.appendChild(fRow);

