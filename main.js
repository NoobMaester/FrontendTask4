//C O N V E R T   F A H R   T O   C E L S I U S
const convertFahrToCelsius = (n) => {
    //setting up the formula
    let a = n - 32;
    let b = a * 5/9;

    if (isNaN(n)) {
        console.log(`${n} is not a valid Number but a/an ${typeof(n)}`);
    } else {
        return `${b.toFixed(4)}°C`;
    }
}
console.log(convertFahrToCelsius(''))




//C H E C K   Y U G I O H
const checkYuGiOh = (n) => {

    //OUTPUTTING AN ARRAY OF NUMBERS FROM 1 to N
    const numbers = Array.from(new Array(n), (x, index) => index + 1);

    if (isNaN(n)){
        return `invalid parameter: ${n} is a ${typeof(n)}`
    } else {
        console.log(numbers)
    }

    //mapping through the array to output 'Yu Gi Oh'
    const multi = (num) => {
        if( num % 2 == 0 && num % 3 == 0 && num % 5 == 0 ){
            return 'Yu-Gi-Oh'
        } else if( num % 2 == 0 && num % 3 == 0){
            return 'Yu-Gi'
        } else if( num % 2 == 0 && num % 5 == 0){
            return 'Yu-Oh'
        } else if( num % 3 == 0 && num % 5 == 0){
            return 'Gi-Oh'
        } else if (num % 2 == 0){
            return 'Yu'
        } else if (num % 3 == 0){
            return 'Gi'
        } else if ( num % 5     == 0){
            return 'Oh'
        } else {
            return num
        }
    }
    var newArray = numbers.map(multi);
    console.log(newArray)
}

console.log(checkYuGiOh(30))

