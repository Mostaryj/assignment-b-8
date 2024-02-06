// 1. cubeNumber () নামে একটা ফাংশন দেওয়া আছে। ফাংশন একটা ইনপুট নাম্বার নিবে,
//task
// ১। input numberকে cube করে রেজাল্ট টা রিটার্ন করবে ফাংশন থাকবে
//.২। বোনাস = ইনপুট হিসেবে নাম্বার টাইপ এর পরিবর্তে জন্য কিছু দিলে তুমি একটা মিনিং ফুল মেসেজ রিটার্ন করে দিবে ফাংশন থেকে

// sample input = 3. output = 27
//sample input = 4. output = 64


function cubeNumber(number){
    const result = Math.pow(number, 3);
    return result;
}

console.log(cubeNumber(3));
console.log(cubeNumber(4));

// bonus
// function cubeNumber(number){
//    if(typeof number !== 'number'){
//     return 'please provide a number';
//    }
// }
// console.log(cubeNumber('true'));