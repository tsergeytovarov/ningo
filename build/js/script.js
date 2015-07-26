$(function(){
  console.log("let`s work hard!");

  // toggle tooltip
  $(".js-tooltip-toggle").on("click", function(event){
    event.preventDefault();
    $(this).parents(".tooltip-container").toggleClass("tooltip-container--active");
  })

  $(document).click(function(event) {
    if ($(event.target).closest(".js-tooltip-toggle").length) return;
    $(".tooltip-container").removeClass("tooltip-container--active");
    event.stopPropagation();
  });

  // js-open-header-find
  $(".js-open-header-find").on("click", function(event){
    event.preventDefault();
    $(".main-header__left--basic").removeClass("main-header__left--open");
    $(".user-options").removeClass("user-options--open");
    $(".main-header__left--find").addClass("main-header__left--open");
  })

  // js-close-header-find
  $(".js-close-header-find").on("click", function(event){
    event.preventDefault();
    $(".main-header__left--basic").addClass("main-header__left--open");
    $(".user-options").addClass("user-options--open");
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

  //
  $(window).on("scroll", function(){
    var col = $(".content-block").length;

    for (var i = 1; i <= col ; i++){
      var target = $(".js-for-link-"+i).offset().top;
      var area = $(window).scrollTop();
      if ( target > area ){
        $(".info-navigation__link").removeClass("info-navigation__link--current");
        $(".link-" + i).addClass("info-navigation__link--current");
        break;
      }
    }
  })

  //

  $(".faq__toggle").on("click", function(){
    var father = $(this).parents(".faq");
    if( !father.hasClass("faq--active") ){
      console.log("work");
    }
  })

})
