function buildSum(a){
	return function (b) {
		return a+b;
	}
}

const addFive = buildSum(5);


const addSix = a => b => `${a}+${b}=${a+b}`;
const buildTag = t => text => `<${t}>${text}</${t}>`


console.log(addFive(5)); //10
console.log(addSix(6)(6)); //12