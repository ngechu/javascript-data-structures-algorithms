
function fibonacci(num) {

	//The first numbers in the fib sequence is 0,1 so we can hard code the values in the array
	let sequence = [0, 1]
	//Start the loop from the third element in the array which is in index 2 
	for (let i = 2; i < num; i++) {
		//Set the value of the array at the current index by adding the previous value at index i-1 with the current value at index i-2
		//Keep in mind we minus 2 because we have started looping from index 2 so to get the current index we minus 2
		sequence[i] = sequence[i - 1] + sequence[i - 2]
	}
	return sequence

}


///Using recursion

function recursive_fib(num) {
	//Base case
	if (num < 2) {
		return num
	}
	console.log(num)
	return recursive_fib(num - 1) + recursive_fib(num - 2)
}

// console.log(fibonacci(6))

console.log(recursive_fib(6))