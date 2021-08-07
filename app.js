var url="https://api.funtranslations.com/translate/pirate.json";
var btn=document.querySelector("#bton");
btn.addEventListener("click", newFunc );
function newFunc(){

var outputTxt=document.querySelector("#usrOutput");
var InputTxt=document.querySelector("#usrInput");
console.log(InputTxt.value);
var qs=url+"?text="+InputTxt.value;
fetch(qs)
.then(response => response.json())
.then(json => {
outputTxt.innerText=json.contents.translated})
};
