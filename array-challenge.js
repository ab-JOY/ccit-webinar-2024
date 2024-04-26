const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
    Challenge: Display the numbers using the below format
    EVEN NUMBERS: 
    2
    4
    6
    8
    10
    ODD NUMBERS: 
    1
    3
    5
    7
    9
*/

function oddNumbers(){
    console.log("ODD NUMBERS: ")
    for(let i = 0; i < arr.length; i++){
        if(i === 0 || i % 2 === 0 ){
            display = arr[i]
            console.log(display)
        }
    }
}

function evenNumbers(){
    console.log("EVEN NUMBERS: ")
    for(let i = 0; i < arr.length; i++){
        if(!(i === 0 || i % 2 === 0 )){
            display = arr[i]
            console.log(display)
        }
    }
}

evenNumbers()
oddNumbers()

