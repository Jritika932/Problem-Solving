// Reverse a Number.
// Write a program which takes a numebr 
// N
//  as input from the user and You need to reverse the number.

 
var Reverse_Number = (N) => 
{
     let reverse=0;
  while(N!==0){
    const rem=(N%10);
    reverse=reverse*10+rem;
    N=Math.floor(N/10);
  }
  return reverse;


};
 
