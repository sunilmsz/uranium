const input = "    Text to be Formatted      ";

const trim =()=> input.trim();

const changetoLowerCase = () => input.toLowerCase();

const changeToUpperCase = ()=> input.toUpperCase();


module.exports.trim = trim;
module.exports.changetoLowerCase= changetoLowerCase;
module.exports.changeToUpperCase= changeToUpperCase;

