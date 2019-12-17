const inpKey = document.getElementById('inpkey');
const inpVal = document.getElementById('inpval');
const btnInsert = document.getElementById('btninsert');
const output = document.getElementById('isoutput');


btnInsert.onclick = function (){

	const key = inpKey.value;

	const value = inpVal.value;


	if (key && value) {


		localStorage.setItem(key,value);
		location.reload();

	}

};


for (let i = 0; i < localStorage.length; i++) {

	const key = localStorage.key(i);
	const value = localStorage.getItem(key);

	output.innerHTML += `${key}: ${value} <br/>`;
}