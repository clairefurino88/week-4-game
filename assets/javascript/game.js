var score = 0;
var goal;
var wins = 0;
var losses = 0;
var crystalValue = [(Math.floor(Math.random() * 11)) + 1, (Math.floor(Math.random() * 11)) + 1, (Math.floor(Math.random() * 11)) + 1, (Math.floor(Math.random() * 11)) + 1];
var crystalImageSrc = ["assets/images/jewel-3.png", "assets/images/jewel-2.png", "assets/images/jewel-1.png", "assets/images/jewel-4.png"];

$("document").ready(function(){
 	setGoal();
 	setCrystalValue();
	for (var i = 0; i < crystalValue.length; i++) {

	    // create an imageCrystal
	    var imageCrystal = $("<img>");

	    // give each crystal ".crystal-image" class
	    imageCrystal.addClass("crystal-image");

	    // assign image src based on crystalImageSrc array
	    imageCrystal.attr("src", crystalImageSrc[i]);

	    // give each imageCrystal data attribute called data-crystalValue which is equal to the crystalValue array value
	    imageCrystal.attr("data-crystalvalue", crystalValue[i]);

	    // append each crystal image to the page.
	    $(".crystals").append(imageCrystal);
	 }

	$(".crystal-image").click(function() {

        score += parseInt($(this).attr("data-crystalvalue"));
        
		$(".score").text(score);

		if (score==goal)
		{
			wins++;
			$(".wins").text(wins);
			alert ("YOU WON! It was probably all luck. I will beat you next time. Click 'OK' to play again.");
			setGoal();
			setCrystalValue();
			score = 0;
			$(".score").text(score);
		}

		if (score > goal)
		{
			losses++;
			$(".losses").text(losses);
			alert ("YOU LOSE! If you would like to be defeated again click 'OK'");
			setGoal();
			setCrystalValue();
			score = 0;
            $(".score").text(score);
        }
        
	});

 });


function setGoal (){
	goal = Math.floor(Math.random()*100)+20;
	$(".goal").text(goal);
};

function setCrystalValue(){
	crystalValue = [(Math.floor(Math.random() * 11)) + 1, (Math.floor(Math.random() * 11)) + 1, (Math.floor(Math.random() * 11)) + 1, (Math.floor(Math.random() * 11)) + 1];
	console.log (crystalValue);
};