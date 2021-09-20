'use strict';
/**
 * Create Maze game
 * Game starts when mouse croosses green line
 * Game ends when mouse croosses light green field
 * User wins when mouse croosses light red line
 */

const refs = {
    start: document.querySelector('.start'),
    finish: document.querySelector('.finish'),
    maze: document.querySelector('#maze'),
    indicator: document.querySelector('#indicator'),
};

let isPlaing = false;

const handeStartMouseEvent = () => {
    refs.indicator.textContent = 'Play';
    isPlaing = true;
}

refs.start.addEventListener('mouseover', handeStartMouseEvent);

const handleFinishMouseEvent = () => {
    if(isPlaing) {
        isPlaing = false;
        refs.indicator.textContent = 'Winner';
    }
}

refs.finish.addEventListener('mouseover', handleFinishMouseEvent);

const handleBlockMouseEvent = (e) => {
    if(isPlaing && e.target.classList.contains('block')) {
        isPlaing = false;
        refs.indicator.textContent = 'Loose';
    }
}

refs.maze.addEventListener('mouseover', handleBlockMouseEvent);


const handleMazeMouseLeaveEvent = () => {
    if(isPlaing) {
        isPlaing = false;
        refs.indicator.textContent = 'Pause';
    }
}

refs.maze.addEventListener('mouseleave', handleMazeMouseLeaveEvent);
