console.log("Connected successfully!");
let myRate = document.querySelectorAll(".rate");
let rateBox = document.querySelector("#rating");


$("#submit").click(function(e){
    e.preventDefault();
    $("#thanks").removeClass('hide');
    $(".container").addClass('hide');

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