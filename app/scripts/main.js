let doScrollDown = (destinationEl, scrollingEl = '#js-doc-body') => {
  const scrollDestination = document.querySelector(destinationEl).scrollHeight;

  $(scrollingEl).animate({scrollTop: scrollDestination}, '500', 'swing');
}

document.querySelector('#js-btn-scroll-down').addEventListener('click', function() {
  doScrollDown('#app-page');
});
