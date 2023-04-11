// Code your solution in this file!
function distanceFromHqInBlocks (Cstreet){
    if (Cstreet > 42)
        return Cstreet-42;
    
    else if (Cstreet <= 42)
    
    
        return 42 - Cstreet
    }
    distanceFromHqInBlocks (56)

    function distanceFromHqInFeet (Cstreet){
       return distanceFromHqInBlocks(Cstreet) *264
    
    }

   distanceFromHqInFeet()

    function distanceTravelledInFeet(start,ending){
        if (start>ending){
          return((start-ending)*264);
        }
        else
          return((ending-start)*264);
      }

      function calculatesFarePrice(start,ending){
        let distance = distanceTravelledInFeet(start,ending);
        if (distance<= 400){
          return 0;
        }
        if (distance>=400 && distance<=2000){
          return (distance-400)* 0.02;
        }
        else if(distance>=2000 && distance<=2500){
          return 25;
        }
        else if (distance > 2500){
          return "cannot travel that far";
        }
      }