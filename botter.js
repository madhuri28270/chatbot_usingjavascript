messages = document.getElementById('messages')
input = document.getElementById('input')
botterblock = document.getElementById('botterblock')
knowerblock = document.getElementById('knowerblock')

msgno = 0

diseases = {
"cold":{prescription:'Tylenol Cold + Head Congestion at Rite Aid Genexa Cold Crush Tablets at GNC'},
"fever":{prescription:"acetaminophen (Tylenol, others) ibuprofen (Advil, Motrin IB, others) aspirin"},
"cough":{prescription:"There are 2 types of OTC cough medicines: antitussives and expectorants. A common antitussive is dextromethorphan"},
"acedity":{prescription:"Antacids that neutralize stomach acid. Antacids, such as Mylanta, Rolaids and Tums, may provide quick relief"},
"migrain":{prescription:"aspirin + acetaminophen + caffeine ibuprofen acetaminophen"}
}


function taketheinput(event) {
	// here is the js code for input processing
	//if they hit the enter key 
	if(event.key === "Enter"){
// create a buyer message block
		messages.innerHTML += knowerblock.outerHTML
		// and change its id
		msgno += 1
		messages.lastChild.id = msgno
		//now changing its text
		messages.lastChild.childNodes[1].textContent = input.value
		// finally process the input 
		processinput(input.value.toLowerCase())
		input.value = ""

	}
}

function processinput(inputval){

	if(inputval!=""){
		messages.innerHTML += botterblock.outerHTML
		// and change its id
		msgno += 1
		messages.lastChild.id = msgno
		//now changing its text
		messages.lastChild.childNodes[1].textContent = reply(inputval)	
	}

}



function reply(inputval) {
	result = inputval.match(/(how)|(\w+)/g)

	if(result.includes("how")){
		return "fine"
	}
	if(result.includes("prescription")){
		return recentdisease.prescription
    }
    if(result.includes("thankyou")){
		return "bye"
    }
    
	
	a="";
	result.forEach(function(disease){
		if(diseases.hasOwnProperty(disease)){
			a = "ok,if you want prescription enter the word 'prescription'" 
			recentdisease = diseases[disease]
		}
	})
	if(a){
		return a;
	}


	return "Sorry I dont understand"
	// if (inputval === "How are you?") {
	// 	return "I am fine"
	// }
}
