sliderMn
========

jQuery Slider Plugin : By Mahavir Nahata

Instructions :

HTML Instructions :
Download the source code and read the index.html file, everything is mentioned there in comments.


Plugin js Instructions

You can configure these three things :
  Slide Duration : Number : Amount of time in milisecond for a slide to move from right to left : Default : 5000
  nextSlideDuration : Number : Amount of time in milisecond after which next slide will start : Default : 3000
  showDescriptionText : Boolean : Control Whether to display Description text or not. : Default : true

Put this code in jQuery document.ready function to activate slider : 

$(".slider").sliderMn({slideDuration:5000,nextSlideDuration:1000,showDescriptionText:true});

Change configuration values as per your need
 You can change configurable values of slider later as per your need by invoking these functions :
  Later You can Change sliderDuration By Calling This Function.
  $.sliderMn({slideDuration:7000});

 You can also change nextSlideDuration Similarly. 
  $.sliderMn({slideDuration:5000});

 Likewise You can also turn on/off Description text at later time by using below code. 
  $.sliderMn({showDescriptionText:false});
