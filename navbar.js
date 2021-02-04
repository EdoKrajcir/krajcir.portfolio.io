$(document).ready(function() {

  var toggleAffix = function(affixElement, scrollElement, wrapper) {
  
    var height = affixElement.outerHeight();

    if (scrollElement.scrollTop() > 50){
        affixElement.addClass("nav-shrinked");
        wrapper.height(58);
    }
    else {
        affixElement.removeClass("nav-shrinked");
        wrapper.height(90);
    }
      
  };
  

  $('[data-toggle="nav-shrinkable"]').each(function() {
    var ele = $(this),
      wrapper = $('<div id="wrapper"></div>');
        
    ele.before(wrapper);
    $(window).on('scroll resize', function() {
        toggleAffix(ele, $(this), wrapper);
    });
    
    // init
    toggleAffix(ele, $(window),wrapper);
  });
  
});