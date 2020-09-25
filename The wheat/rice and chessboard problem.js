//https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7

function squaresNeeded(grains){
    let countSqr = 0;
    let grainsInSgr = 1;
    let sumOfGrains = 0;
    while (sumOfGrains < grains){
        sumOfGrains += grainsInSgr;
        countSqr += 1;
        grainsInSgr *= 2;
    }
    return countSqr;
}
