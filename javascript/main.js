// Grab the input value .

document.querySelector('.js-go').addEventListener('click', () => {
	let input = document.querySelector('input');
	let inputValue = input.value;
	putInput(inputValue);
});

document.querySelector('.js-userinput').addEventListener('keyup', (e) => {
	let input = document.querySelector('input');
	let inputValue = input.value;

	if (e.which === 13) {
		putInput(inputValue);
	}
});

// do the data stuff with the API .
function putInput(input) {
	console.log(input);
	let url = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC`;

	// Ajax Call
	let GiphyCallAjax = new XMLHttpRequest();
	GiphyCallAjax.open('GET', url);
	GiphyCallAjax.send();

	GiphyCallAjax.addEventListener('load', (e) => {
		let data = e.target.response;
		console.log(data);
		pushToDom(data);
	});
}

putInput();

// Show me the GIFs .

function pushToDom(inputValue) {
	let div = document.querySelectorAll('div')[1];
	let response = JSON.parse(inputValue);

	div.innerHTML = '';

	response.data.forEach((el) => {
		let src = el.images.fixed_height.url;

		div.innerHTML += `<img src = ${src} class="container-image"/>`;
	});
}
