let num = prompt("Enter number to reverse:");
let onum = num;

let rev = (num) => {
	let l = 0;
	while (num != 0) {
		let m = num % 10;
		l = l * 10 + m;
		num = Math.floor(num / 10);
	}

	return l;
};
let rnum = rev(num);

console.log(`the reversed number is :${rnum}`);
