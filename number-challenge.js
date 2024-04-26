/*
    1 Create a function that will return the sum 3 numbers
    2 Create a function that will return the difference of the 2 numbers
    3 Create a function that will return the product of the 2 numbers
    4 Create a function that will return the average of the 2 numbers
*/

const num1 = 5
const num2 = 6
const num3 = 7

function sumOfThree() {
    des = "5 + 6 + 7 = "
    sum = num1 + num2 + num3
    console.log(des + sum)
}

function differenceOfTwo(){
    des = "7 - 5 = "
    difference = num3 - num1
    console.log(des + difference)
}

function productOfTwo(){
    des = "5 * 6 = "
    product = num1*num2
    console.log(des + product)
}

function averageOfTwo(){
    des = "average of 5 & 6 = "
    avg = (num1 + num2)/2
    console.log(des + avg)
}

sumOfThree()
differenceOfTwo ()
productOfTwo()
averageOfTwo()