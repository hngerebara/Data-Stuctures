function firstRecurringValue(data) {
	// validate input
	if (!data) {
		return 'No data entered';
	}

	let obj = {};

	for (let i = 0; i < data.length; i++) {
		// 0(n)
		if (obj[data[i]]) {
			return data[i];
		} else {
			obj[data[i]] = true;
			return 'No repeated data';
		}
	}
}

const result = firstRecurringValue([3, 4, 6, 7, 9, 8, 5]);
console.log(result, '==== result');
