

var imgBox = document.querySelector('.img-box');
var imgWrap = document.querySelector('.img-wrap');
var orginalImg = document.getElementById('orginal-img');
var line = document.getElementById('line');


orginalImg.style.width = imgBox.offsetWidth + 'px';

var leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function(e){
    var boxwidth = (e.pageX - leftSpace) + 'px';
    imgWrap.style.width = boxwidth;
    line.style.left = boxwidth;
}