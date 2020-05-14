// Your code here
const mapToNegativize = (array) => {
    const newArray = [];
    for(let i = 0; i < array.length; i++){
        if(Math.sign(i) === 1 || Math.sign(i) === 0){
            newArray.push(array[i]*-1)
        } else {
            newArray.push(array[i])
        }
    }
    return newArray
}

const mapToNoChange = (array) => {
    const newArray = [];
    for(let i=0; i<array.length; i++){
        newArray.push(array[i])
    }
    return newArray
}


const mapToDouble = (array) => {
    const newArray = [];
    for(let i=0; i<array.length; i++){
        newArray.push(array[i]*2)
    }
    return newArray
}


const mapToSquare = (array) => {
    const newArray = [];
    for(let i=0; i<array.length; i++){
        newArray.push(array[i]**2)
    }
    return newArray
}

const reduceToTotal = (array, start=0) => {
    let total=start;
    for(let i=0; i<array.length; i++){
        total += array[i]
    }
    return total
}

const reduceToAllTrue = (array) => {

    for(let i=0; i<array.length; i++){
        if(!array[i]){
            return false
        } 
    }
    return true
}

const reduceToAnyTrue = (array) => {
    for(let i=0; i<array.length; i++){
        if(array[i]){
            return true
        } 
    }
    return false
}