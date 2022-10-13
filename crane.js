const crane = document.querySelector('#rust')
const up = document.querySelector('#up')
const down = document.querySelector('#down')
const left = document.querySelector('#left')
const right = document.querySelector('#right')

down.addEventListener('click', function(){
    style = window.getComputedStyle(crane, null).getPropertyValue('margin-top');
    currentSize = parseFloat(style);
    crane.style.marginTop = (currentSize + 25)+"px"  
 })

 up.addEventListener('click', function(){
    style = window.getComputedStyle(crane, null).getPropertyValue('margin-bottom');
    currentSize = parseFloat(style);
    crane.style.marginBop = (currentSize + 25)+"px"  
 })

 left.addEventListener('click', function(){
    style = window.getComputedStyle(crane, null).getPropertyValue('margin-right');
    currentSize = parseFloat(style);
    crane.style.marginRight = (currentSize + 25)+"px"  
 })

 right.addEventListener('click', function(){
    style = window.getComputedStyle(crane, null).getPropertyValue('margin-left');
    currentSize = parseFloat(style);
    crane.style.marginLeft = (currentSize + 25)+"px"  
 })