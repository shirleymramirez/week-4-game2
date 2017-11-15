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
			imageUrl: "../images/leia.png",
			counterAttackPower: 18
		},

		'finn': {
			name:'finn',
			healthPoints: 100,
			attackPower: 8,	
			imageUrl: "../images/finn.jpg",
			counterAttackPower: 15
		},

		'darth ': {
			name:'darth',
			healthPoints: 150,
			attackPower: 15,	
			imageUrl: "../images/darthvader.jpg",
			counterAttackPower: 20
		},

		'yoda': {
			name:'yoda',
			healthPoints: 160,
			attackPower: 20,	
			imageUrl: "../images/yoda.jpg",
			counterAttackPower: 22
		}
	}


	//Variable declaration for access at character object
	var charDiv = $("<div class='character' data-name='" + characters.name + "'>" + "alt=characters.name");
    var charName = $("<div class='character-name'>").text(characters.name);
    var charImage = $("<div class='character-image'>").attr("src", characters.imageUrl);
    var charhealth =$("<div class='character-health'>").text(characters.healthPoints);
    charDiv.append(charName).append(charImage).append(charhealth);
    $(renderArea).append(charDiv);

	var renderOne = starWarsStart(character, renderArea, makeChar);

});

//Variable Initialization
	var characterSelect;
	var currentDefender;
	var combatants = [];
	var counterWin;
	var killCount;
	var attackResult;
	var indexOfSelectedChar;


//Create function for main charater and the defender
function starWarsStart(character, renderArea, makeChar) {

	if(makeChar=='enemy'){
		$(charDiv).addClass('enemy');
	} else if(makeChar=='defender') {
		currentDefender = character;
		$(charDiv).addClass('target-enemy');
	}

	// Create function to render game message to DOM
	
  
	// Function for rendering charaters

	// Render Player's Character

	// Render's Combatants

	// Render one Enemy to Defender Area 

	// Render Defender

	// Re-render Defender when Attacked

	// Re-render Player Character when Attacked

	// Render Defeated Enemy

	// This is to Render All Characters for User to Choose their computer

	// Create functions to enable actions between objects. 

	// Restarts/Reset the game - renders a reset button
}