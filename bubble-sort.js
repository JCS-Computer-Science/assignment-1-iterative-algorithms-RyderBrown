function bubbleSort(array) {
	
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length; i++) {
        
            if (array[i] > array[i + 1]) {
                let temp1 = array[i]
                let temp2 = array[i + 1]
                array[i] = temp2
                array[i + 1] = temp1
            }
        }
        
    }

    
    /*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

	return array;
}

module.exports = bubbleSort;
