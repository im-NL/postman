let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.moveleft',
        start: 'top bottom',
        end: 'bottom 30%',
        scrub: true,
    }
})

tl.from('.moveleft', {
    x: 200,

})

tl.to('.moveleft', {
    x: 0
})

let tllast = gsap.timeline({
    scrollTrigger: {
        trigger: '.moveleft0',
        start: 'top bottom',
        end: 'bottom 30%',
        scrub: true,
    }
})

tllast.from('.moveleft0', {
    x: 200,

})

tllast.to('.moveleft0', {
    x: 0
})

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.moveright',
        start: 'top bottom',
        end: 'bottom 30%',
        scrub: true,
        
    }
})

tl2.from('.moveright', {
    x: -200,

})

tl2.to('.moveright', {
    x: 0
})
let tl9 = gsap.timeline({
    scrollTrigger: {
        trigger: '.moveright0',
        start: 'top bottom',
        end: 'bottom 30%',
        scrub: true,
        
    }
})

tl9.from('.moveright0', {
    x: -200,

})

tl9.to('.moveright0', {
    x: 0
})


// move up
gsap.timeline({
    scrollTrigger: {
        trigger: '.moveup',
        start: 'top bottom',
        end: 'bottom 10%',
        scrub: true,
        
    }
}).addLabel('start')
.from('.moveup', {
    y: 200,
}) .addLabel('end')

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.movedown',
        start: 'top bottom',
        end: 'top 10%',
        scrub: true,
        
    }
})

tl4.from('.movedown', {
    y: -300,

})

tl4.to('.movedown', {
    y: 0
})

// rotate left 
gsap.timeline({
    scrollTrigger: {
        trigger: '.loomimg',
        start: 'top bottom',
        end: 'bottom 10%',
        scrub: true,
    }
})
.from('.loomimg', {
    x: 600,
    rotate: 30,
}).to('.loomimg', {
    x:0,
    rotate: 0,
})


// rotate right
gsap.timeline({
    scrollTrigger: {
        trigger: '.rotateright',
        start: 'top bottom',
        end: 'bottom 10%',
        scrub: true,
    }
}).from('.rotateright', {
    x: -600,
    rotate: -30,
}).to('.rotateright', {
    x:0,
    rotate: 0,
})

// scale up
let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: '.scaleup',
        start: 'top center',
        end: '100% top',
        scrub: true,
        
}})

tl7.from('.scaleup', {
    y: -700,
    scale: 0.2,
})


gsap.timeline({
    scrollTrigger: {
        trigger: '#loom',
        start: 'top bottom',
        end: 'bottom 10%',
        scrub: true,
        
    }
}).addLabel('start')
.from('#loom', {
    y: 200,
}) .addLabel('end')


gsap.timeline({
    scrollTrigger: {
        trigger: '#imusicimg',
        start: 'top bottom',
        end: 'bottom 10%',
        scrub: true,
    }
}).from('#imusicimg', {
    x: -600,
    rotate: -30,
}).to('#imusicimg', {
    x:0,
    rotate: 0,
})


gsap.timeline({
    scrollTrigger: {
        trigger: '#technisimg',
        start: 'top bottom',
        end: 'bottom 10%',
        scrub: true,
    }
})
.from('#technisimg', {
    x: 600,
    rotate: 30,
}).to('#technisimg', {
    x:0,
    rotate: 0,
})


gsap.timeline({
    scrollTrigger: {
        trigger: '#technis',
        start: 'top bottom',
        end: 'bottom 10%',
        scrub: true,
        
    }
}).addLabel('start')
.from('#technis', {
    y: 200,
}) .addLabel('end')



// dribble animations 

gsap.timeline({
    scrollTrigger: {
        trigger: '#dribright1',
        start: 'top 80%',
        end: 'bottom top',
        scrub: true,
    }
}).to('#dribright1', {
    x: 600,
    y:200,
    rotate: 30,
})

gsap.timeline({
    scrollTrigger: {
        trigger: '#dribright2',
        start: 'top 90%',
        end: 'bottom top',
        scrub: true,
    }
}).to('#dribright2', {
    x: 600,
    rotate: 20,
})

gsap.timeline({
    scrollTrigger: {
        trigger: '#dribright3',
        start: 'top 100%',
        end: 'bottom center',
        scrub: true,
    }
}).to('#dribright3', {
    x: 600,
    rotate: 30,
})


gsap.timeline({
    scrollTrigger: {
        trigger: '#dribleft1',
        start: 'top 80%',
        end: 'bottom top',
        scrub: true,
    }
}).to('#dribleft1', {
    x: -600,
    y:200,
    rotate: -30,
})

gsap.timeline({
    scrollTrigger: {
        trigger: '#dribleft2',
        start: 'top 90%',
        end: 'bottom top',
        scrub: true,
    }
}).to('#dribleft2', {
    x: -600,
    rotate: -20,
})

gsap.timeline({
    scrollTrigger: {
        trigger: '#dribleft3',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
    }
}).to('#dribleft3', {
    x: -600,
    y: -100,
    rotate: -30,
})

gsap.timeline({
    scrollTrigger: {
        trigger: '#dribtext',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
    }
}).from('#dribtext', {
    opacity: 0,
    y:-50,
})

gsap.timeline({
    scrollTrigger: {
        trigger: '.cardleft',
        start: 'top bottom',
        end: 'bottom 10%',
        scrub: true,
        
    }
}).from('.cardleft', {
    x: -600
}).to('.cardleft', {
    x:0
})


gsap.timeline({
    scrollTrigger: {
        trigger: '.cardleft0',
        start: 'top bottom',
        end: 'bottom 10%',
        scrub: true,
        
    }
}).from('.cardleft0', {
    x: -600
}).to('.cardleft0', {
    x:0
})

gsap.timeline({
    scrollTrigger: {
        trigger: '.cardright',
        start: 'top bottom',
        end: 'bottom 10%',
        scrub: true,
        
    }
}).from('.cardright', {
    x: 600
}).to('.cardright', {
    x:0
})


gsap.timeline({
    scrollTrigger: {
        trigger: '.cardright0',
        start: 'top bottom',
        end: 'bottom 10%',
        scrub: true,
        
    }
}).from('.cardright0', {
    x: 600
}).to('.cardright0', {
    x:0
})


var split = new SplitText("#recentworktext", {type: "chars"});

gsap.from(split.chars, {
  duration: 1, 
  y: 100, 
  autoAlpha: 0, 
  stagger: 0.05
});