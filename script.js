var bar = document.querySelector("#bars");
var part2 = document.querySelector(".part2");
var part3 = document.querySelector(".part3");
var overlay = document.querySelector(".overlay");
bar.addEventListener(
    "click",
    function()
    {
//  this.classList.toggle("fa-bars");
 this.classList.toggle("fa-times");
 part2.classList.toggle("left-right");
 part3.classList.toggle("left-right");
document.body.classList.toggle("overflow-y");
overlay.classList.toggle("overlay-overright");
    }
)