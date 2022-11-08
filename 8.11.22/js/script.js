$(function(){
    $("#one_one").hide();
    $("#one_two").hide();
    $("#one_three").hide();
    $(".one").click(function(){
        $("#one_one").slideToggle(500);
    });
    $(".two").click(function(){
        $("#one_two").slideToggle(500);
    });
    $(".three").click(function(){
        $("#one_three").slideToggle(500);
    });
    
})