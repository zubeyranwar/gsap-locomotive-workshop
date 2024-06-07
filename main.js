var tl = gsap.timeline();

tl.from(".nav h3", {
  y: -50,
  duration: 0.6,
  delay: 0.4,
  stagger: 0.1,
});

tl.from(".main h1", {
  x: -800,
  duration: 0.8,

  delay: 0.1,
  stagger: 0.2,
});
