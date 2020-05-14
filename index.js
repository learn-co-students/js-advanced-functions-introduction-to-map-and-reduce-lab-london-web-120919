// Your code here
function mapToNegativize(sourceArray) {
    const newArr = [];
    for (let i = 0; i < sourceArray.length; i++) {
       newArr.push(sourceArray[i]* -1) 
    }
    return newArr;
}

function mapToNoChange(sourceArray) {
       const newArr = [];
        for (let i = 0; i < sourceArray.length; i++) {
            newArr.push(sourceArray[i]);
        }
        return newArr;
}

function mapToDouble(sourceArray) {
    let a = [];
    for (let i = 0; i < sourceArray.length; i++) {
        a.push(sourceArray[i]*2)
    }
    return a
}

function mapToSquare(sourceArray) {
    let dub = [];
    for (let i = 0; i < sourceArray.length; i++) {
        dub.push(sourceArray[i] * sourceArray[i]); 
    }
    return dub
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let t = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        t = sourceArray[i]+ t;
        
    }
    return t
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false
        
    }
    return true
}
function reduceToAnyTrue(src) {
	for (let i = 0; i < src.length; i++) {
		if (src[i]) return true;
	}
	return false;
}