/**
 * getTime
 */
export default function () {
	let d = new Date();
	return d.getHours() + ':' + d.getMinutes() + ':' + d.getMilliseconds();
};