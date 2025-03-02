

// map Method

const number = [1,3,5,7,9];

const double = number.map((number)=>{
   return (number*2);
});
console.log(double);


//Filter Method

const numbers = [1,2,3,4,5,6,7,8,9];

const evenNumber  = numbers.filter((number)=>{
    return (number%2 ===0);
});
console.log(evenNumber);