$(document).ready(function() {

// Question setup
function Details(qText) {
	this.qText = qText;
}

function Results(rText) {
	this.rText = rText;
}

var foodQuiz = new Array();
foodQuiz[0] = new Details('<h2>' + 'Balut' + '</h2>' + '<img src="images/balut-min.jpg" width="121px" height="123px">');
foodQuiz[1] = new Details('<h2>' + 'Hákarl' + '</h2>' + '<img src="images/hakarl-min.jpg" width="192px" height="137px">');
foodQuiz[2] = new Details('<h2>' + 'Sannakji' + '</h2>' + '<img src="images/sannakji-min.jpg" width="168px" height="124px">');
foodQuiz[3] = new Details('<h2>' + 'Hairy Tofu' + '</h2>' + '<img src="images/hairytofu-min.jpg" width="178px" height="116px">');
foodQuiz[4] = new Details('<h2>' + 'Bundaegi' + '</h2>' + '<img src="images/bundaegi-min.jpg" width="150px" height="120px">');
foodQuiz[5] = new Details('<h2>' + 'Chitlins' + '</h2>' + '<img src="images/chitterlings-min.jpg" width="128px" height="127px">');
foodQuiz[6] = new Details('<h2>' + 'Haggis' + '</h2>' + '<img src="images/haggis-min.jpg" width="150px" height="117px">');
foodQuiz[7] = new Details('<h2>' + 'Tamilok (Woodworm)' + '</h2>' + '<img src="images/mangrovewoodworm-min.jpg" width="126px" height="125px">');
foodQuiz[8] = new Details('<h2>' + 'Smalahove' + '</h2>' + '<img src="images/smalahove-min.jpeg" width="206px" height="108px">');
foodQuiz[9] = new Details('<h2>' + 'Kopi Luwak (Weasel Dung Coffee)' + '</h2>' + '<img src="images/weaseldungcoffee-min.jpg" width="163px" height="131px">');

var results = new Array();
results[0] = new Results('<article>' + '<p>' + "Balut is a popular snack in the Philippines. It is a developing duck embryo that is boiled and eaten in the shell. It's served best in the dark with a side of salt and vinegar!" + '</p>' + '</article>');
results[1] = new Results('<article>' + '<p>' + "Hákarl is a national dish of Iceland. It is made of shark meat that has been fermented and hung to dry for 4 or 5 months. It is known for its ammonia-rich smell and fishy taste." + '</p>' + '</article>');
results[2] = new Results('<article>' + '<p>' + "Sannakji is a raw octopus dish enjoyed in South Korea. It is chopped up and served immediately to ensure that the tentacles wiggle until they are totally swallowed. The dish is believed to help build stamina." + '</p>' + '</article>');
results[3] = new Results('<article>' + '<p>' + "Hairy tofu is a street snack that can be found in most parts of mainland China. It is known for its pungent (ie: offensive) smell and mushy consistency." + '</p>' + '</article>');
results[4] = new Results('<article>' + '<p>' + "South Korea strikes again with this street snack consisting of cooked silkworm pupae. A cup could be bought for about a dollar at many street vendors (what a steal!)." + '</p>' + '</article>');
results[5] = new Results('<article>' + '<p>' + "Chitlins are a popular American soul food in the South. The dish consists of the small intestines of a big and cooked in broth - best with an onion to offset the unpleasant smell." + '</p>' + '</article>');
results[6] = new Results('<article>' + '<p>' + "This horrific-looking dish is popular in Scotland. It consists of sheep's offal mixed with oatmeal and it is boiled all together in the animal's stomach." + '</p>' + '</article>');
results[7] = new Results('<article>' + '<p>' + "Tamilok (woodworm) is a delicacy of the island of Palawan in the Philippines. It is usually taken straight from the log and marinated raw with vinegar, chili peppers, and onions." + '</p>' + '</article>');
results[8] = new Results('<article>' + '<p>' + "Smalahove is a traditional Norwegian dish. It is made from a sheep's head and usually served before Christmas. Don't worry, the brain is removed before eating." + '</p>' + '</article>');
results[9] = new Results('<article>' + '<p>' + "Kopi Luwak is a coffee made from the seeds of coffee berries once they have been eaten and defecated by the Asian palm civet. It is especially popular in Vietnam, where it is sold at $3,000 per kg." + '</p>' + '</article>');

function Answers(a0, a1, a2, a3, answer) {
	this.a0 = a0;
	this.a1 = a1;
	this.a2 = a2;
	this.a3 = a3;
	this.answer = answer;
}

var answerList = new Array();
answerList[0] = new Answers("Romania",
							"Japan",
							"Philippines",
							"Argentina",
							"Philippines");
answerList[1] = new Answers("Iceland",
							"Finland",
							"Norway",
							"Greenland",
							"Iceland");
answerList[2] = new Answers("China",
							"Japan",
							"Taiwan",
							"Korea",
							"Korea");
answerList[3] = new Answers("Taiwan",
							"Thailand",
							"Singapore",
							"China",
							"China");
answerList[4] = new Answers("Korea",
							"Malaysia",
							"India",
							"Indonesia",
							"Korea");
answerList[5] = new Answers("Canada",
							"USA",
							"Brazil",
							"Peru",
							"USA");
answerList[6] = new Answers("Ireland",
							"England",
							"Scotland",
							"Canada",
							"Scotland");
answerList[7] = new Answers("Indonesia",
							"Thailand",
							"Fiji",
							"Philippines",
							"Philippines");
answerList[8] = new Answers("Switzerland",
							"Italy",
							"Norway",
							"Germany",
							"Norway");
answerList[9] = new Answers("Philippines",
							"Vietnam",
							"Singapore",
							"Cambodia",
							"Vietnam");

// Global variables

var currentQuestion = 0;
	qTrack = 0;
	cTrack = 0;
	$main = $('#main');
	$intro = $('#intro-text');
	$start = $('#start');
	$tracker = $('#tracker');
	$mainQuestion = $('#main-question');
	$resultInfo = $('.result-info');
	$nextQuestion = $('#next-question');
	$answerSelection = $('.answerSelection');
	$retry = $('#retry');

// When user clicks "Take the quiz" button, they are directed to first question

$start.on('click', function() {
	$intro.hide();
	$start.hide();
	$mainQuestion.fadeIn(300);
	$main.html("" + foodQuiz[0].qText + "").hide().fadeIn(300);
	$answerSelection.append('<input type="button" value='+answerList[currentQuestion].a0+'>').append('<input type="button" value='+answerList[currentQuestion].a1+'>').append('<input type="button" value='+answerList[currentQuestion].a2+'>').append('<input type="button" value='+answerList[currentQuestion].a3+'>').hide().fadeIn(800);
});

// User is directed to next question when "Next" is pressed
$nextQuestion.on('click', function() {
	if (currentQuestion < 9) {
		currentQuestion++;
		$main.empty();
		$answerSelection.empty();
		$nextQuestion.hide();
		$('#correct').hide();
		$('#incorrect').hide();
		nextQuestion();
	}
	else {
		$tracker.html('<h3>' + 'You got' + " " + cTrack + " " + 'out of 10 questions correct!' + '</h2>').hide().fadeIn(300);
		$main.hide();
		$answerSelection.empty();
		$mainQuestion.hide();
		$nextQuestion.hide();
		$('#correct').hide();
		$('#incorrect').hide();
		$retry.show();
	}

function nextQuestion() {
	$mainQuestion.show();
	$main.hide().html("" + foodQuiz[currentQuestion].qText + "").fadeIn(300);
	$answerSelection.append('<input type="button" value='+answerList[currentQuestion].a0+' id="a">').append('<input type="button" value='+answerList[currentQuestion].a1+' id="b">').append('<input type="button" value='+answerList[currentQuestion].a2+' id="c">').append('<input type="button" value='+answerList[currentQuestion].a3+' id="d">');
}
});

// Answer changes color when it is selected
$answerSelection.on('click', 'input:button', function() {
	$answerSelection.find('input:button').attr('disabled', true);
	$(this).css({'background-color': '#452D58',
				'color': '#F3F5F4'});
	checkAnswer($(this).attr("value"));
});

function checkAnswer(userAnswer) {
	if (userAnswer == undefined) {
		alert("Not working");
	}
	else if (userAnswer == answerList[currentQuestion].answer) {
		cTrack++;
		qTrack++;
		$nextQuestion.hide().fadeIn(300);
		$mainQuestion.hide();
		$('#correct').hide().fadeIn(300);
		$main.hide().html("" + foodQuiz[0].qText + "");
		$main.html("" + results[currentQuestion].rText + "").fadeIn(300);
	}
	else if(userAnswer != answerList[currentQuestion].answer) {
		qTrack++;
		$nextQuestion.hide().fadeIn(300);
		$mainQuestion.hide();
		$('#incorrect').hide().fadeIn(300);
		$main.hide().html("" + foodQuiz[0].qText + "");
		$main.html("" + results[currentQuestion].rText + "").fadeIn(300);
	}
}

// Retake quiz after initial quiz is over
$retry.on('click', function() {
	var qTrack = 1;
		cTrack = 0;
		currentQuestion = 0;
	$retry.hide();
	$tracker.hide();
	$mainQuestion.hide().fadeIn(300);
	$main.hide().html("" + foodQuiz[0].qText + "").fadeIn(300);
	$answerSelection.append('<input type="button" value='+answerList[currentQuestion].a0+' id="a">').append('<input type="button" value='+answerList[currentQuestion].a1+' id="b">').append('<input type="button" value='+answerList[currentQuestion].a2+' id="c">').append('<input type="button" value='+answerList[currentQuestion].a3+' id="d">').hide().fadeIn(500);
})
});
