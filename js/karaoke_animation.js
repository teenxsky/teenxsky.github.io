gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char, index) => {

    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor

    const text = new SplitType(char, { types: 'chars' })

    gsap.fromTo(text.chars,
        {
            color: bg,
        },
        {
            color: fg,
            duration: 0.3,
            stagger: 0.02,
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'bottom 0%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
        })
        
    // let bodyHeight = Number(document.querySelector("body").offsetHeight);
    // let sectionHeight = bodyHeight / 7;
    // gsap.fromTo("section .reveal-type", { y: 0, opacity: 1 }, {
    //     opacity: 0, y: -window.innerHeight, duration: 5,
    //     scrollTrigger: {
    //         trigger: 'body',
    //         start: sectionHeight * 3,
    //         end: sectionHeight * 4,
    //         scrub: true,
    //     }
    // })
})


const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)