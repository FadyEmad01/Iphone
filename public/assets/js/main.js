let x = document.querySelector(".divload");

window.addEventListener('load', function () {

  x.remove();
});



gsap.registerPlugin(MotionPathPlugin, ScrollToPlugin, TextPlugin, ScrollTrigger, Flip);
gsap.registerPlugin(ScrollTrigger);

gsap.to(".Iphone", {
  x: -700,
  // y: -1000,
  scrollTrigger: {
    trigger: ".Iphone",
    start: "top top",
    end: "100% top",
    //   markers: true,
    pin: ".sora",
    scrub: true,
  },
  // x: "-100%",
  // // rotation: -5,
  // y: "200px",

  // left: '50%',
  // duration: 1,
  // bottom: '100%',
  // x: "0",
  // y:"-5%",
  // rotation: -5
});


// section3
// var scrollPosition = window.scrollY;
// var windowHeight = window.innerHeight;

// var totalHeightPx = document.documentElement.scrollHeight - windowHeight;
// var totalHeightVh = (totalHeightPx / windowHeight) * 100;

// var scrollPositionVh = (scrollPosition / totalHeightVh);

// var minVh = 25; // Example minimum vh value
// var maxVh = 50; // Example maximum vh value

// scrollPositionVh > minVh && scrollPositionVh < maxVh
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
let body = document.getElementsByClassName("body");
let fh1 = document.getElementsByClassName("fh1");
let fp2 = document.getElementsByClassName("fp2");
let nav = document.getElementsByClassName("navbar");
let logo = document.getElementsByClassName("logo");
let li = document.getElementsByClassName("nav-linkli");
let i = document.getElementsByClassName("btn2");
let Iphone = document.getElementsByClassName("Iphone");
if (window.innerWidth <= 1500) {
  window.onscroll = function () {
    myFunction()
  };

  function myFunction() {
    if ((window.scrollY > 594 && window.scrollY < 942)) {
      body[0].classList.replace("body-dark", "body-light");
      fh1[0].classList.replace("fh1-drak", "fh1-light");
      fp2[0].classList.replace("fp2-dark", "fp2-light");
      nav[0].classList.replace("navbar-drak", "navbar-light");
      logo[0].classList.replace("logo-dark", "logo-light");
      i[0].classList.replace("btn2-dark", "btn2-light");
      li[0].classList.replace("nav-linkli-dark", "nav-linkli-light");
      li[1].classList.replace("nav-linkli-dark", "nav-linkli-light");
      li[2].classList.replace("nav-linkli-dark", "nav-linkli-light");
      li[3].classList.replace("nav-linkli-dark", "nav-linkli-light");
      Iphone[0].classList.replace("iPhonenone", "iPhoneNotnone");
    } else if ((window.scrollY > 942)) {
      body[0].classList.replace("body-light", "body-dark");
      fh1[0].classList.replace("fh1-light", "fh1-drak");
      fp2[0].classList.replace("fp2-light", "fp2-dark");
      nav[0].classList.replace("navbar-light", "navbar-drak");
      logo[0].classList.replace("logo-light", "logo-dark");
      i[0].classList.replace("btn2-light", "btn2-dark");
      li[0].classList.replace("nav-linkli-light", "nav-linkli-dark");
      li[1].classList.replace("nav-linkli-light", "nav-linkli-dark");
      li[2].classList.replace("nav-linkli-light", "nav-linkli-dark");
      li[3].classList.replace("nav-linkli-light", "nav-linkli-dark");
      Iphone[0].classList.replace("iPhoneNotnone", "iPhonenone");
    }

  }
} else {
  window.onscroll = function () {
    myFunction()
  };

  function myFunction() {
    if ((window.scrollY > 594 && window.scrollY < 1200)) {
      body[0].classList.replace("body-dark", "body-light");
      fh1[0].classList.replace("fh1-drak", "fh1-light");
      fp2[0].classList.replace("fp2-dark", "fp2-light");
      nav[0].classList.replace("navbar-drak", "navbar-light");
      logo[0].classList.replace("logo-dark", "logo-light");
      i[0].classList.replace("btn2-dark", "btn2-light");
      li[0].classList.replace("nav-linkli-dark", "nav-linkli-light");
      li[1].classList.replace("nav-linkli-dark", "nav-linkli-light");
      li[2].classList.replace("nav-linkli-dark", "nav-linkli-light");
      li[3].classList.replace("nav-linkli-dark", "nav-linkli-light");
      Iphone[0].classList.replace("iPhonenone", "iPhoneNotnone");
    } else if ((window.scrollY > 1200)) {
      body[0].classList.replace("body-light", "body-dark");
      fh1[0].classList.replace("fh1-light", "fh1-drak");
      fp2[0].classList.replace("fp2-light", "fp2-dark");
      nav[0].classList.replace("navbar-light", "navbar-drak");
      logo[0].classList.replace("logo-light", "logo-dark");
      i[0].classList.replace("btn2-light", "btn2-dark");
      li[0].classList.replace("nav-linkli-light", "nav-linkli-dark");
      li[1].classList.replace("nav-linkli-light", "nav-linkli-dark");
      li[2].classList.replace("nav-linkli-light", "nav-linkli-dark");
      li[3].classList.replace("nav-linkli-light", "nav-linkli-dark");
      Iphone[0].classList.replace("iPhoneNotnone", "iPhonenone");
    }

  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if ((window.scrollY > 594 && window.scrollY < 942 ) ) {
//     body[0].classList.replace("body-dark", "body-light");
//     fh1[0].classList.replace("fh1-drak", "fh1-light");
//     fp2[0].classList.replace("fp2-dark", "fp2-light");
//     nav[0].classList.replace("navbar-drak", "navbar-light");
//     logo[0].classList.replace("logo-dark", "logo-light");
//     i[0].classList.replace("btn2-dark", "btn2-light");
//     li[0].classList.replace("nav-linkli-dark", "nav-linkli-light");
//     li[1].classList.replace("nav-linkli-dark", "nav-linkli-light");
//     li[2].classList.replace("nav-linkli-dark", "nav-linkli-light");
//     li[3].classList.replace("nav-linkli-dark", "nav-linkli-light");
//     Iphone[0].classList.replace("iPhonenone", "iPhoneNotnone");
//   } else if ((window.scrollY > 942  )) {
//     body[0].classList.replace("body-light", "body-dark");
//     fh1[0].classList.replace("fh1-light", "fh1-drak");
//     fp2[0].classList.replace("fp2-light", "fp2-dark");
//     nav[0].classList.replace("navbar-light", "navbar-drak");
//     logo[0].classList.replace("logo-light", "logo-dark");
//     i[0].classList.replace("btn2-light","btn2-dark");
//     li[0].classList.replace("nav-linkli-light", "nav-linkli-dark");
//     li[1].classList.replace("nav-linkli-light", "nav-linkli-dark");
//     li[2].classList.replace("nav-linkli-light", "nav-linkli-dark");
//     li[3].classList.replace("nav-linkli-light", "nav-linkli-dark");
//     Iphone[0].classList.replace( "iPhoneNotnone","iPhonenone");
//   }

// }




// window.onscroll = function() {myIponeFunction()};

// function myIponeFunction() {
//   if ((window.scrollY > 594 && window.scrollY < 1000 )) {
//   Iphone[0].classList.replace("iPhonenone", "iPhoneNotnone");

// } else if((window.scrollY > 1000  )) {
//   Iphone[0].classList.replace( "iPhoneNotnone","iPhonenone");
// }
// }




//   gsap.registerPlugin(ScrollTrigger);

// gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

// var images = gsap.utils.toArray('.panel:not(.purple)');

// images.forEach((image, i) => {

//   var tl = gsap.timeline({

//     scrollTrigger: {
//       trigger: "section.black",
//       start: () => "top -" + (window.innerHeight*(i+0.5)),
//       end: () => "+=" + window.innerHeight,
//       scrub: true,
//       toggleActions: "play none reverse none",
//       // invalidateOnRefresh: true,     
//     }

//   })

//   tl
//   .to(image, { height: 0 })
//   ;

// });







// gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

// var texts = gsap.utils.toArray('.panel-text');

// texts.forEach((text, i) => {

//   var tl = gsap.timeline({

//     scrollTrigger: {
//       trigger: "section.black",
//       start: () => "top -" + (window.innerHeight*i),
//       end: () => "+=" + window.innerHeight,
//       scrub: true,
//       toggleActions: "play none reverse none",
//       // invalidateOnRefresh: true,     
//     }

//   })

//   tl
//   .to(text, { duration: 0.33, opacity: 1, y:"50%" })
//   .to(text, { duration: 0.33, opacity: 1, y:"20%" })  
//   .to(text, { duration: 0.33, opacity: 0, y:"0%" }, 0.66)

//   ;


// });





// ScrollTrigger.create({

//     trigger: "section.black",
//     scrub: true,

//     pin: true,
//     start: () => "tpp top",
//     // end: () => "0% 0%" ,
//     end: () => "+=" + ((images.length + 1) * window.innerHeight),
//     // invalidateOnRefresh: true,

// });

gsap.registerPlugin(ScrollTrigger);

gsap.set(".panel", {
  zIndex: (i, target, targets) => targets.length - i
});

const images = gsap.utils.toArray('.panel:not(.purple)');
images.forEach((image, i) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "section.black",
      start: `top -${window.innerHeight * (i + 0.5)}`,
      end: `+=${window.innerHeight}`,
      scrub: true,
      toggleActions: "play none reverse none",
    }
  });

  tl.to(image, {
    height: 0
  });
});

gsap.set(".panel-text", {
  zIndex: (i, target, targets) => targets.length - i
});

const texts = gsap.utils.toArray('.panel-text');
texts.forEach((text, i) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "section.black",
      start: `top -${window.innerHeight * i}`,
      end: `+=${window.innerHeight}`,
      scrub: true,
      toggleActions: "play none reverse none",
    }
  });

  tl.to(text, {
      duration: 0.33,
      opacity: 1,
      y: "50%"
    })
    .to(text, {
      duration: 0.33,
      opacity: 1,
      y: "20%"
    })
    .to(text, {
      duration: 0.33,
      opacity: 0,
      y: "0%"
    }, 0.66);
});

ScrollTrigger.create({
  trigger: "section.black",
  scrub: true,
  pin: true,
  start: "top top",
  end: `+=${(images.length + 1) * window.innerHeight}`
});
// end section3