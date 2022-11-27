// animation for i'm loki hover effect
let intro = document.querySelector('.intro-container')
intro.addEventListener("mouseover",(event)=>{
    let target = event.target
    // console.log(event);

    // console.log(target.tagName);
    if(target.className != "intro-container" ){
        target.classList.add('rubberBand');
        target.classList.add('animated');
    
        setTimeout(()=>{
            target.classList.remove('rubberBand');
            target.classList.remove('animated');
        },700)      
    }
})

let bc = document.querySelector('.bc')
bc.addEventListener('mousemove', function(e){e.stopImmediatePropagation();})




