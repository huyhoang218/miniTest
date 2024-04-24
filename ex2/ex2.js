function reviewPoint(avg){
    if(avg > 8) return 'A'
    else if (avg >= 5) return 'B'
    return 'C'
}

function countType(arr){
    let countA = 0
    let countB = 0
    let countC = 0
    for (let i = 0; i < arr.length; i++) {
        if(reviewPoint(arr[i]) === 'A') countA ++
        if(reviewPoint(arr[i]) === 'B') countB ++
        if(reviewPoint(arr[i]) === 'C') countC ++
    }
    let arrayCount = [countA, countB, countC]
    return arrayCount
}

function getAvg(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let avg = sum/(arr.length)
    return avg
}
