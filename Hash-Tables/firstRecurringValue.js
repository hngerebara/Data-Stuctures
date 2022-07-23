function firstRecurringValue(data) {
	let obj = {};

	for (let i = 0; i < data.length; i++) { // 0(n)
		if (obj[data[i]]) {
			console.log(data[i], 'Found repeated');
			return data[i];
		} else {
			obj[data[i]] = true;
		}
	}
}

firstRecurringValue([3, 4, 6, 4, 7, 9, 8, 5, 3]);
