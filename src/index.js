/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

    let countOfTriangles = 0;
    let countOfLinks = 0;
    for (const [i, value] of preferences.entries()) {
        let secondValue = preferences[value - 1];
        let thirdValue = preferences[secondValue - 1];
        if (i === (thirdValue - 1)) {
            countOfLinks++;
        }
        if(countOfLinks === 3){
            countOfTriangles++;
            countOfLinks = 0;
        }
    }
    return countOfTriangles;
};
