const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const binarySearch = (arr, target) => {
	///Set the first pointer and the last pointer
	let firstIndex = 0
	let lastIndex = arr.length - 1
	// As long as the last pointer is not less than the first pointer, means that the current index is the middle of the array , which is caught by the last else.
	while (lastIndex >= firstIndex) {
		//Get the current midpoint index of the array at this point of the loop
		//Get the floor value to avoid jumping over values which may be the one you are searching for
		let midIndex = Math.floor((firstIndex + lastIndex) / 2)

		// If the value at the middle of the array is greater than the target , that means we are too high thus the last pointer should be 
		// at the current index, the first pointer remains as it is.
		if (arr[midIndex] > target) {
			//Update last pointer
			lastIndex = midIndex - 1

			//If the value at the middle is less than target, it means that the value we are searching for is bigger thus we move the first pointer 
			// to the next index from the middle since the value cannot be less than the midpoint

		} else if (arr[midIndex] < target) {
			//Update first pointer
			firstIndex = midIndex + 1
			//Else if the element is not less or greater than the current value, it means that we have found the number
		} else {
			return midIndex
		}

	}
	//If we reach to this point then the value does not exist in the array
	return "Not found"
}

//Runs in O(1) because the array is halved each time the loop runs



console.log(binarySearch(arr, 1))