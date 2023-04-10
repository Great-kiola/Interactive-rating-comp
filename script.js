console.log("Connected successfully!");
let myRate = document.querySelectorAll(".rate");
let rateBox = document.querySelector("#rating");


$("#submit").click(function(e){
    e.preventDefault();
    $("#thanks").removeClass('hide');
    $(".container").addClass('hide');
    $("#my-canvas").removeClass('visible');

})

myRate.forEach((rate) => {
    rate.addEventListener("click", () => {
        rateBox.innerHTML = rate.innerHTML;
    });
})


$("#ChangeMode").click(function(e) {
    e.preventDefault();
    $("#changeColor").toggleClass('mode');

})

$(".fa").click(function(e) {
    e.preventDefault();
    $(".container").removeClass('hide');
    $("#thanks").addClass('hide');
    $("#my-canvas").addClass('visible');
})

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();