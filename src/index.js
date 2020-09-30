exports.min = function min(array) {

    if (arguments.length) {
        let minNum = 0;

        for (let i of array) {
            if (i < minNum) {
                minNum = i;
            }
        }
        return minNum
    } else {
        return 0;
    }
}

exports.max = function max(array) {

    if (arguments.length) {
        let maxNum = 0;

        for (let i of array) {
            if (i > maxNum) {
                maxNum = i;
            }
        }
        return maxNum
    } else {
        return 0;
    }
}

exports.avg = function avg(array) {
   return  array.reduce((a, b) => a + b) / array.length
}



