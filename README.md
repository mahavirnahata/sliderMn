sliderMn
========

jQuery Slider Plugin : By Mahavir Nahata

<h2>Instructions</h2>

<ol>
<li>HTML Instructions :</li>
    <ol>
    <li>Download the source code and read the index.html file, everything is mentioned there in comments.</li>
	</ol>
<li>Plugin js Instructions</li>
	<ol>
    <li>
    You can configure these three things : 
    <ol>
        <li> Slide Duration : Number : Amount of time in milisecond for a slide to move from right to left : Default : 5000</li>
        <li> nextSlideDuration : Number : Amount of time in milisecond after which next slide will start : Default : 3000</li>
        <li> showDescriptionText : Boolean : Control Whether to display Description text or not. : Default : true</li>
    </ol></li>
    <li>
    Put this code in jQuery document.ready function to activate slider : <br><br>
	<strong>$(".slider").sliderMn({slideDuration:5000,nextSlideDuration:1000,showDescriptionText:true});</strong><br><br>
    Change configuration values as per your need
    </li>
    <li>You can change configurable values of slider later as per your need by invoking these functions : 
    	<ol>
        <li>Later You can Change sliderDuration By Calling This Function.<br><strong> $.sliderMn({slideDuration:7000});</strong> </li><br>
        <li>You can also change nextSlideDuration Similarly. <br><strong> $.sliderMn({slideDuration:5000});</strong></li><br>
  		<li>Likewise You can also turn on/off Description text at later time by using below code. <br><strong> $.sliderMn({showDescriptionText:false});</strong></li>
     
   </ol>
    
  </li>
 </ol>
</ol>
