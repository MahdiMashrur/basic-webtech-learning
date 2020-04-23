console.log("" + 1 + 0)
console.log("" - 1 + 0)
console.log(true + false)
    console.log(6 / "3")
    console.log("2" * "3")
    console.log(4 + 5 + "px")
    console.log("$" + 4 + 5)
    console.log("4" - 2)
    console.log("4px" - 2)
    console.log(7 / 0)
        console.log("  -9  " + 5)
        console.log("  -9  " - 5)
        console.log(null + 1) // =1 , as null will turn to zero number
            console.log(undefined + 1) // Nan
                console.log(" \t \n" - 2) //space characters are trimmed off, after that it becomes empty string, 
                //which converts to 0



                let a = 1, b = 1;

                let c = ++a; // ?
                let d = b++; // ?
                //result being a=2, b=2,c=2,d=1