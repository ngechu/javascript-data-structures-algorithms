
//Complexity - O(log n)
function isPowerOfTwo(num) {
	//Handle all numbers less than 1
	if (num < 1) {
		return false
	}
	while (num > 1) {
		console.log(num)
		//Check if a number is divisible by 2
		if (num % 2 !== 0) {
			//Means that the number is not divisible by 2
			return false
		}
		num = num / 2
	}
	return true
}

console.log(isPowerOfTwo(34))
console.log(isPowerOfTwo(1))