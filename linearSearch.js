 function findElement(arr, element){
     let index =0;
     for(const item of arr){
         if(typeof element ==='object' && 
            element!==null &&
            element.name ===item.name &&
            element.age ===item.age
            ){
                return index;
            }
        if(item===element){
            return index;
        }
        index++
     }
 }
 const arr = [3,7,22,0,-4,1,64];
 const objects = [
     {name: 'Meet', age: 24},
     {name: 'Kartik', age: 28}
 ]

console.log(findElement(arr, 3))
console.log(findElement(arr, -4))
console.log(findElement(arr, 64))
console.log(findElement(objects, {name: 'Kartik', age: 28} ))




