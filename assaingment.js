// 
// Problem-01 : Help The Zoo Manager

function calculateMoney(ticketSale){
    if (ticketSale <= 0){
        return 'Invalid Number'
    }
    else{
        let total = 0;
        const ticketPrice = 120;
        const watchmanSalary = 500;
        const staffSalary = 50;
        const totalStaff = 8;
        for (const num of ticketSale){
         const income = num * ticketPrice;
     
         const payment = watchmanSalary + staffSalary * totalStaff;
     
         const earn = income - payment;
         total = earn + total;
     
        }
     return total;
    }
 
}
// const dailyTicketSale = [0];
// const total = calculateMoney(dailyTicketSale);
// console.log(total);

// -----------------------------
// Problem-02: Good Name , Bad Name

function checkName(name){
     if (typeof name !== 'string'){
        return 'invalid'
     }
    const letters = ['A','y','i','e','o','u','w'];
    const lastLetter = name[name.length - 1];

    for(let i = 0; i < letters.length; i++){
        if(lastLetter.toLowerCase() === letters[i]){
            return 'Good Name';
        } 
    
        if (lastLetter.toUpperCase() === letters[i]){
            return 'Good Name'
        }
         
    } 
    return 'Bad Name'
           
}
// console.log(checkName('RAFFE'));
// ------------------------------

//Problem 03 : Virus in my Array

function deleteInvalids(numbers){
    if(!Array.isArray(numbers)){
        return 'Invalid Array';
    }
    const result = [];
    for(const num of numbers){
        if(typeof num === 'number' && !isNaN(num) ){
            result.push(num);
        }  
    }
    return result;
    
}
// const input =[ NaN ] ;
// console.log(deleteInvalids(input));
// --------------------------

// Problem 04 : Make A Great Password

function password(inputValue){
   if(typeof inputValue !== 'object' ||!inputValue.name || !inputValue.siteName || inputValue.birthYear.toString().length !== 4){

    return 'invalid'
   }

return `${inputValue.siteName.charAt(0).toUpperCase()+inputValue.siteName.slice(1)}#${inputValue.name}@${inputValue.birthYear}`;


}
// const user =   { name: "maisha" , birthYear: 2002 };
// console.log(password(user));

   

function monthlySavings(arr,livingCost){
    if(!Array.isArray(arr) ||typeof livingCost !== 'number'){
        return 'invalid input'
    }
   
    let savings = 0;
    for (const num of arr){
        if(num >=3000){
            savings =(savings + num)-(num * 20)/100;
        } 
        else{
            savings = savings + num;
        }
    }
    savings = savings - livingCost;
    if(savings >=0){
        return savings
    }
    else{
        return 'earn more'
    }
}
const arr = 900;
const livingCost = [10000,2000,1000];
console.log(monthlySavings(arr,livingCost));
