$("#about-me-selector").on("click", function(){
    $("#contact-github-div").removeClass("hide");
    $("#contact-github-div").addClass("hide");
    $("#projects-div").removeClass("hide");
    $("#projects-div").addClass("hide");
    $("#about-me-div").removeClass("hide");
    // alert("about");
})

$("#projects-selector").on("click", function(){
    $("#about-me-div").removeClass("hide");
    $("#about-me-div").addClass("hide");
    $("#contact-github-div").removeClass("hide");
    $("#contact-github-div").addClass("hide");
    $("#projects-div").removeClass("hide");
    // alert("projects");
})

$("#contact-github-selector").on("click", function(){
    $("#about-me-div").removeClass("hide");
    $("#about-me-div").addClass("hide");
    $("#projects-div").removeClass("hide");
    $("#projects-div").addClass("hide");
    $("#contact-github-div").removeClass("hide");
    // alert("Github");
})

$("#resume-selector").on("click", function(){
    window.open("assets/pdfs/resume.pdf");
    // alert("Github");
})

$("#streaming-card-image").on("click", function(){
    window.open("https://tuckerv.github.io/soggybottomboys-project1/");
})
$("#weather-card-image").on("click", function(){
    window.open("https://tuckerv.github.io/weather-dashboard/");
})
$("#planner-card-image").on("click", function(){
    window.open("https://tuckerv.github.io/daily-planner/");
})
$("#password-card-image").on("click", function(){
    window.open("https://tuckerv.github.io/Password-Generator/");
})