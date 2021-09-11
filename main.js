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