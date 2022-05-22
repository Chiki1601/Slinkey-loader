let selectAll = (s) =>  document.querySelectorAll(s),
    allBars = Array.from(selectAll('g rect')),
    offset = 0.054

TweenMax.set('svg', {
  visibility: 'visible'
})
let tl = new TimelineMax({repeat: -1});
tl.staggerTo(allBars, 1, {
    rotation: '+=180',
    svgOrigin: '424 300',
    ease: Back.easeInOut.config(0.8)
}, offset)
 .to('g', tl.duration(), {
   x: '-=48',
   ease: Sine.easeInOut
}, 0)
 .staggerTo(allBars.reverse(), 1, {
   rotation: '+=180',
   svgOrigin: '472 300',
   ease: Back.easeInOut.config(0.8)
}, offset)
 .to('g', tl.duration()/2, {
   x: '-=48',
   ease: Sine.easeInOut
}, '-=' + tl.duration()/2)