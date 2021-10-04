/** Create timer with template */
'use strict';

import Timer from './timer.js';

const timer = new Timer({
  selector: '.timer-1',
});

const timer2 = new Timer({
  selector: '.timer-2',
});

timer2.start();

// TODO Create timer with start value
// * show miliseconds
