// Check whether the year is Leap year or not.
// Write a program which takes an year 
// N
//  as input from the user and find out whether the given year is a Leap Year or not.

 
var Check_Leap = (year) => 
{
 if(year%4===0){
       if(year%100===0){
         if(year%400===0){
           return "Leap Year";
         }else{
           return "Non Leap Year";
         }
       }else{
         return "Leap Year";
       }
     }else{
       return "Non Leap Year";
     }
    
    };

 
