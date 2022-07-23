function reverseString(input) {
	// Validate input
	if (!input || typeof input !== 'string') {
		return 'Invalid input';
	}

    if (input.length <= 2 ) {
		return 'String length is too short';
	}

    const result = [];

    for(let i = input.length-1; i >= 0; i--){
        result.push(input[i]);
    }

    return result.join('');
}

reverseString('dsfs');
