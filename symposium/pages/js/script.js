const text = new SplitType("#text")
const logo = new SplitType("#text1")
const text2 = new SplitType("#text2")
const text3 = new SplitType("#text3")
const text4 = new SplitType("#text4")
const text5 = new SplitType("#text5")
gsap.from(".char", {
  y: 105,
//   stagger: .05,
  duration: 3,
//   rotate: 25,
//   ease: "back.out(1.7)"
})

var preloader = document.getElementById("loading")
function myfunction(){
    preloader.style.display = 'none';
}
