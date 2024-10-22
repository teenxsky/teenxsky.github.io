gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

gsap.fromTo(".title", { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.title',
        start: 'top',
        end: 'bottom 20%',
        scrub: true
    }
})

gsap.fromTo(".about", { opacity: 0 }, {
    opacity: 1,
    scrollTrigger: {
        trigger: '.title',
        start: 'top',
        end: 'bottom',
        scrub: true
    }
})

gsap.fromTo(".about canvas", {opacity: 0}, {
    opacity: 1,
    scrollTrigger: {
        trigger: '.title',
        start: 'bottom 40%',
        end: 'bottom 0%',
        scrub: true
    }
})

gsap.fromTo(".about p", { x: -500, opacity: 0}, {
    opacity: 1, x: 0,
    scrollTrigger: {
        trigger: '.title',
        start: 'top 80%',
        end: 'bottom 0%',
        scrub: true
    }
})

document.querySelectorAll(".title .scroll-down-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: ".about" }
        });
    });
});

let bodyHeight = Number(document.querySelector("body").offsetHeight);
let sectionHeight = bodyHeight / 9;

gsap.fromTo("#game1", { x: window.innerWidth, opacity: 0 }, {
    opacity: 1, x: 0, duration: 2,
    scrollTrigger: {
        trigger: '.title',
        start: 'top 100%',
        end: 'bottom 0%',
        scrub: true
    }
})

gsap.fromTo("#game1", { y: 0, opacity: 1 }, {
    opacity: 0, y: -window.innerHeight, duration: 2,
    scrollTrigger: {
        trigger: 'body',
        start: sectionHeight * 1.5,
        end: sectionHeight * 3,
        scrub: true
    }
})

gsap.fromTo("#game2", { x: window.innerWidth, opacity: 0 }, {
    opacity: 1, x: 0, duration: 2, duration: 2,
    scrollTrigger: {
        trigger: '.title',
        start: sectionHeight * 2,
        end: sectionHeight * 3,
        scrub: true
    }
})

gsap.fromTo("#game2", { y: 0, opacity: 1 }, {
    opacity: 0, y: -window.innerHeight, duration: 2,
    scrollTrigger: {
        trigger: 'body',
        start: sectionHeight * 3,
        end: sectionHeight * 5,
        scrub: true
    }
})

gsap.fromTo("#messanger", { x: window.innerWidth, opacity: 0 }, {
    opacity: 1, x: 0, duration: 2, duration: 2,
    scrollTrigger: {
        trigger: '.title',
        start: sectionHeight * 4,
        end: sectionHeight * 5,
        scrub: true
    }
})

gsap.fromTo("#messanger", { y: 0, opacity: 1 }, {
    opacity: 0, y: -window.innerHeight, duration: 2,
    scrollTrigger: {
        trigger: 'body',
        start: sectionHeight * 5,
        end: sectionHeight * 7,
        scrub: true
    }
})

gsap.fromTo("#text-editor", { x: window.innerWidth, opacity: 0 }, {
    opacity: 1, x: 0, duration: 2,
    scrollTrigger: {
        trigger: '.title',
        start: sectionHeight * 6,
        end: sectionHeight * 7,
        scrub: true
    }
})

// gsap.fromTo("#text-editor", { y: 0, opacity: 1 }, {
//     opacity: 0, y: -window.innerHeight,
//     scrollTrigger: {
//         trigger: 'body',
//         start: sectionHeight * 7,
//         end: sectionHeight * 9,
//         scrub: true
//     }
// })