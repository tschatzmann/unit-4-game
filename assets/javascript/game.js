
$(document).ready(function () {
  var wins = 0;
  var losses = 0;
  var counter = 0;
  var targetNumber = 0;
  var randomNumber = 0;
  var gemMin = 1;
  var gemMax = 12;
  initGame();
  initGems();

  // This time, our click event applies to every single crystal on the page. Not just one.
  $("#crystals").on("click", ".crystal-image", function () {
    console.log("inside click function");

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    console.log('this' + this);
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    console.log('counter' + counter);
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    // alert("New score: " + counter);
    $("#total-score").text(counter);


    if (counter === targetNumber) {
      alert("You win!");
      wins++;
      initGame();
      initGems();
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      losses++;
      initGame();
      initGems();
    }

  });

  function initGame() {
    min = 19;
    max = 120;
    counter = 0;
    randomNumber = 0;
    targetNumber = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(targetNumber);
    $("#total-score").text(counter);
    $("#number-to-guess").text(targetNumber);
    $("#crystals").empty();
    console.log('in init');

  }

  function initGems() {
    let imageSrcArray = ["assets/images/rubygem.jpg", "assets/images/blue-spinel-gemstone.jpg", "assets/images/yellowgem.jpg", "assets/images/emeraldgem.jpg"];

    // Now for the hard part. Creating multiple crystals each with their own unique number value.
    // We begin by expanding our array to include four options.
    // $("#crystals").empty();
    // Next we create a for loop to create crystals for every numberOption.
    for (var i = 0; i < imageSrcArray.length; i++) {
      // For each iteration, we will create an imageCrystal
      var imageCrystal = $("<img>");
      // First each crystal will be given the class ".crystal-image".
      // This will allow the CSS to take effect.
      imageCrystal.addClass("crystal-image");
      // Each imageCrystal will be given a src link to the crystal image
      //imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
      imageName = imageSrcArray[i];
      imageCrystal.attr("src", imageName);
      // Each imageCrystal will be given a data attribute called data-crystalValue.
      // This data attribute will be set equal to the array value.
      randomNumber = Math.floor(Math.random() * (gemMax - gemMin + 1) + gemMin);
      imageCrystal.attr("data-crystalvalue", randomNumber);
      console.log(randomNumber);
      // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
      $("#crystals").append(imageCrystal);
      console.log('in crystal init');
    }
  }
});

