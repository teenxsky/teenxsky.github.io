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
let sectionHeight = bodyHeight / 7;

let tl = gsap.timeline()
gsap.fromTo("#game1", { y: window.innerHeight, opacity: 1 }, {
    opacity: 1, y: -window.innerHeight, duration: 5,
    scrollTrigger: {
        trigger: 'body',
        start: sectionHeight,
        end: sectionHeight * 3,
        scrub: true,
    }
})

gsap.fromTo("#game2", { y: window.innerHeight, opacity: 1 }, {
    opacity: 1, y: -window.innerHeight, duration: 5,
    scrollTrigger: {
        trigger: 'body',
        start: sectionHeight * 2,
        end: sectionHeight * 4,
        scrub: true,
    }
})

gsap.fromTo("#messanger", { y: window.innerHeight, opacity: 1 }, {
    opacity: 1, y: -window.innerHeight, duration: 5,
    scrollTrigger: {
        trigger: 'body',
        start: sectionHeight * 3,
        end: sectionHeight * 5,
        scrub: true,
    }
})

gsap.fromTo("#text-editor", { y: window.innerHeight, opacity: 1 }, {
    opacity: 1, y: -window.innerHeight, duration: 5,
    scrollTrigger: {
        trigger: 'body',
        start: sectionHeight * 4,
        end: sectionHeight * 6,
        scrub: true,
    }
})