function binarySearch(array, searchTerm) {

	let mid;
	let max = array.length
	let min = (0);
	let beenFound = false;
	
	while (!beenFound) { 
		mid = Math.round((max + min) / 2) 
		if (searchTerm > array[mid]) {
			min = mid
		} 
		if (searchTerm < array[mid]) {
			max = mid
		}
		if (searchTerm == array[mid]) {
			return mid
		}
	}


	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */

}

module.exports = binarySearch;
