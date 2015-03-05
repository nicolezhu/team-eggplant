
var add = document.getElementById("add"); 
var inputBox = document.getElementById("inputIngred");


//Citation: I adapted the website's code example to create an onclick function in JS and HTML: http://stackoverflow.com/questions/4825295/javascript-onclick-to-get-the-id-of-the-clicked-button
function removeIngred(ingredientToRemove)
{
	//Citation: I adapted this website's code example to remove ingredients: http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_display2
	ingredientToRemove.style.display = "none";
}

add.onclick = function()
{
	//Citation: I adapted this website's code example to create and display a button in JavaScript: http://viralpatel.net/blogs/dynamic-add-textbox-input-button-radio-element-html-javascript/
	var ingredButton = document.createElement("input");
	ingredButton.setAttribute("type", "button");
	ingredButton.setAttribute("value", inputBox.value);
	ingredButton.setAttribute("onclick", "removeIngred(this)");
	var ingredParent = document.getElementById("ingredientBox");
	ingredParent.appendChild(ingredButton); 
	inputBox.value = "";

};