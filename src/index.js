/**
 * Test demo file
 */

import moment from 'moment';
import chunk from 'lodash/chunk';
import {getCurrentTime} from './utils/getCurrentTime.js';
import getTime from './utils/getTime.js';


console.log(moment);

let DatePick = {
	getCurrentTime() {
		return getCurrentTime();
	},

	getDateFormat() {
		return moment().format('L');
	},

	getTime() {
		return getTime();
	},

	getChunk() {
		return chunk(['a', 'b', 'c', 'd'], 2);
	}
};

export default DatePick;
