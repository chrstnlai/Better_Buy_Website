//Form page:

var submitBtn = $(".submit-form-button");
submitBtn.on("click", scoreQuiz);

function scoreQuiz(){
	event.preventDefault(); 


	var q1 = Number($(".question1:checked").val())
	var q2 = Number($(".question2:checked").val())
	var q3 = Number($(".question3:checked").val())	
	var q4 = Number($(".question4:checked").val())
	var q5 = Number($(".question5:checked").val())
	var q6 = Number($(".question6:checked").val())

	var total = q1 + q2 + q3 + q4 + q5 + q6; 

	if(q3 == 9 || q4 == 5 || q4 == 6 || q5 == 5){
			window.location.replace("https://final-project.ritikagupta06.repl.co/shop-pages/patagonia.html")

	} else if(q3 == 7 || q3 == 0 || q4 == 0 || q4 == 7 || q5 == 1) {
			window.location.replace("https://final-project.ritikagupta06.repl.co/shop-pages/chnge.html")

	} else if(q3 == 10 || q4 == 1 || q5 == 2){
		window.location.replace("https://final-project.ritikagupta06.repl.co/shop-pages/organic.html")

	} else if(q3 == 4 || q3 == 2 || q4 == 4 || q5 == 3){
		window.location.replace("https://final-project.ritikagupta06.repl.co/shop-pages/reformation.html")

	} else if(q3 == 1 || q3 == 5 || q4 == 3 || q5 == 4){
		window.location.replace("https://final-project.ritikagupta06.repl.co/shop-pages/nu-in.html")

	} else if(q3 == 3 || q3 == 9 || q4 == 2 || q5 == 0){
		window.location.replace("https://final-project.ritikagupta06.repl.co/shop-pages/back%20beat%20rags.html")

	} else {
		window.location.replace("https://final-project.ritikagupta06.repl.co/shop-pages/frankie.html")
	}
}   