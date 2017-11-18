$(document).ready(function() {
	// Audio Clips
	var audio = new Audio('assets/audio/imperial_march.mp3');
	var force = new Audio('assets/audio/force.mp3');
	var blaster = new Audio('assets/audio/blaster-firing.mp3');
	var jediKnow = new Audio('assets/audio/jedi-know.mp3');
	var lightsaber = new Audio('assets/audio/light-saber-on.mp3');
	var rtwoo = new Audio('assets/audio/R2D2.mp3');


	// Array of Players in an Object
	var characters = {

		'princessLeia': {
			name:'princessLeia',
			healthPoints: 120,
			attackPower: 10,	
			imageUrl: "assets/images/leia.png",
			counterAttackPower: 18
		},

		'finn': {
			name:'finn',
			healthPoints: 100,
			attackPower: 8,	
			imageUrl: "assets/images/finn.jpg",
			counterAttackPower: 15
		},

		'darth': {
			name:'darth',
			healthPoints: 150,
			attackPower: 15,	
			imageUrl: "assets/images/darthvader.jpg",
			counterAttackPower: 20
		},

		'yoda': {
			name:'yoda',
			healthPoints: 160,
			attackPower: 20,	
			imageUrl: "assets/images/yoda.jpg",
			counterAttackPower: 22
		}
	}

	//Variable Declaration
	var currentSelectedChar;
	var opponents = {};
	var turnCounter = 1;
	var currentOpponent;

	//Function to render a character
	function renderCharacter(character, renderArea, makeChar ) {
		var charDiv = $("<div class='" + makeChar + "' data-name='" + character.name + "'>");
		var charName = $("<div class='character-name'>").text(character.name);
    	var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
    	var charHealth = $("<div class='character-health'>").text(character.healthPoints);
    	charDiv.append(charName).append(charImage).append(charHealth);
    	$(renderArea).append(charDiv);  	
	}

	// Create function to render game message to DOM
	function renderMessage(message) {
		var gameMesageSet = $("#gameMessage");
	    var newMessage = $("<div>").text(message);
	    console.log(newMessage);
	    gameMesageSet.append(newMessage);

	    if (message == 'clearMessage') {
	      gameMesageSet.text('');
	    }
	  };
	
	 renderAllCharacters( characters, '#characters-section', 'character');

	//Function to render all characters
	function renderAllCharacters( characters,renderArea, makeChar) {
		for( var key in characters ){	
			renderCharacter(characters[key], renderArea, makeChar); 
		}					
	};

	//Function to render players character
	$(document).on("click", '.character', function(event) {
		var name = $(this).data('name');

		//Check if no player has been selected
		if(!currentSelectedChar ) {
			currentSelectedChar = characters[name];
			for( var key in characters ) {

				//Select Opponents
				if( key != name) {
					opponents[key] = characters[key];
				}
			}
			//Hide other characters 
			$('#characters-section').hide();

			//this is to render a selected character
			renderCharacter(currentSelectedChar, '#selected-character', 'myplayer');


			//this is to render all characters for user to choose fight against with
			 $('#available-to-attack-section').prepend("Choose Your Next Opponent");   
			renderAllCharacters(opponents, '#available-to-attack-section', 'opponents');
		}
	});

	//Render 1 Opponent to Defend their Area
	$(document).on("click", '.opponents', function(event) {
	
		//Select an opponent to fight
		var name = ($(this).data('name'));

		//if defender area is empty
		 renderCharacter(opponents[name], '#defender', 'myopponents');

		 currentOpponent = opponents[name];

		//Hide other characters 
		$("#available-to-attack-section").fadeOut("slow"); 
	});

	//Function to create battle 
	$("#attack-button").on("click", function() { 
		console.log('#attack-button');
    
		var attackMessage = "You attacked " + currentOpponent.name + " for " + (currentSelectedChar.attackPower * turnCounter) + " damage.";
		blaster.play();
		//renderMessage("clearMessage");
		console.log(attackMessage);
	
		//combat
	    currentOpponent.healthPoints = currentOpponent.healthPoints - (currentSelectedChar.attackPower * turnCounter);
	    console.log(currentOpponent.healthPoints);	    

	    //win condition
     	 if (currentOpponent.healthPoints > 0) {

	        //enemy not dead keep playing
	        renderCharacter(currentOpponent, 'playerDamage', '');

	        //player state change
	        var counterAttackMessage = currentOpponent.name + " attacked you back for " + currentOpponent.counterAttackPower + " damage.";
	        console.log(counterAttackMessage);
	
	        renderMessage(attackMessage);
	        renderMessage(counterAttackMessage);

	        currentSelectedChar.healthPoints = currentSelectedChar.healthPoints - currentOpponent.counterAttackPower;
       		console.log(currentSelectedChar.healthPoints);

    	} else {

    	}
    });

});
