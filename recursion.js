function recursion(e) {
	if (e === 0) {
		return 1
	}
	console.log(e)
	return recursion(e - 1) * e
}

console.log("XXXXX", recursion(4))