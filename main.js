const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*show menu*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*hide menu*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*remove menu mobile*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
};

const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
};
const tl = new TimelineMax({
    repeat: -1,
    repeatDelay: 2
});

tl
    .from(".one", 0.7, {
        opacity: 0,
        y: 10
    })
    .to(
        ".one",
        0.7, {
            opacity: 0,
            y: 10
        },
        "+=2.5"
    )
    .from(".two", 0.4, {
        opacity: 0,
        y: 10
    })

.to(
    ".two",
    0.7, {
        opacity: 0,
        y: 10
    },
    "+=2.5")

.from(".three", 0.7, {
        opacity: 0,
        y: 10
            // scale: 0.7
    })
    .to(
        ".three",
        0.7, {
            opacity: 0,
            y: 10
        },
        "+=2.5"
    )
    .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0
    })
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('achievements__active')
        })
        target.classList.add('achievements__active')

        tabs.forEach(tab => {
            tab.classList.remove('achievements__active')
        })
        tab.classList.add('achievements__active')
    })
})

var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause() {
    if (count == 0) {
        count = 1
        audio.play()
    } else {
        count = 0
        audio.pause()
    }
}