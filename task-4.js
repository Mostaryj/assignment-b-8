//'findAddress()' name e ekta function deOya thakbe. input hisebe ekta object nibe .object er property 3ta.
//

function findAddress(obj){
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';
    const str = street + "," + house + "," + society;

    return str;
}
console.log(findAddress({street:10,house:'isa',}));