//mobile navigation
function menu(element) {

    let mobileMenu = document.getElementById('mobilemenu');
    let lock = document.getElementById('lock-icon');
    let noTitle = document.getElementById('unlock-title');
    let dropdown = document.getElementById('dropdown');




    if (mobileMenu.style.height == '50px') {
        mobileMenu.style.height = '100vh';
        lock.style.content = 'url(opened.png)';
        noTitle.style.display = 'none';
        dropdown.style.display = 'flex';


    } else {
        mobileMenu.style.height = '50px';
        lock.style.content = 'url(closed.png)';
        noTitle.style.display = 'flex';
        dropdown.style.display = 'none';
    }
}
