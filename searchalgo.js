function findElement(sortedArr, element){
    let startIndex =0;
    let endIndex = sortedArr.length - 1;

    while(startIndex<= endIndex){
        const middleIndex = startIndex + Math.floor((endIndex-startIndex)/2);

        if(sortedArr[middleIndex]=== element){
            return middleIndex;
        }
        if(sortedArr[middleIndex]< element){
            startIndex = middleIndex +1;
        }else {
            endIndex = middleIndex-1;
        }
    }
}

const arr= [-32,-21,-11,0,4,9,20,32]

console.log(findElement(arr, -11))
console.log(findElement(arr, 32))
console.log(findElement(arr, 9))

/* Master Algorithm For All Recursions:-

Time Complexity for recursion:-  O(n^logb^a)

if recursion does more work then :-  O(n^logb^a)
if same work inside nd outside then -   O(n^logb^a Log n) */

