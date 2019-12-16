function toggleMenu() {
    let getMenu = document.querySelector(".page-navigation-items");
    getMenu.classList.toggle("page-navigation-hamburger");
}

    let getHamburger = document.querySelector("#page-navigation-beam");
    getHamburger.addEventListener("click", toggleMenu);

function changeMenuIcon(x) {
    x.classList.toggle("change");
}

    document.getElementById("show_info").addEventListener("click", concertOne, false);

function concertOne() {
    document.getElementById("hidden-div").style.display = "block";
    this.style.display = "none";
}

function writeInConsole(event) {
    event.preventDefault();
    var email = document.getElementById("email");
    var topic = document.getElementById("topic");
    console.log(email.value + "\n" + topic.value);
}

const gallery = document.querySelectorAll(".gallery__item")
    gallery.forEach(function(image) {
    image.addEventListener("mouseleave", function() {
        image.style.animation = "return 1s";
    })

    image.addEventListener("mouseenter", function() {
        image.style.animation = "hover 1s";
        image.style.animationFillMode = "both";
    })
})