// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
  $("#create").on("click", makeOwn )
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}


function makeOwn(){
  applyFilter(newFilter)
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
    applyFilter(decreaseBlue)
    applyFilter(increaseGreenbyBlue)
    applyFilterNoBackground(reddify)
    applyFilterNoBackground(increaseGreenbyBlue)

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunc){
  for (var i = 0; i < image.length; i++){
      var row = image[i]
      for (var x = 0; x < row.length; x++){
        //console.log(row[x])
        var pixel = row[x]
        var pixelArray = rgbStringToArray(pixel) // Will use to change colors
        filterFunc(pixelArray)
        var updatedPixel = rgbArrayToString(pixelArray)
        row[x] = updatedPixel
      }
  }
}



// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunc){
  var backgroundColor = image[0][0]
  for (var o = 0; o < image.length; o++){
    for (var y = 0; y < image[o].length; y++){
      if (image[o][y] !== backgroundColor){
        var arrPix = rgbStringToArray(image[o][y])
        filterFunc(arrPix)
        var updPix = rgbArrayToString(arrPix)
        image[o][y] = updPix
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(num){
  if (num < 0){
    return 0
  }
  else if (num > 255){
    return 255
  }
  else{
    return num
  }
}

// TODO 4: Create reddify filter function
function reddify(pixar){
  pixar[RED] = 175
}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(bixar){
  bixar[BLUE] -= 50
  keepInBounds(decreaseBlue)
}

function increaseGreenbyBlue(gixar){
  gixar[GREEN] += gixar[BLUE]
  keepInBounds(increaseGreenbyBlue)
}

function newFilter(ori){
  // var med = prompt("how much red")
  // var mreed = prompt("how much green")
  // var mlue = prompt("how much blue")
  ori[RED] = 0
  ori[GREEN] = 0
  ori[BLUE] = 0
}

// CHALLENGE code goes below here
