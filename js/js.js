//mobile navigation
function menu(element) {

    let mobileMenu = document.getElementById('mobilemenu');
    let lock = document.getElementById('lock-icon');
    let noTitle = document.getElementById('unlock-title');
    let dropdown = document.getElementById('dropdown');


    if (mobileMenu.style.height == '70px') {
        mobileMenu.style.height = '100vh';
        lock.style.content = 'url(opened.png)';
        noTitle.style.display = 'none';
        dropdown.style.display = 'flex';


    } else {
        mobileMenu.style.height = '70px';
        lock.style.content = 'url(closed.png)';
        noTitle.style.display = 'flex';
        dropdown.style.display = 'none';
    }
}

//desktop navigation super long version

//home
var elementBGhome = document.getElementById('elementBGhome');
var img_locker_home = document.getElementById('img_locker_home');
var home = document.getElementById('sectionID');

elementBGhome.addEventListener('mouseover', function () {
    img_locker_home.setAttribute("style", "content: url('opened.png');")
});
elementBGhome.addEventListener('mouseover', function () {
    elementBGhome.setAttribute("style", "background: white;");
});
elementBGhome.addEventListener('mouseout', function () {
    img_locker_home.setAttribute("style", "content: url('closed.png');")
});
elementBGhome.addEventListener('mouseout', function () {
    elementBGhome.setAttribute("style", "background: lightgray;")
});
elementBGhome.addEventListener("click", function () {
    img_locker_home.setAttribute("style", "content: url('opened.png');")
});
elementBGhome.addEventListener("click", function () {
    elementBGhome.setAttribute("style", "background: white;")
});
home.addEventListener("mouseover", function () {
    elementBGhome.setAttribute("style", "background: white;")
});
home.addEventListener("mouseover", function () {
    img_locker_home.setAttribute("style", "content: url('opened.png');")
});
home.addEventListener('mouseout', function () {
    elementBGhome.setAttribute("style", "background: lightgray;")
});
home.addEventListener('mouseout', function () {
    img_locker_home.setAttribute("style", "content: url('closed.png');");
});


//about

var elementBGabout = document.getElementById('elementBGabout');
var img_locker_about = document.getElementById('img_locker_about');
var about = document.getElementById('sectionID');

elementBGabout.addEventListener('mouseover', function () {
    img_locker_about.setAttribute("style", "content: url('opened.png');");
    elementBGabout.setAttribute("style", "background: white;");
});
elementBGabout.addEventListener('mouseout', function () {
    img_locker_about.setAttribute("style", "content: url('closed.png');");
    elementBGabout.setAttribute("style", "background: lightgray;");
});
elementBGabout.addEventListener("click", function () {
    img_locker_about.setAttribute("style", "content: url('opened.png');")
});
elementBGabout.addEventListener("click", function () {
    elementBGabout.setAttribute("style", "background: white;")
});
about.addEventListener("mouseover", function () {
    elementBGabout.setAttribute("style", "background: white;");
    img_locker_about.setAttribute("style", "content: url('opened.png');")
});
about.addEventListener('mouseout', function () {
    elementBGabout.setAttribute("style", "background: lightgray;");
    img_locker_about.setAttribute("style", "content: url('closed.png');");
});

//work

var elementBGwork = document.getElementById('elementBGwork');
var img_locker_work = document.getElementById('img_locker_work');
var work = document.getElementById('sectionID');

elementBGwork.addEventListener('mouseover', function () {
    img_locker_work.setAttribute("style", "content: url('opened.png');");
    elementBGwork.setAttribute("style", "background: white;")
});
elementBGwork.addEventListener('mouseout', function () {
    img_locker_work.setAttribute("style", "content: url('closed.png');");
    elementBGwork.setAttribute("style", "background: lightgray;")
});
elementBGwork.addEventListener("click", function () {
    img_locker_work.setAttribute("style", "content: url('opened.png');");
    elementBGwork.setAttribute("style", "background: white;")
});

work.addEventListener("mouseover", function () {
    img_locker_work.setAttribute("style", "content: url('opened.png');");
    elementBGwork.setAttribute("style", "background: white;")
});
work.addEventListener('mouseout', function () {
    img_locker_work.setAttribute("style", "content: url('closed.png');");
    elementBGwork.setAttribute("style", "background: lightgray;")
});



//gallery

var elementBGgallery = document.getElementById('elementBGgallery');
var img_locker_gallery = document.getElementById('img_locker_gallery');
var gallery = document.getElementById('sectionID');

elementBGgallery.addEventListener('mouseover', function () {
    img_locker_gallery.setAttribute("style", "content: url('opened.png');");
    elementBGgallery.setAttribute("style", "background: white;")
});
elementBGgallery.addEventListener('mouseout', function () {
    img_locker_gallery.setAttribute("style", "content: url('closed.png');");
    elementBGgallery.setAttribute("style", "background: lightgray;")
});
elementBGgallery.addEventListener("click", function () {
    img_locker_gallery.setAttribute("style", "content: url('opened.png');");
    elementBGgallery.setAttribute("style", "background: white;")
});

gallery.addEventListener("mouseover", function () {
    img_locker_gallery.setAttribute("style", "content: url('opened.png');");
    elementBGgallery.setAttribute("style", "background: white;")
});
gallery.addEventListener('mouseout', function () {
    img_locker_gallery.setAttribute("style", "content: url('closed.png');");
    elementBGgallery.setAttribute("style", "background: lightgray;")
});

//contact

var elementBGcontact = document.getElementById('elementBGcontact');
var img_locker_contact = document.getElementById('img_locker_contact');
var contact = document.getElementById('sectionID');

elementBGcontact.addEventListener('mouseover', function () {
    img_locker_contact.setAttribute("style", "content: url('opened.png');");
    elementBGcontact.setAttribute("style", "background: white;")
});
elementBGcontact.addEventListener('mouseout', function () {
    img_locker_contact.setAttribute("style", "content: url('closed.png');");
    elementBGcontact.setAttribute("style", "background: lightgray;")
});
elementBGcontact.addEventListener("click", function () {
    img_locker_contact.setAttribute("style", "content: url('opened.png');");
    elementBGcontact.setAttribute("style", "background: white;")
});

contact.addEventListener("mouseover", function () {
    img_locker_contact.setAttribute("style", "content: url('opened.png');");
    elementBGcontact.setAttribute("style", "background: white;")
});
contact.addEventListener('mouseout', function () {
    img_locker_contact.setAttribute("style", "content: url('closed.png');");
    elementBGcontact.setAttribute("style", "background: lightgray;")
});
