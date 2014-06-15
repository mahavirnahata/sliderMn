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
$(function($)
{
$.fn.sliderMn=function(param_opt)
{
defaults={slideDuration:5000,nextSlideDuratiion:3000,showDescriptionText:true};
$.sliderMn=function(param_option)
{
defaults=$.extend(defaults,param_option);
}
var cur_pos_slide=0;
len_child=$(this).children(".slider_wrapper").length;
switchSlider=function()
{
cur_pos_slide++;
$(that).children(".slider_wrapper").css('z-index','0');
cur_pos_slide=cur_pos_slide%len_child;
$(that).children().eq(cur_pos_slide).children("span").css("display","none");
tmp_pos=((cur_pos_slide-1)<0)?(len_child-1):(cur_pos_slide-1);
$(that).children().eq(tmp_pos).css({zIndex:'997'});
$(that).children().eq(cur_pos_slide).css({left:div_width,display:'block',zIndex:'999'});
$(that).children().eq(cur_pos_slide).animate({left:'0px'},defaults.slideDuration,function(){
if(defaults.showDescriptionText) $(that).children().eq(cur_pos_slide).children("span").css("display","block");
setTimeout(switchSlider,defaults.nextSlideDuratiion)
});
}
$(this).children().css({position:'absolute',top:'0px'});
div_width=$(this).css("width");
defaults=$.extend(defaults,param_opt);
that=$(this);
switchSlider();
}
}(jQuery));
