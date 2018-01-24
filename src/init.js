$(document).ready(function() {
  window.dancers = [];

  var convertCssValueToNumber = function (node, cssParam){

  return Number(node.css(cssParam).slice(0, -2));
}

  var calculateC = function(a, b){
      
  var aSquared = (convertCssValueToNumber(a,"top") - convertCssValueToNumber(b,"top"))**2;
  var bSquared = (convertCssValueToNumber(a,"left") - convertCssValueToNumber(b,"left"))**2;
  
  return Math.sqrt(aSquared + bSquared);
}

  function collidingDancers(){
  var c;
  
    for (var i = 0; i <dancers.length; i++){
      for (var j = i + 1; j < dancers.length; j++){
        c = calculateC(dancers[i].$node, dancers[j].$node);

        if (c < 200){
          dancers[i].close();
          dancers[j].close();
          // console.log(dancers[i].$node.attr('class'));
        } else {
          dancers[i].apart();
          dancers[j].apart();
        }

        
      }

    }
  
  }

setInterval(collidingDancers, 0);

  $('.addBlinkyDancer').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $(".box").height() * Math.random(),
      $(".box").width() * Math.random(),
      Math.random() * 1000
    );

    dancers.push(dancer);
    $('.box').append(dancer.$node);
  });


  $('.addScalingDancer').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $(".box").height() * Math.random(),
      $(".box").width() * Math.random(),
      2000
    );
    
    dancers.push(dancer);

    $('.box').append(dancer.$node);
  });

  $('.addRotatingDancer').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    
    var dancer = new dancerMakerFunction(
      $(".box").height() * Math.random(),
      $(".box").width() * Math.random(),
      2000
    );

    dancers.push(dancer);
    $('.box').append(dancer.$node);
  });


  $('.lineUpDancers').on('click', function(event) {
    for(var i=0; i<dancers.length; i++){
      dancers[i].lineup();
    }
  });


  $('.box').on('mouseover', '.dancer', function(event) {
    console.log('mouse over works');
    var styleSettings = {
      top: $(".box").height() * Math.random(),
      left: $(".box").width() * Math.random(),
    };
    $(this).css(styleSettings);
    $(this).addClass('move-over');
  });
});
