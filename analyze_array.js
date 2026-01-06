function analyzeArray(arr) {
    const length = arr.length;
    const average = arr.reduce((acc,curr) => acc + curr, 0)/length;
    const min = arr.sort((a,b) => a - b)[0];
    const max = arr.sort((a,b) => b - a)[0];
    return {average, min, max, length};
}

module.exports = analyzeArray;