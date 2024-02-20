function insertionSort(array) {
	
	let j;
	
	for (let i = 0; i < array.length; i++) {
		let arrayValue = array[i]
		for (j = i -1; j >= 0 && array[j] > arrayValue; j--) {
			array[j + 1] = array[j]
		}
		array[j + 1] = arrayValue
	}
	return array;

	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */

	return array;
}

module.exports = insertionSort;
