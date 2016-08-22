define(["jquery"], function($) {
  function change(obj1, obj2) {
    if (obj1.find(obj2).text() == '-') {
      obj1.next().slideUp();
      obj1.find(obj2).text('+');
    } else {
      obj1.next().slideDown();
      obj1.find(obj2).text('-');
    }
  }
  $('.info').on('click', 'h2', function() {
      change($(this), 'span')
  })
   $('.info').on('click', 'h3', function() {
      change($(this), 'span')
  })
})