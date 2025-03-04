

// map Method

const numbers1 = [1,3,5,7,9];

const double = numbers1.map((number)=>{
   return (number*2);
});
console.log(double);


//Filter Method

const numbers2 = [1,2,3,4,5,6,7,8,9];

const evenNumber  = numbers2.filter((number)=>{
    return (number%2 ===0);
});
console.log(evenNumber);



//reduce() Method

const numbers3 = [1,2,3,4,5];

const sum = numbers3.reduce((x,y)=> x+y,0)
console.log(sum)


//find() Method

const numbers4 =[1,2,3,4,5,6];
const firstevan = numbers4.find((number)=>{
    return number%2===0;
});
console.log(firstevan);

//findEndex() Methods

const numbers5 = [1,3,6,4,5,6];

const firstEvanIndex = numbers5.findIndex((number) => {
  return number%2 === 0;
});
console.log(firstEvanIndex);