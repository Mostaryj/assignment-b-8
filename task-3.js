//sortMaker() name e ekta function likhte hobe.parameter hobe ekti array and ei array te sobsomoy duiti upadan thakbe
// 1. if array er duiti upadan positive number hoy tahole array ke boro theke choto sajiye return korbe.
//2. if array er upadan eki hoy tahole ei string return korbe "equal"
// bonus= if array er je kono ekti upadan negetive hoy tahole return korbe "invalid input"
//sample input        sample output
// [2,3]                 [3,2]
// [4,2]                 [4,2]
// [4,4]                 equal
// [1,2]                 [2,1]
// [4,-2]                invalid input


function sortMaker(arr){
    const [a,b] = arr;
    if(a < 0 || b < 0){
        return "invalid input";
    }
    if(a === b){
        return "equal";
    }
    if(a > b){
        return [a,b];
    }else{
        return[b,a];
    }
}
const input = [2,8];
const final = sortMaker(input);
console.log(final)
