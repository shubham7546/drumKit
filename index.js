var i = 0;
var buttontext;
while (i < document.querySelectorAll(".drum").length) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        buttontext = this.innerHTML;
        buttonAnimation(buttontext)
        makeSound(buttontext);
    })

    i++;
}


document.addEventListener("keypress", function (kuchbhi) {
    buttontext = kuchbhi.key;
    buttonAnimation(buttontext);
    makeSound(buttontext);
})



function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            var volumeSlider = document.getElementById("volumeSlider");
            audio.volume = volumeSlider.value;
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            var volumeSlider = document.getElementById("volumeSlider");
            audio.volume = volumeSlider.value;
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            var volumeSlider = document.getElementById("volumeSlider");
            audio.volume = volumeSlider.value;
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            var volumeSlider = document.getElementById("volumeSlider");
            audio.volume = volumeSlider.value;
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            var volumeSlider = document.getElementById("volumeSlider");
            audio.volume = volumeSlider.value;
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            var volumeSlider = document.getElementById("volumeSlider");
            audio.volume = volumeSlider.value;
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            var volumeSlider = document.getElementById("volumeSlider");
            audio.volume = volumeSlider.value;
            audio.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(buttontext) {
    var buttonpressed = document.querySelector("." + buttontext);
    buttonpressed.classList.toggle("pressed");
    setTimeout(function () {
        buttonpressed.classList.toggle("pressed")
    }, 100)

}







