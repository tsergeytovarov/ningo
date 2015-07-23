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

  // появление хедера
  $(window).on("scroll", function(){
    var header = $('.js-main-header').offset().top;
    var input = $(".index-screen__input").offset().top;

    if( header > input){
      $('.js-main-header').removeClass('main-header--hidden');
    } else {
      $('.js-main-header').addClass('main-header--hidden');
    }
  })

  //
  $(".navigation-toggle").on("click", function(){
    $('.info-navigation').toggleClass("active");
  })

})
