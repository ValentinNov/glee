$(function () {
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });



  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $(".star-filter").rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "5px",
    readOnly: true
  });
  $(".star").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "10px",
    readOnly: true
  })

  $('.btn-list').on('click', function () {
    $('.categories__item').addClass('categories__item--list');
  });

  $('.btn-grid').on('click', function () {
    $('.categories__item').removeClass('categories__item--list');
  });
  

  $('.pagination__link').on('click', function () {
    $('.pagination__link').removeClass('pagination__link--active');
    $(this).addClass('pagination__link--active');
  });

  $('.select-style').styler();

  var mixer = mixitup('.categories__content');
  var mixer = mixitup('.now-design__content');
});