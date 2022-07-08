// Perfect Number Check.
// Have you heard of Perfect numbers? If not let me tell you what is it, Perfect Numbers are integers that are equal to the sum of all its divisors except that number itself.

// Now, You are given an integer 
// N
// , write a program to check whether the given number is a Perfect Number or not.

 
var Perfect_Check = (N) => 
{
   var per = 0;
  for (let i = 1; i <= N / 2; i++) {
    if (N % i === 0) {
      per = per + i;
    }
  }
  if (per === N && per !== 0) {
    return "YES";
  } else {
    return "NO";
  }
          

      
};
 
