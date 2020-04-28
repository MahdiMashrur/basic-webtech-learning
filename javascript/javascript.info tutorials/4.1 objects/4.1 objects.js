// exerceise-1
let user= {} ;
user.name = "John" ;
user.surname = "Smith" ;
user.name = "Pete";
delete user.name ;
console.log(user);


//exercise-2
function isEmpty (currentObject){
    let i=0;
    for(let key in currentObject)
        i++;
      
    return (i==0);
}

// exercise-3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// write a code  to sum all the salaries
let sum=0;
for(let key in salaries)
    sum+= salaries[key];


    //exercise-4
    /*
    Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

    For instance:
    
    // before the call
    let menu = {
      width: 200,
      height: 300,
      title: "My menu"
    };
    
    multiplyNumeric(menu);
    
    // after the call
    menu = {
      width: 400,
      height: 600,
      title: "My menu"
    };*/
    
    function multiplyNumeric(obj){
        for(let key in obj){
          if(typeof obj[key]== "number" )
            obj[key]*=2;
        }
    }