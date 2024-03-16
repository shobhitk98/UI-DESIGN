const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function loadinganimation() {
    gsap.from(".sidebar ul", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from(".content .btn1", {
        x: 100,
        opacity: 0,
        delay: 0.4,
        duration: 0.9,
        stagger: 0.3,
      });
      gsap.from(".container", {
        y: 100,
        opacity: 0,
        delay: 0.4,
        duration: 0.9,
        stagger: 0.3,
      });
     
}
loadinganimation();