// Your code here
const mapToNegativize = (arr) => {
    return arr.map( val => -val)
}

const mapToNoChange = (arr) => {
    return arr.map( val => val)
}

const mapToDouble = (arr) => (
    arr.map( val => val * 2 )
)

const mapToSquare = (arr) => (
    arr.map( val => val ** 2 ) 
)

const reduceToTotal = (arr, start = 0) => (
    arr.reduce( (sum, val) => sum + val, start)
)

const reduceToAllTrue = (arr) => (
    arr.reduce( (isTrue, bool) => bool ? isTrue : isTrue = false, true )
)

const reduceToAnyTrue = (arr) => (
    arr.reduce((isTrue, bool) => bool ? isTrue = true : isTrue, false)
)