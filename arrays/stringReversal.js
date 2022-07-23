function reverseString(input) {
	// Validate input
	if (!input || typeof input !== 'string') {
		return 'Invalid input';
	}

	if (input.length <= 2) {
		return 'String length is too short';
	}

	const result = [];

	for (let i = input.length - 1; i >= 0; i--) { // Time complexity - 0(n)
		result.push(input[i]); // Space complexity - 0(n)
	}

	return result.join('');
}

reverseString('dsfs');
