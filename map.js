/* As a reminder, `map` takes a callback function and returns a *new* array, with each new value created by the output of the callback function. So:

const arr = [1,2,3];
arr.map((val) => val * val) // [1,4,9]

*/


Array.prototype.map = function (callBack) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
        //pass the element, the index and the original array to the call back
        //push result of callback onto new array
        newArray.push(callBack(this[i],i,this))
    }
    return newArray
}
