const fotmElem = document.querySelector('.workers_form');
let workersArr = [];

fotmElem.addEventListener('submit', (evnt) => {
	event.preventDefault();
	const { fristname, lastname, age } = event.target; //this
	workersArr.push({
		fristname: fristname.value,
		lastname: lastname.value,
		age: age.value,
	});
	fristname.value = '';
	lastname.value = '';
	age.value = '';
	console.log(workersArr);
});
