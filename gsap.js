gsap.registerPlugin(ScrollTrigger);

gsap.from('.blast', {
    duration: 1,
    opacity:0,
    stagger:0.1,
    delay:0.2
})
gsap.from('.intro-text', {
    duration: 1.5,
    opacity:0,
    x:100,
    y:-100,
    stagger:0.1,
    delay:0.5
})
gsap.from('.l-gli', {
    duration: 0.5,
    opacity:0,
    rotationZ:-360,
    // stagger:0.1,
    delay:0.7
})
gsap.from('.dev-til', {
    duration: 0.5,
    opacity:0,
    x:150,
    ease: "elastic.out(1, 0.3)",
    delay:1
})
gsap.from('.contact-but', {
    duration: 0.5,
    opacity:0,
    delay:1.5

})
gsap.from('.blas', {
    duration: 1,
    opacity:0,
    stagger:0.1,
    delay:0.2,
    scrollTrigger:".blas"
})
gsap.from('.about-para', {
    duration: 1,
    opacity:0,
    x:-50,
    stagger:0.1,
    delay:0.2,
    scrollTrigger:".about-para"
})
gsap.from('.box', {
    duration: 1,
    opacity:0,
    x:150,
    stagger:0.1,
    delay:0.2,
    scrollTrigger:".box"

})
