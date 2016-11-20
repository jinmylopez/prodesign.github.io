(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();
    $('.carousel').carousel();

    //$('h2').append('<a href="#top" class="gototop">Subir</a>');
    linkInterno = $('.navbar a[href^="#"]');
    linkInterno.on('click',function(e) {
      e.preventDefault();
      var href = $(this).attr('href');
      $('html, body').animate({ scrollTop : $( href ).offset().top +=-70}, 'slow', 'easeInOutExpo');

    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

jQuery(document).ready(function ($) {

      var jssor_1_SlideoTransitions = [
      [{b:-1,d:1,o:-1},{b:0,d:1000,o:1}],
      [{b:1900,d:2000,x:-379,e:{x:7}}],
      [{b:1900,d:2000,x:-379,e:{x:7}}],
      [{b:-1,d:1,o:-1,r:288,sX:9,sY:9},{b:1000,d:900,x:-1400,y:-660,o:1,r:-288,sX:-9,sY:-9,e:{r:6}},{b:1900,d:1600,x:-200,o:-1,e:{x:16}}]
      ];

      var jssor_1_options = {
        $AutoPlay: true,
        $SlideDuration: 800,
        $SlideEasing: $Jease$.$OutQuint,
        $CaptionSliderOptions: {
          $Class: $JssorCaptionSlideo$,
          $Transitions: jssor_1_SlideoTransitions
        },
        $ArrowNavigatorOptions: {
          $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
          $Class: $JssorBulletNavigator$
        }
      };

      var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

      /*responsive code begin*/
      /*you can remove responsive code if you don't want the slider scales while window resizing*/
      function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
          refSize = Math.min(refSize, 1920);
          jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
          window.setTimeout(ScaleSlider, 30);
        }
      }
      ScaleSlider();
      $(window).bind("load", ScaleSlider);
      $(window).bind("resize", ScaleSlider);
      $(window).bind("orientationchange", ScaleSlider);
      /*responsive code end*/
    });
jQuery(document).ready(function ($) {

      var jssor_2_SlideoTransitions = [
      [{b:-1,d:1,o:-1},{b:0,d:1000,o:1}],
      [{b:1900,d:2000,x:-379,e:{x:7}}],
      [{b:1900,d:2000,x:-379,e:{x:7}}],
      [{b:-1,d:1,o:-1,r:288,sX:9,sY:9},{b:1000,d:900,x:-1400,y:-660,o:1,r:-288,sX:-9,sY:-9,e:{r:6}},{b:1900,d:1600,x:-200,o:-1,e:{x:16}}]
      ];

      var jssor_2_options = {
        $AutoPlay: true,
        $SlideDuration: 800,
        $SlideEasing: $Jease$.$OutQuint,
        $CaptionSliderOptions: {
          $Class: $JssorCaptionSlideo$,
          $Transitions: jssor_2_SlideoTransitions
        },
        $ArrowNavigatorOptions: {
          $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
          $Class: $JssorBulletNavigator$
        }
      };

      var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);

      /*responsive code begin*/
      /*you can remove responsive code if you don't want the slider scales while window resizing*/
      function ScaleSlider() {
        var refSize = jssor_2_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
          refSize = Math.min(refSize, 1920);
          jssor_2_slider.$ScaleWidth(refSize);
        }
        else {
          window.setTimeout(ScaleSlider, 30);
        }
      }
      ScaleSlider();
      $(window).bind("load", ScaleSlider);
      $(window).bind("resize", ScaleSlider);
      $(window).bind("orientationchange", ScaleSlider);
      /*responsive code end*/
    });

