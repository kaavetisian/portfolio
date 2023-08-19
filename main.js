const plus = document.querySelector(`#plus`);

const addShowNav = document.querySelector(`.nav-mob`);

plus.addEventListener(`click`, () => {
    plus.classList.toggle(`rotate`);
    let navIsClose = !addShowNav.classList.contains(`show-nav`);
    
    if(navIsClose) {
        addShowNav.classList.remove(`hide-nav`);
        addShowNav.classList.add(`show-nav`);
    } else {
        addShowNav.classList.remove(`show-nav`);
        addShowNav.classList.add(`hide-nav`);
    }
})