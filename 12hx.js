// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


// function bbb(){
//     const scroll = new LocomotiveScroll({
//             el: document.querySelector('#main '),
//             smooth: true
//         });
        
// }
// bbb();
var videocon = document.querySelector('#video-container');
var playBtn = document.querySelector('#play');

videocon.addEventListener("mouseenter",function(){
    gsap.to(playBtn,{
        scale:1,
        opacity:1
    })
})


videocon.addEventListener("mouseleave",function(){
    gsap.to(playBtn,{
        scale:0,
        opacity:0
    })
})

videocon.addEventListener("mousemove",function(dets){
    gsap.to(playBtn,{
        left:dets.x,
        top:dets.y
        
        
    })
})









document.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        left:dets.x,
        top:dets.y
    })

})



function sap(){
document.querySelector("#child1").addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
        
        transform:'translate(-50%,-50%) scale(1)'
    })
})

document.querySelector("#child1").addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
        
        transform:'translate(-50%,-50%) scale(0)'
    })
})

}
sap();
function sap1(){
    document.querySelector("#child2").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            
            transform:'translate(-50%,-50%) scale(1)'
        })
    })

    document.querySelector("#child2").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            
            transform:'translate(-50%,-50%) scale(0)'
        })
    })

}
sap1();


function sap2(){
    document.querySelector("#child3").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            
            transform:'translate(-50%,-50%) scale(1)'
        })
    })

    document.querySelector("#child3").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            
            transform:'translate(-50%,-50%) scale(0)'
        })
    })

}
sap2();



function sap3(){
    document.querySelector("#child4").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            
            transform:'translate(-50%,-50%) scale(1)'
        })
    })

    document.querySelector("#child4").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            
            transform:'translate(-50%,-50%) scale(0)'
        })
    })

}
sap3();
// function starting_animation(){


// gsap.from("#page-1",{
//     y:100,
//     opacity:0,
//     delay:0.2,
//     duration:0.5

// })
// }
// starting_animation();