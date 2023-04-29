'use strict';

function onToggleMenu() {
	document.body.classList.toggle('menu-open');
	const elBtn = document.querySelector('.menu-button');
	elBtn.innerText = elBtn.innerText === '☰' ? 'X' : '☰';
}