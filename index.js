for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var buttonInnerHTML = this.innerHTML;

makesound(buttonInnerHTML);
buttonanimation(buttonInnerHTML);

    });
}
    document.addEventListener("keydown" , function(event){
        makesound(event.key);
        buttonanimation(event.key);
    });

    function makesound(key){
        switch(key){
            case "m":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
            case "a":
            var kickbass = new Audio('soundS/kick-bass.mp3');
            kickbass.play();
            break;
            case "h":
                var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
            case "i":
                var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
            case "n":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
            case "f":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
            case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
            default:
            console.log('innerHTML');
   }
    }

    function buttonanimation(currentkey){
       var activebutton = document.querySelector("."+ currentkey);
       activebutton.classList.add("pressed");
       setTimeout(function(){
        activebutton.classList.remove("pressed");
       },100);

    }











