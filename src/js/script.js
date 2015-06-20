(function(){
  console.log("let`s work hard!");

  // toggle tooltip
  $(".js-tooltip-toggle").on("click", function(event){
    event.preventDefault();
    $(this).parents(".tooltip-container").toggleClass("tooltip-container--active");
  })
})
