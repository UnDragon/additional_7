module.exports = function solveSudoku(matrix) { 
var array = matrix; 

for (var i = 0; i < matrix.length; i ++){ 
for (var j = 0; j < matrix[i].length; j++){ 
if (matrix[i][j] == 0) { 
if ((compareArrays(compareArrays(checkRow(matrix, i),checkColon(matrix, j)), checkSection(matrix, j, i))).length == 1) { 
array[i][j] = compareArrays(compareArrays(checkRow(matrix, i),checkColon(matrix, j)), checkSection(matrix, j, i))[0]; 
} 
if ((compareArrays(compareArrays(checkRow(matrix, i),checkColon(matrix, j)), checkSection(matrix, j, i))).length > 1) { 
array[i][j] = compareArrays(compareArrays(checkRow(matrix, i),checkColon(matrix, j)), checkSection(matrix, j, i)); 
} 
} 
} 
} 
return array; 
} 


function checkRow(matrix, y) { 
var numbers = [1,2,3,4,5,6,7,8,9]; 
for (var i = 0; i < 9; i++){ 
for (var j = 0; j < 9; j++){ 
if (matrix[y][i] == numbers[j]) { 
numbers.splice(j, 1); 
} 
} 
} 
return numbers; 
} 

function checkColon(matrix, x) { 
var numbers = [1,2,3,4,5,6,7,8,9]; 
for (var i = 0; i < 9; i++){ 
for (var j = 0; j < 9; j++){ 
if (matrix[i][x] == numbers[j]) { 
numbers.splice(j, 1); 
} 
} 
} 
return numbers; 
} 

function checkSection(matrix, x, y){ 
var i, k; 
if (x <= 2) k = 0; 
if (2 < x && x <= 5) { 
k = 3; 
} 
if (5 < x && x <= 8) { 
k = 6; 
} 

if (y <= 2) { 
i = 0; 
} 
if (2 < y && y <= 5) { 
i = 3; 
} 
if (5 < y && y <= 8) { 
i = 6; 
} 
return checkSectionAdditional(matrix, k, i); 

} 

function checkSectionAdditional(matrix, x, y) { 
var numbers = [1,2,3,4,5,6,7,8,9]; 
for (var k = x; k < x+3; k++){ 
for (var i = y; i < y+3; i++){ 
for (var j = 0; j < numbers.length; j++){ 
if (matrix[i][k] == numbers[j]) { 
numbers.splice(j, 1); 
} 
} 
} 
} 
return numbers; 
} 

function compareArrays(arr1, arr2){ 
var arr = []; 
for (var i = 0; i < arr1.length; i ++){ 
for (var j = 0; j < arr2.length; j++){ 
if (arr2[j] == arr1[i]) { 
arr.push(arr1[i]); 
} 
} 
} 
return arr; 
}
