// var progressBar=document.querySelectorAll(".skill-progress > div");
// var skillsContainer=document.getElementById('skills-container');
// window.addEventListener('scroll',checkScroll);
// var animationdone=false;

// function initializebars(){
//     for(var bar of progressBar){
//         bar.style.width=0+'%';
//     }
// }

// initializebars();

// function fillbars(){
//     for(let bar of progressBar){
//         let targetwidth=bar.getAttribute('data-bar-width');
//         let currentwidth=0;
//         let interval=setInterval(function(){
//             if(currentwidth >=targetwidth)
//             {
//                 clearInterval(interval);
//                 return;
//             }
//             currentwidth++;
//             bar.style.width=currentwidth+'%';
//         },5);
//     }

// }

// function checkScroll(){
//     var coordinates=skillsContainer.getBoundingClientRect();
//     if(!animationdone && coordinates.top <= window.innerHeight){
//         animationdone=true;
//         console.log('Skill Section visible');
        
//         fillbars();

//     }else if(coordinates.top >window.innerHeight){
//         animationdone=false;
//         initializebars();

//     }

// } 
// for part 2 aanimation
var progressBars = document.querySelectorAll(".skill-progress > div");

function initialiseBars(bar) {
   bar.setAttribute("data-visited",false);
        bar.style.width = 0 + '%';
    }

for(var bar of progressBars){
    initialiseBars(bar);
}


function fillBars(bar) {

        var currentWidth = 0;
        var targetWidth=bar.getAttribute("data-bar-width");
        var interval = setInterval(function () {
            
            if (currentWidth >= targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 5);
    }



function checkScroll() {


for(let bar of progressBars ){
    var coordinates = bar.getBoundingClientRect();
    if ((bar.getAttribute("data-visited")=="false") && (coordinates.top <= (window.innerHeight-coordinates.height))) {
        bar.setAttribute("data-visited",true);
        fillBars(bar);
    } else if (coordinates.top > window.innerHeight) {
      bar.setAttribute("data-visited",false);
        initialiseBars(bar);
    }
}

}

window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);