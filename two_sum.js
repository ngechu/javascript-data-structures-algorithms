///Assuming you have an array and you need to find the two numbers summed up to get the result

const arr = [1, 4, 6, 3, 4]

function twoSum(arr, sum) {
	// Create an empty map , basically will be used to track the values and index of items in the array
	let values = new Map()
	// Loop through the array 
	for (let i in arr) {
		//Since we are looking for the two numbers that need to be added up,it means that we can get the target by subtracting
		// the current value from sum to get the other number  
		let target = sum - arr[i]
		//Check if the other number is in our map, then return the value of the map and the current index in the loop
		if (values.has(target)) {
			return [values.get(target), i]
		} else {
			//Else if the other number is not in our map, then set the current value as the key and its index as the value in our map
			values.set(arr[i], i)
		}
	}
	//if the code reaches this point, then it does not exist
	return 'It does not exist'
}

console.log(twoSum(arr, 11))