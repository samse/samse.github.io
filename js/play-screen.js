const closeBtn = musicPlayScreen.querySelector('.fa-chevron-left');

closeBtn.addEventListener('click', (event) => {
    musicListScreen.classList.remove(HIDDEN_CLASS);
    musicPlayScreen.classList.add(HIDDEN_CLASS);
});