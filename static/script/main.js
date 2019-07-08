$(document).ready(function() {
  
  //rotate
   var $rotateElm = document.getElementById('rotate-box');
   var $rotateObj = new Hammer($rotateElm);
   $jqRotateElm = $($rotateElm);
   $rotateObj.get("rotate").set({ enable: true});
//    $tapObj.get('tap').set({ direction: Hammer.DIRECTION_ALL });
  
   $rotateObj.on('rotate', function() {
	  $('#rotate-box').css('color', 'red');
   });
  
  //pinch
   var $pinchElm = document.getElementById('pinch-box');
   var $pinchObj = new Hammer($pinchElm);
   $jqPinchElm = $($pinchElm);
   $pinchObj.get("pinch").set({ enable: true});
   $pinchObj.get('pinch').set({ direction: Hammer.DIRECTION_ALL });
   $pinchObj.on('pinch', function() {
	  $('#pinch-box').css('color', 'red');
   });
  
  //press
   var $pressElm = document.getElementById('press-box');
   var $pressObj = new Hammer($pressElm);
//    $jqPinchElm = $($pressElm);
   $pressObj.get("press").set({ enable: true});
   $pressObj.get('press').set({ direction: Hammer.DIRECTION_ALL });
   $pressObj.on('press', function() {
	  $('#press-box').css('color', 'red');
   });
  
  //pan
   var $panElm = document.getElementById('pan-box');
   var $panObj = new Hammer($panElm);
//    $jqPinchElm = $($pressElm);
   $panObj.get("pan").set({ enable: true});
   $panObj.get('pan').set({ direction: Hammer.DIRECTION_ALL });
   $panObj.on('pan', function() {
	  $('#pan-box').css('color', 'red');
   });
  
   //tap
   var $tapElm = document.getElementById('tap-box');
   var $tapObj = new Hammer($tapElm);
   $jqExampleElm = $($tapElm);
  
   $tapObj.on('tap', function() {
	  $('#tap-box').css('color', 'red');
   });
  
   //swipe
   var $swipeElm = document.getElementById('swipe-box');
   var $swipeObj = new Hammer($swipeElm);
//    $jqExampleElm = $($tapElm);
   $swipeObj.get("swipe").set({ enable: true});
   $swipeObj.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
   $swipeObj.on('swipe', function() {
	  $('#swipe-box').css('color', 'red');
   });
  
  
  
});