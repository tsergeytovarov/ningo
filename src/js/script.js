$(function(){
  console.log("let`s work hard!");

  // toggle tooltip
  $(".js-tooltip-toggle").on("click", function(event){
    event.preventDefault();
    $(this).parents(".tooltip-container").toggleClass("tooltip-container--active");
  })

  // js-open-header-find
  $(".js-open-header-find").on("click", function(event){
    event.preventDefault();
    $(".main-header__left--basic").removeClass("main-header__left--open");
    $(".main-header__left--find").addClass("main-header__left--open");
  })

  // js-close-header-find
  $(".js-close-header-find").on("click", function(event){
    event.preventDefault();
    $(".main-header__left--basic").addClass("main-header__left--open");
    $(".main-header__left--find").removeClass("main-header__left--open");
  })

  //
  $(".navigation-toggle").on("click", function(){
    $('.info-navigation__list').toggleClass("info-navigation__list--active");
  })

  //
  $(".mobile-menu-toggle").on("click", function(){
    $(".mobile-menu--unlogged").toggleClass("mobile-menu--active")
  })

})
