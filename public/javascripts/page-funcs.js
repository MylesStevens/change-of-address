// Page level data.
var page;

// Page initialisation
function initialise(data) {
	try {
		page = JSON.parse(JSON.stringify(data));

		execute();

	} catch(e) {
		alert(e.message);
	}
}

// Page instruction
function execute() {
	// Startup, display elements from the initial setup.
	for(var i=0; i < page.questions.length; i++) {
		var question = page.questions[i];
		if(question.active == "true") {
			show_question(question.id);
		} else {
			hide_question(question.id);
		}
	}
	
	// Pre-populate any answers we have already given, as
	// the customer may have already filled in previously.
	for(var q=0; q < page.questions.length; q++) {
		var question = page.questions[q];

		// Pre-populate any answers we have already been
		// given by the customer, and are still relevant.
		for(var a=0; a < question.answers.length; a++) {
			var answer = question.answers[a];
			if(answer.value.length > 0) {
				eval("set_"+question.type+"(answer)");
			}
		}
	}

	disable('continue');
	if(page.validate == "false") {
		enable('continue');
	}
}

// Page completion.
function finalise() {
	//alert(JSON.stringify(page.questions));

	disable('continue');

	var active = 0, answered = 0;
	for(var q=0; q < page.questions.length; q++) {
		var question = page.questions[q];
		if(question.active == "true") {
			for(var a=0; a < question.answers.length; a++) {
				var answer = question.answers[a];
				if(answer.value.length > 0) {
					answered++;
				}
			}
			active++;
		}
	}

	if(answered == active) {
		enable('continue');
	}
}

// Page interaction
function answer(element) {
	var items = element.id.split("-");
	var question = items[0];
	var answer = items[1];
	var extend = (items.length == 3) ? items[2] : null;

	var lookup = (question+'-'+answer);

	for(var i=0; i < page.questions.length; i++) {
		if(page.questions[i].id == question) {

			// Are we using an dual-event element (button and text box)?
			if(extend == null) {
				eval("click_"+page.questions[i].type+"(element)");
			} else {
				var proxy = document.getElementById(lookup);
				eval("click_"+page.questions[i].type+"(proxy)");
			}

			for(var x=0; x < page.questions[i].answers.length; x++) {
				if(page.questions[i].answers[x].id == lookup) {

					page.state = page.questions[i].answers[x].decision;

					for(var s=0; s < page.questions[i].answers[x].show.length; s++) {
						show_question(page.questions[i].answers[x].show[s]);
					}
					for(var h=0; h < page.questions[i].answers[x].hide.length; h++) {
						hide_question(page.questions[i].answers[x].hide[h]);
					}
				}
			}
		}
	}

	if(page.validate == "true") {
		finalise();
	}
}

function decision(element, flow, conditions) {
	/*
	if((flow == null || flow.length == 0) || (conditions == null || conditions.length == 0)) {
		alert('ERROR: You have not used the decision tree properly!');
		return;
	} else {
		alert('Current Flow: ['+flow+'], Conditions: ['+conditions+']');
	}
	*/
	
	// If we don't have page validation turned on, we use the first decision.
	if((page.validate == "false") && (page.state.length == 0)) {
		page.state = 1;
		if(find_decision(page.state) == null) {
			page.state = flow+'-1';
		}
	}

	// Execute the decision we need to progress to the next screen.
	for(var i=0; i < page.decisions.length; i++) {
		var decision = page.decisions[i];
		if(decision.id == page.state) {
			if((decision.message.length > 0) && (decision.redirect.length > 0)) {
				if(confirm('Decision Point: ['+decision.message+']')) {
					window.location.href = decision.redirect;
				}
			} else if(decision.message.length > 0) {
				alert('Decision Point: ['+decision.message+']');
			} else {
				if(decision.redirect.length > 0) {
					window.location.href = decision.redirect;
				}
			}
		}
	}
}

// JSON helper functions
function find_decision(decision_id) {
	for(var d=0; d < page.decisions.length; d++) {
		var decision = page.decisions[d];
		if(decision.id == decision_id) {
			return decision;
		}
	}
	return null;
}

function find_question(question_id) {
	for(var q=0; q < page.questions.length; q++) {
		var question = page.questions[q];
		if(question.id == question_id) {
			return question;
		}
	}
	return null;
}

function find_answer(answer_id) {
	for(var q=0; q < page.questions.length; q++) {
		var question = page.questions[q];
		for(var a=0; a < question.answers.length; a++) {
			var answer = question.answers[a];
			if(answer.id == answer_id) {
				return answer;
			}
		}
	}
	return null;
}

function find_both(answer_id) {
	for(var q=0; q < page.questions.length; q++) {
		var question = page.questions[q];
		for(var a=0; a < question.answers.length; a++) {
			var answer = question.answers[a];
			if(answer.id == answer_id) {
				return [question, answer];
			}
		}
	}
	return null;
}

function set(answer_id, new_value) {
	var items = find_both(answer_id);
	for(var a=0; a < items[0].answers.length; a++) {
		var answer = items[0].answers[a];
		if(answer.id == answer_id) {
			answer.value = new_value;
		} else {
			answer.value = '';
		}
	}
}

function show_question(question_id) {
	if(question_id.split("-").length < 2) {
		var question = find_question(question_id);
		question.active = 'true';
	}
	show(question_id);
}

function hide_question(question_id) {
	if(question_id.split("-").length < 2) {
		var question = find_question(question_id);
		question.active = 'false';
	}
	hide(question_id);
}

function click_text(element) {
	//alert('Click Text: '+element.id+', Value: '+element.value);
	//return ((event.charCode >= 48) && (event.charCode <= 57));
	set(element.id, element.value);
}

function click_radio(element) {
	//alert('Click Radio: '+element.id+', Checked: '+element.checked);
	var value = (element.checked) ? element.value : '';
	set(element.id, value);
}

function click_checkbox(element) {
	//alert('Click Checkbox: '+element.id+', Checked: '+element.checked);
	var value = (element.checked) ? element.value : '';
	set(element.id, value);
}

function set_text(answer) {
	document.getElementById(answer.id).value = answer.value;
}

function set_radio(answer) {
	var element = document.getElementById(answer.id);
	element.value = answer.value;
	element.checked = true;
}

function set_checkbox(answer) {
	var element = document.getElementById(answer.id);
	element.value = answer.value;
	element.checked = true;
}

