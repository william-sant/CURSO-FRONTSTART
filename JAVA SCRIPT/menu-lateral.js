const menuEl = document.getElementById('menu');
const lateralMenuEl = document.getElementById('leteral-menu');

menuEl.addEventListener('click', handleMenu);

function handleMenu(){
    const lateralMenuClessList = Array.from(lateralMenuEl.classList);
    const isActive = lateralMenuClessList.find(el => el === 'active');

    if(isActive) {
        lateralMenuEl.classList.remove('active');
        return;
    }

    lateralMenuEl.classList.add('active');
}