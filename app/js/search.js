/*global jQuery */
jQuery(document).ready(function() {
  jQuery('.search-field').simpleJekyllSearch({
    jsonFile : '/search.json',
    searchResults : '.search-results',
    template : '<li><article><a href="{url}">{title} <span class="entry-date"><time datetime="{date}">{shortdate}</time></span></a></article></li>',
    noResults: '<p>Nothing found.</p>'
  });
});

(function( $, window, undefined ) {
  
  var bs = {
    close: $('.icon-remove-sign'),
    searchform: $('.search-form'),
    canvas: $('body'),
    dothis: $('.dosearch')
  };
  
  bs.dothis.on('click', function() {
    $('.search-wrapper').css({ display: 'block' });
    bs.searchform.toggleClass('hidden');
    bs.searchform.toggleClass('active');
    bs.searchform.find('input').focus();
    bs.canvas.toggleClass('search-overlay');
  });
  
  // bs.close.on('click', function() {
  //   $('.search-wrapper').removeAttr( 'style' );
  //   bs.searchform.toggleClass('active');
  //   bs.canvas.removeClass('search-overlay');
  // });

  bs.searchform.find('input').focusout(function () {
    $('.search-wrapper').removeAttr( 'style' );
    bs.searchform.toggleClass('hidden');
    bs.searchform.toggleClass('active');
    bs.canvas.removeClass('search-overlay');
  });
})( jQuery, window );
