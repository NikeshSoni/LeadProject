
var work = gsap.timeline()

work.from( ".anime-fonts" ,  {
        y:100, opacity:0,
        stagger:.4,
        delay:4,
})
      
work.from(" .animation-wapper .banner-img" , {
    x:100,
    duration:0.4,
    delay:0.1, 
    opacity:0,
    duration:2
})

work.from (".down-arrow " , {
    scale:0,
    opacity:0
})

work.to(".down-arrow" , {
    y:10,
    repeat:-1,
    duration:1,
    yoyo:true
})

work.from( ".convert-fonts , .info-cards " , {
    x:-100,
    stagger:0.5,
    opacity:0,
    delay:.3,
   
    scrollTrigger:{
        trigger:".convert-fonts , .info-cards",
        scroller:"body",
        start:"top 54%",
        end:"top 30%,",
    }
})

work.from( ".main-img " , {
    x:-100,
    opacity:0,
    rotate:360,
    duration:.5,
    scrollTrigger:{
        trigger:".main-img",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
        scrub:3,
    }
})


