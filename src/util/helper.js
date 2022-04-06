
const date = new Date();
const printDate = ()=> "6th April 2022"; 

const printMonth = ()=> "April";

function getBatchInfo() {
    return "Uranium, W2D3, the topic for today is Nodejs module system"
}


module.exports.printDate=printDate;
module.exports.printMonth=printMonth;
module.exports.getBatchInfo=getBatchInfo;