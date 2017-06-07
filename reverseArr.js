module.exports = function reverseArr(arr) {
    //go through the first 1/2 of the array only, swapping with the other side. 
    //math.floor will insure that on an odd length, the middle element is untouched.
    let temp
    for (let i = 0; i < Math.floor(arr.length/2) ; i++){
        //swap!

        //remeber the current element 
        temp=arr[i]

        //overwrite the current element with the element on the opposide side of the array
        arr[i] = arr[(arr.length-1)-i]

        //overwrite the oppoosite side element with the original element we remembered
        arr[(arr.length-1)-i] = temp
    } 
}
