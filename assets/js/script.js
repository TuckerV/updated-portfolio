$(".about-me-selector").on("click", function(){
    $("#contact-github-div").removeClass("hide");
    $("#contact-github-div").addClass("hide");
    $("#projects-div").removeClass("hide");
    $("#projects-div").addClass("hide");
    $("#about-me-div").removeClass("hide");
    // alert("about");
})

$(".projects-selector").on("click", function(){
    $("#about-me-div").removeClass("hide");
    $("#about-me-div").addClass("hide");
    $("#contact-github-div").removeClass("hide");
    $("#contact-github-div").addClass("hide");
    $("#projects-div").removeClass("hide");
    // alert("projects");
})

$(".contact-github-selector").on("click", function(){
    $("#about-me-div").removeClass("hide");
    $("#about-me-div").addClass("hide");
    $("#projects-div").removeClass("hide");
    $("#projects-div").addClass("hide");
    $("#contact-github-div").removeClass("hide");
    // alert("Github");
})

$(".resume-selector").on("click", function(){
    window.open("assets/pdfs/resume.pdf");
    // alert("Github");
})

$(".streaming-card-image").on("click", function(){
    window.open("https://tuckerv.github.io/soggybottomboys-project1/");
})
$(".weather-card-image").on("click", function(){
    window.open("https://tuckerv.github.io/weather-dashboard/");
})
$(".planner-card-image").on("click", function(){
    window.open("https://tuckerv.github.io/daily-planner/");
})
$(".password-card-image").on("click", function(){
    window.open("https://tuckerv.github.io/Password-Generator/");
})
$(".project-2-image").on("click", function(){
    window.open("https://soggybottomleaguemanager.herokuapp.com/");
})
$(".mvc-image").on("click", function(){
    window.open("https://mvc-eat-da-burger.herokuapp.com/");
})

$(window).bind("resize", function () {
    if ($(this).width() < 1000) {
        console.log($(this).width())
        $('#left-col').addClass('hide')
        $('.navbar-row').removeClass('hide')
        $('.project-cards-static').removeClass('hide')
        $('.project-cards-carousel').addClass('hide')
        
    } else {
        $('#left-col').removeClass('hide')
        $('.navbar-row').addClass('hide')
        $('.project-cards-static').addClass('hide')
        $('.project-cards-carousel').removeClass('hide')
    }
}).trigger('resize');

// Navbar Stuff
$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
  });
// End Navbar Stuff