//Prime numbers

function primeNumbers(num) {
	if (num % 2 === 1 && num > 2) {
		return true
	} else {
		return false
	}

}

console.log(primeNumbers(3))
console.log(primeNumbers(-11))