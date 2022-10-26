// alert("What's Your Name");

// document.querySelector("button").addEventListener("mouseover",getClicked);
// document.querySelector("button").addEventListener("mouseout",getClickedd);
// $0.addEventListener("click",function(){document.querySelector("h1").style.backgroundColor="red";})
// undefined
// $0.addEventListener("click",function(){document.querySelector("h1").style.backgroundColor="none";})
// undefined
// $0.addEventListener("click",function(){document.querySelector("h1").style.backgroundColor="white";})





// targeting mousekey
let i =0;


let btn = document.querySelectorAll("button");
for(i;i<btn.length;i++){

    document.querySelectorAll("button")[i].addEventListener("click",getClicked);
    function getClicked(){


           let getKey = this.textContent;

     mouseKey(getKey);
     buttonAnimation(getKey);


    }
}
// targeting keypress
document.addEventListener("keydown", function(event){
mouseKey(event.key)
buttonAnimation(event.key)
});

function mouseKey(keya){


    switch (keya) {
        case "w":
            let crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "a":
            let kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;
        case "s":
            let snare= new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
       
        default: console.log("You are Typing Wrong Key. Please Make sure first You are Typing right Key");
            break;
       }





}



    function buttonAnimation(animate){

        let getAnimation = document.querySelector("."+animate).classList.add('pressed');
   /*      getAnimation.classList.add("pressed"); */
      setTimeout(function(){
            let getAnimations = document.querySelector("."+animate).classList.remove('pressed');
      },100);
    };
       