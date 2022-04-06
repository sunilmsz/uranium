const lodash = require('lodash');

const monthArr = ['January','Febuary','March','April','June','July','August','September','October','November','December'];

const monthSplitedArr =lodash.chunk(monthArr,4)

const oddNumbers =[1,3,5,7,9,11,13,15,17,19]

const duplicate1 =[1,2,5]
const duplicate2 =[2,5]
const duplicate3=[4,5,9]
const duplicate4 =[1,2,5,8,7]
const duplicate5 =[3,6,10,9]


module.exports.monthSplitedArr = monthSplitedArr;
module.exports.usingTail= lodash.tail(oddNumbers);
module.exports.usingUnion = lodash.union(duplicate1,duplicate2,duplicate3,duplicate4,duplicate5);
module.exports.usingFromPairs= lodash.fromPairs([['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]);