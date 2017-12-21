$(() => {
  let $slider = $('#slider'),
      $sliderRed = $('#slider-red');

  $slider.find('.slider-collapse').on('click', (e) => {
    e.preventDefault();
    if ($sliderRed.hasClass('slider-expanded')) {
      console.log('a');
      $sliderRed.removeClass('slider-expanded');
      $slider.find('.show-expanded').hide();
      $slider.find('.hide-after-expanded').show();
      $sliderRed.on('transitionend', () => {
        $slider.find('.show-collapsed').show();
        $sliderRed.off('transitionend');
      });
    }
  });

  $slider.find('.slider-expand').on('click', (e) => {
    e.preventDefault();
    if (!$sliderRed.hasClass('slider-expanded')) {
      console.log('b');
      $sliderRed.addClass('slider-expanded');
      $slider.find('.show-collapsed').hide();
      $sliderRed.on('transitionend', () => {
        $slider.find('.hide-after-expanded').hide();
        $slider.find('.show-expanded').show();
        $sliderRed.off('transitionend');
      });
    }
  });
});