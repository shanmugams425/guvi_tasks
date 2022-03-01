// Write a code to print the numbers in the array
// Output: 1234567891011
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
}
console.log(new_string);


// Write a code to print the numbers in the array
// Output: 1,2,3,4,5,6,7,8,9,10,11
var numsArr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string1 = "";
for (var i = 0; i < 10; i++) {
 new_string1 += numsArr1[i]+","
 }
 new_string1 += numsArr1[i]
console.log(new_string1)


// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
// Output: 11 10 9 8 7 6 5 4 3 2 1
var numsArr3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string3 = ""
for (var i = numsArr3.length-1; i >= 0; i--) {
new_string3 += numsArr3[i]+" "
}
console.log(new_string3);


// Write a code to replace the array value — If the number is even, replace it with ‘even’.
// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
var numsArr4 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr4[i] %2 == 0 )
 {
 numsArr4[i] = "odd"
 }
}
console.log(numsArr4);


// Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
var numsArr5 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr5[i] %2 !== 0 )
 {
 numsArr5[i] = "even"
 }
}
console.log(numsArr5);


// Write a code to add all the numbers in the array
// Output: 66
var numsArr6 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) {
 
 sum += numsArr6[i]
}
console.log(sum);


// Write a code to add the even numbers only
// Output: 30
var numsArr7 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum1=0;
for (var i = 0; i <=10; i++) {
 if(numsArr7[i]%2 == 0)
 {
 sum1 += numsArr7[i]
}
}
console.log(sum1);


// Write a code to add the even numbers and subract the odd numbers
// Output: 94
var numsArr8 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum2=100;
for (var i = 0; i <=10; i++) {
 if(numsArr8[i]%2 ==0)
 {
 sum2 += numsArr8[i]
 } 
else{
 sum2 -= numsArr8[i]
 }
}
console.log(sum2);


// Write a code to print inner arrays
// Output:
//Array(5) [ 1, 2, 3, 4, 5 ]
//Array(6) [ 6, 7, 8, 9, 10, 11 ]
var numsArr9 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i <numsArr9.length; i++) {
    console.log(numsArr9[i].length,numsArr9[i])
 }


//Write a code to print elements in the inner arrays
// // Output: 1234567891011
var numsArr99 = [[1,2,3,4,5],[ 6,7,8,9,10,11]];
var str_alll="";
for (var i = 0; i < numsArr99.length; i++) {
 var inner_array = numsArr99[i];
 for(var j = 0 ; j <inner_array.length;j++ )
     str_alll += inner_array[j]
}
console.log(str_alll);


// // Write a code to replace the array value — If the index is even, replace it with ‘even’.
//Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
var numsArr30 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all30=0;
for (var i = 0; i < numsArr30.length; i++) {
 var inner_array30 = numsArr30[i];
 for(var j = 0 ; j < inner_array30.length;j++ )
      if(numsArr30[i][j] %2 == 0 )
      {
         numsArr30[i][j] = "even"
       }
}
console.log(numsArr30);


// //Write a code to add elements in the inner arrays based on odd or even values
//Output:
// 36
// 30
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(numsArr[i][j]%2!=0)
 {
 sum_odd += numsArr[i][j]
 }
 else
 {
 sum_even += numsArr[i][j]
 }
}
}
console.log(sum_odd);
console.log(sum_even);
