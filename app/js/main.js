
$(function () { 
  
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.related-products__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/prev.svg" alt="arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/next.svg" alt="arrow-next"></button>',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    
    
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
  });

  $('.btn-list').on('click', function () {
    $('.categories__item').addClass('categories__item--list');
  });

  $('.product-slide__big').slick({
    draggable: false,
    asNavFor: '.product-slide__thumb',
    dots: false,
    arrows: false,
    fade: true
  });
  $('.product-slide__thumb').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    vertical: true,
    draggable: false,
  });

  $('.btn-grid').on('click', function () {
    $('.categories__item').removeClass('categories__item--list');
  });
  

  $('.pagination__link').on('click', function () {
    $('.pagination__link').removeClass('pagination__link--active');
    $(this).addClass('pagination__link--active');
  });

  $('.select-style, .product-one__item-num').styler();

  var mixer = mixitup('.categories__content, .now-design__content, .product-tabs__content'); 
  
  
    
});


