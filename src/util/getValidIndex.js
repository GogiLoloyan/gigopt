/**
 * Define does the index incudes in array
 * @param {Number} arrLength - array length
 * @returns {Function}
 */
export const getValidIndex = arrLength => index => {
	index = index % arrLength;
	return index >= 0 ? index : arrLength + index;
};
