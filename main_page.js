var setOfPuns = ["My favorite drink for Starbucks is a cat-puccino", "I can't believe I got fired from the calendar factory. All I did was take a day off.", "My first job was working in an orange juice factory, but I got canned: couldn't concentrate.", "What was Forrest Gump's email password? 1forrest1", "I'm reading a book about anti-gravity. It's impossible to put down.", "What do sea monsters eat for lunch? Fish and ships.", "Santa's elves are just a bunch of subordinate Clauses.", "Bananas are filled with potassi-YUM", "Which of Santa's reindeers needs to mind his manners the most? Rude-olph", "What is a runner's favourite subject in school? Jog-raphy!", "What did the boy cat say to the girl cat on Valentine's Day? You're purrr-fect for me!"];
 
var refreshButt = document.getElementById("refButt");
var punSpan = document.getElementById("punSpan");

refreshButt.addEventListener('click', function() {
	var randomNumber = Math.floor(Math.random() * setOfPuns.length) ;
	punSpan.innerHTML = setOfPuns[randomNumber];
}, false);

