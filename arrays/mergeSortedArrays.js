function mergeSortedArrays(arr1, arr2) {
	// Validate Input
	if (!arr1 && !arr2) {
		console.log('No arrays entered');
		return 'No arrays entered';
	}

	if (!arr1) {
		console.log('No array 1 entered');
		return arr2;
	}

	if (!arr2) {
		console.log('No array 2 entered');
		return arr1;
	}

	const newArr = [];
	let firstArrItem = arr1[0];
	let secondArrItem = arr2[0];
    let i = 1;
    let j = 1

	while (firstArrItem || secondArrItem) {
		if (!secondArrItem || firstArrItem < secondArrItem) {
			newArr.push(firstArrItem);
			firstArrItem = arr1[i];
			i++;
		} else {
			newArr.push(secondArrItem);
			secondArrItem = arr2[j];
			j++;
		}
	}

	console.log(newArr, "==final")
}

mergeSortedArrays( [],[1, 1, 5, 8, 9]);
