// document.getElementById('element').style.display = 'none';

function toggle(name) {
	var abstractdiv = document.getElementById(name);
	if(abstractdiv.style.display == 'block') {
			abstractdiv.style.display = 'none';
		} else {
			abstractdiv.style.display = 'block';
		}
}

