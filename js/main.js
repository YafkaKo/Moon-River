
$(document).ready(function () {
  function checkLng() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    console.log(hash)
    if (hash == "ru") {
      $(".main__bottom-link-ru").addClass("active");
    }
    if (hash === "en") {
      $(".main__bottom-link-en").addClass("active");
      $(".footer__input, .location__input").attr("placeholder", "Enter E-mail");
      $(".info__input").attr("placeholder", "Enter the address")
    }
    else {
      location.href = window.location.pathname + '#ru';
      $(".main__bottom-link-ru").addClass("active");
    }

    for (let key in translate) {
      document.querySelector(".lng-" + key).innerHTML = translate[key][hash];
    }
  }

  // checkLng();
  if (window.screen.width <= 600) {
    console.log("JHFISDJFOIJEIOJFSEJFd")
    $(".header__logo-img").attr("src", "img/burger/logo.svg")
  }


  $(".social__slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: "20px",
  });

  $(".main__bottom-link").click(function () {
    $(this).addClass("active");
    let lang = $(this).attr("value");
    location.href = window.location.pathname + '#' + lang;
    location.reload();
    if ($(this).hasClass("main__bottom-link-en")) {
      $(".main__bottom-link-ru").removeClass("active")
    }
    else {
      $(".main__bottom-link-en").removeClass("active")
    }
  })

  $(".header__burger").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".header__logo-img").attr("src", "img/burger/logo.svg");
      $(".header__burger-img").attr("src", "img/burger/close.svg");
      $(".burger").fadeIn();
    }
    else {
      $(this).addClass("active");
      $(".header__logo-img").attr("src", "img/header/logo.svg");
      $(".header__burger-img").attr("src", "img/header/burger.svg");
      $(".burger").fadeOut();

    }
  });
  $(".burger__nav-item").click(function () {
    $(".burger__nav>.burger__nav-item").removeClass("active");
    $(this).addClass("active");
  });


});




