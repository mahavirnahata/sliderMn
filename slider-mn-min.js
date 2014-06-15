/*A jQuery Slider Plugin By Mahavir Nahata, Website : http://www.mahavirnahata.com 
The MIT License (MIT)
Copyright (c) 2014 Mahavir Nahata

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:<br /><br />

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.*/
$(function(e){e.fn.sliderMn=function(t){defaults={slideDuration:5e3,nextSlideDuratiion:3e3,showDescriptionText:true};e.sliderMn=function(t){defaults=e.extend(defaults,t)};var n=0;len_child=e(this).children(".slider_wrapper").length;switchSlider=function(){n++;e(that).children(".slider_wrapper").css("z-index","0");n=n%len_child;e(that).children().eq(n).children("span").css("display","none");tmp_pos=n-1<0?len_child-1:n-1;e(that).children().eq(tmp_pos).css({zIndex:"997"});e(that).children().eq(n).css({left:div_width,display:"block",zIndex:"999"});e(that).children().eq(n).animate({left:"0px"},defaults.slideDuration,function(){if(defaults.showDescriptionText)e(that).children().eq(n).children("span").css("display","block");setTimeout(switchSlider,defaults.nextSlideDuratiion)})};e(this).children().css({position:"absolute",top:"0px"});div_width=e(this).css("width");defaults=e.extend(defaults,t);that=e(this);switchSlider()}}(jQuery))
