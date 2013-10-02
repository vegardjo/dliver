(function ($, Drupal, window, document, undefined) {

  Drupal.behaviors.accordion = {
    attach: function (context, settings) {
      // hide all togglelist by default
      $('.field-name-body h4').each(function () {
        $(this).addClass('toggle-headline');
        $(this).addClass('toggle-headline-closed');
        $(this).nextUntil('h4').hide().last().addClass('toggle-content');
      });

      // togglelist event
      $('.field-name-body h4').toggle(function () {
        $(this).removeClass('toggle-headline-closed');
        $(this).addClass('toggle-headline-open');
        $(this).nextUntil('h4').show('slideDown');
      }, function () {
        $(this).removeClass('toggle-headline-open');
        $(this).addClass('toggle-headline-closed');
        $(this).nextUntil('h4').hide('slideUp');
      });
    }
  };

})(jQuery, Drupal, this, this.document);
