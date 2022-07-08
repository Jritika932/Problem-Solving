// Find the Smaller Angle
// PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. She wants to calculate the shorter angle formed between hour and minute hand at any given time.


var Minimal_Angle = (h, m) => 
{
    if( h===12){
            h = 0;
          }   
          if(m===60){
            m = 0;
            h+=1;
            if(h>12){
              h = h-12;
            }
          }
          var hAngle = 0.5*(h*60+m);
          var mAngle = 6*m;
          var result = Math.abs(hAngle-mAngle)
          result = Math.min((360-result),result)
          return result;   
};
 


