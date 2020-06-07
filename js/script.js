// var messages = document.getElementsByClassName('message');
//
// Array.prototype.forEach.call(messages,function(e) {
//   removeExtraSpaces(e);
// });
//
// function removeExtraSpaces(element) {
//   element.innerText = element.innerText.trim();
// }




var sendBTN = document.getElementsByClassName("send")[0];
sendBTN.addEventListener('click',function () {
  var typedMSG = document.getElementById('msg').value;
  var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var ampm = ""
	if (h>12 && h!=0) {
		h -=12
		ampm = "PM"
	}else{
		ampm = "AM"
	}
  var sentMsg = "<div class='message sent'>"+typedMSG+"<p>"+h+":"+m+" "+ampm+"<i class='zmdi zmdi-check-all'></i></p></div>";
  var chatMsgs = document.getElementsByClassName('chats')[0].innerHTML;
  // chatMsgs = chatMsgs+sentMsg;
  chatMsgs += sentMsg; //both are same
  document.getElementsByClassName('chats')[0].innerHTML = chatMsgs;
  document.getElementById('msg').value="";


});
