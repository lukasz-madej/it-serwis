$(() => {
  let $slider = $('#slider'),
      $sliderBlue = $('#slider-blue'),
      $sliderRed = $('#slider-red');

  $slider.find('.slider-collapse').on('click', () => {
    $slider.find('.show-expanded').hide();
    $slider.find('.show-collapsed').show();
    $sliderBlue.css('width', '85%');
    $sliderRed.css('width', '15%');
  });

  $slider.find('.slider-expand').on('click', () => {
    $slider.find('.show-collapsed').hide();
    $slider.find('.show-expanded').show();
    $sliderBlue.css('width', '50%');
    $sliderRed.css('width', '50%');
  });
});