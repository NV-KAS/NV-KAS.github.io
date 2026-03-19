/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  const KEY = {
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32,
    W: 87,
    A: 65,
    S: 83,
    D: 68

  }

  var walker = {
    x: 15,
    y: 15,
    speedX: 0,
    speedY: 0

  }
   var luigi = {
    x: 150,
    y: 150,
    speedX: 0,
    speedY: 0

  }
  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */
  $(document).on('keydown', handleKeyDown);                          
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    wallCollision()
    redrawGameItem()
  }
  
  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should rename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */
  function handleKeyDown(event) {
    if(event.which === KEY.LEFT){
      walker.speedX = -5
    }

    else if(event.which === KEY.RIGHT){
      walker.speedX = 5
    }

    else if(event.which === KEY.UP){
      walker.speedY = -5
    }

    else if(event.which === KEY.DOWN){
      walker.speedY = 5
    }

    else if(event.which === KEY.ENTER){
      console.log("enter")
    }

    else if(event.which === KEY.SPACE){
      walker.speedX = walker.speedX * 2
      walker.speedY = walker.speedY * 2
    }
    if(event.which === KEY.A){
      luigi.speedX = -7
    }

    else if(event.which === KEY.D){
      luigi.speedX = 7
    }

    else if(event.which === KEY.W){
      luigi.speedY = -7
    }

    else if(event.which === KEY.S){
      luigi.speedY = 7
    }
  }

  function handleKeyUp(event){
    if(event.which === KEY.LEFT){
      walker.speedX = 0
    }

    else if(event.which === KEY.RIGHT){
      walker.speedX = 0
    }

    else if(event.which === KEY.UP){
      walker.speedY = 0
    }

    else if(event.which === KEY.DOWN){
      walker.speedY = 0
    }
    else if(event.which === KEY.SPACE){
      walker.speedX = 0
      walker.speedY = 0
    }
     else if(event.which === KEY.A){
      luigi.speedX = 0
    }

    else if(event.which === KEY.D){
      luigi.speedX = 0
    }

    else if(event.which === KEY.W){
      luigi.speedY = 0
    }

    else if(event.which === KEY.S){
      luigi.speedY = 0
    }

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  

  function wallCollision(){
    if (walker.x === $("#board").width() || walker.x === 0){
        walker.x -= walker.speedX
        walker.y -= walker.speedY
    }
    else if(walker.y === $("#board").height() || walker.y === 0){
      walker.y -= walker.speedY
      walker.x -= walker.speedX
    }
    
    
    if (luigi.x === $("#board").width() || luigi.x === 0){
        luigi.x -= luigi.speedX
        luigi.y -= luigi.speedY
    }
    else if(luigi.y === $("#board").height() || luigi.y === 0){
      luigi.y -= luigi.speedY
      luigi.x -= luigi.speedX
    }
    
  }
  function redrawGameItem(){
    $("#walker").css("left", walker.x)
    $("#walker").css("top", walker.y)

    $("#luigi").css("left", luigi.x)
    $("#luigi").css("top", luigi.y)
  }


  function repositionGameItem(){
    walker.x = walker.x + walker.speedX
    walker.y =  walker.y + walker.speedY
    luigi.x = luigi.x + luigi.speedX
    luigi.y =  luigi.y + luigi.speedY

  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
