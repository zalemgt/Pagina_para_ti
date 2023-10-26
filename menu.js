const dropdows = document.querySelectorAll('dropdown');
dropdows.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selectd = dropdown.querySelector('.selected');

    select.addEventListener('click',()=>{
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    } );

    options.forEach(options => {
        option.addEventListener('click', () => {
            selectd.innerText = option.innerText;
            select.classList.remove('select-clicked');
            select.classList.remove('caret.rotate');
            select.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});