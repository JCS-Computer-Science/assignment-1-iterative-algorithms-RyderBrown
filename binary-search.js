function binarySearch(array, searchTerm) {
	
	let half = (array / 2)

	for (let i = 0; i < array.length; i++) {
		if (searchTerm > array.length) {
			half;
		}
	}


	
	
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */

	return null;
}

module.exports = binarySearch;
