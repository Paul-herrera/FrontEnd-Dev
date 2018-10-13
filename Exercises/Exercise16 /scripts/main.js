$(document).ready(function(){

// Part 1

$('a[target]').css({
    color: 'blue',
});

$(":text").css({
    backgroundColor: 'pink'
});

$(":checkbox").css({
    backgroundColor: 'yellow'
});

$("[href^='http']").css({
    cursor: 'default'
});

$("[href$='.edu']").css({
    cursor: 'default'
});

$("[href*='mart']").css({
    cursor: 'default'
});

//Part 2

$("#btnShow").click(function(){
    $(".display-basic").show()
});

$("#btnHide").click(function(){
    $(".display-basic").hide()
});

$("#btnToggle").click(function(){
    $(".display-basic").toggle()
});

// Part 4

$("#btnFadeIn").click(function(){
    $(".display-fade").fadeIn('slow')
});

$("#btnFadeOut").click(function(){
    $(".display-fade").fadeOut('fast')
});

$("#btnFadeToggle").click(function(){
    $(".display-fade").fadeToggle()
});

// Part 5

$("#btnSlideDown").click(function(){
    $(".display-slide").slideDown(1000)
});

$("#btnSlideUp").click(function(){
    $(".display-slide").slideUp(500)
});

$("#btnSlideToggle").click(function(){
    $(".display-slide").slideToggle()
});

});