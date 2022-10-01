let elList = document.querySelector('.js-list');

pokemons.forEach((item) => {
	let newItem = document.createElement('li');
	let newSpan = document.createElement('span');
	let newTitle = document.createElement('h2');
	let newImg = document.createElement('img');
	let newTime = document.createElement('time');
	let newText = document.createElement('p');

	newSpan.textContent = item.num;
	newTitle.textContent = item.name;
	newImg.src = item.img;
	newImg.setAttribute('alt', 'Pocemon image');
	newImg.setAttribute('with', '200');
	newImg.setAttribute('height', '200');
	newTime.textContent = item.spawn_time;
	newTime.dateTime = item.spawn_time;
	newText.textContent = item.candy;

	newItem.appendChild(newSpan);
	newItem.appendChild(newTitle);
	newItem.appendChild(newImg);
	newItem.appendChild(newTime);
	newItem.appendChild(newText);
	elList.appendChild(newItem);
});




