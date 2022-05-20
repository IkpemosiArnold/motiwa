gsap.registerPlugin(ScrollTrigger);

// overlay-animations
gsap.to(".overlay h1", 3, {
  delay: 0.4,
  opacity: 0,
  y: -60,
  ease: "expo.out",
});

gsap.to(".overlay span", 3, {
  opacity: 0,
  delay: 1,
  y: -60,
  ease: "expo.out",
});

gsap.to(".overlay", 3, {
  delay: 1.3,
  top: "-100%",
  y: -60,
  ease: "expo.out",
});

// header-animatons
gsap.to(".links ul li", {
  delay: 2.1,
  x: -40,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".mot-text", 2, {
  delay: 2.5,
  y: -40,
  ease: "bounce.out",
});

gsap.from(".mot-mini", 2, {
  delay: 2.5,
  x: 15,
});

gsap.from(".sub-text", 2, {
  delay: 3.2,
  opacity: 0,
});

// service-animations
gsap.from(".service-section", {
  duration: 3,
  scrollTrigger: {
    trigger: ".service-section",
    start: "top 50%",
    toggleClass: "white",
  },
});

gsap.to(".service-back", {
  duration: 3,
  scrollTrigger: {
    trigger: ".service-back",
    start: "top 30%",
    end: "+=169%",
    pin: true,
  },
});

gsap.from(".service-space", {
  delay: 3.5,
  opacity: 0,
  ease: "expo.out",
  stagger: 1,
  scrollTrigger: {
    trigger: ".service-text",
    start: "top 40%",
    scrub: 2,
  },
});

gsap.to(".email-header", {
  delay: 2,
  opacity: 0.2,
  scrollTrigger: {
    trigger: ".email-header",
    start: "top 55%",
    scrub: 1,
  },
});
