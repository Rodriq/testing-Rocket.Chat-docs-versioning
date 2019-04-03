const Http = new XMLHttpRequest();
var url = document.getElementById('request-url').value;
var responsePosition = document.getElementById('response-position');
// const urlBase = `https://open.rocket.chat/api/v1/info`

function sendRequest() {
	// // console.log(Http);
	// Http.open("GET", url);
	// // console.log(Http);	
	// Http.send();
	// console.log(responsePosition);	
	// Http.onreadystatechange = () => {
	// 	if (this.readyState == 4 && this.status == 200) {
	// 		console.log(Http.responseText);
	// 	}
		
	// 	responsePosition.innerHTML = Http.responseText;
	// }
	 // console.log(JSON.stringify(myAns)));
	fetch("https://open.rocket.chat/api/v1/info").then(res =>
	 res.json()
	 ).then(myAns => {
	 	responsePosition.innerHTML = JSON.stringify(myAns, undefined, 3)
	 	console.log(myAns.info);
	 });
}
