/**
 * Check if the window this the target
 * @param {string} - element class to be checked
 * @param {number} - Adds a offset to be checked 
 * @param {func} - Execute a function after reaches the element + offset
 */

export function scrollCheck(element, offset, callback){

  // Window top position
  // Window bottom position
  const docViewTop    = window.pageYOffset,
        docViewBottom = docViewTop + window.innerHeight;

  const elemTop       = document.querySelector(element).offsetTop + offset;
  // const      elemBottom  = document.querySelector(element).offsetHeight; 

  // check if the window bottom passes the element top + offset
  if( docViewBottom >= elemTop ){
    // execute callback functions passed
    callback();
  }

}