function newPoint() {
    var a = document.getElementById("newPoints");
	a.innerHTML += '<li><textarea placeholder="To delete this point, select this textbox and press the &quot;Delete&quot; button on your keyboard." onkeydown="if(event.keyCode == 46) { this.parentNode.nextSibling.parentNode.removeChild(this.parentNode.nextSibling); this.parentNode.parentNode.removeChild(this.parentNode); }"></textarea></li><br>';
}
