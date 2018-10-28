// Welcome user alert
alert (" Welcome to 'Crystals Collector'!!")

//The player will have to guess the answer. The player will guess with numbers instead of letters. 

  // * There will be four crystals displayed as buttons on the page. 'c' stands for crystal.

    var crystalList = ["c1", "c2", "c3","c4"];

    console.log = ["crystalList"]

   //* The player will be shown a random number at the start of the game.

   $(document).ready(function() {

    $("#random-button").on("click", function() {

      // Create a string which will hold the lottery number
      var crystalNumber = "";

      // Then initiate a loop to generate 9 separate numbers
      for (var i = 0; i < 9; i++) {

        // For each iteration, generate a new random number between 1 and 9.
        var random = Math.floor(Math.random() * 9) + 1;

        // Take this number and then add it to the rest of the string.
        // In essence, we are iteratively building a string of numbers. (e.g. First: 1, Second: 13, Third: 135, etc.)
        CrytalNumber = random + crystalNumber;

      }

      // ... and then dump the random number into our random-number div.
      $("#random-number").prepend("<br><hr>" + CrystalNumber);

    });

  });

   //* When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

   //* Your game will hide this amount until the player clicks a crystal.
  
   //* When they do click one, update the player's score counter.

   //* The player wins if their total score matches the random number from the beginning of the game.

   //* The player loses if their score goes above the random number.

   //* The game restarts whenever the player wins or loses.

   //* When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   //* The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

//##### Option 1 Game design notes

//* The random number shown at the start of the game should be between 19 - 120.

//* Each crystal should have a random hidden value between 1 - 12.
