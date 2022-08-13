var responsiveSlider = function(){
    var slider  =document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList =document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev =document.getElementById("prev");
    var next = document.getElementById("next");

    window.addEventListener('resize' ,function(){
sliderWidth =slider.offsetWidth;
    });

    var prevSlide = function(){
        if(count > 1){
            count = count - 2 ;
            slideList.style.left="-" +count  *  sliderWidth + "px";
            count++;
        }
        else if(count = 1 ){
            count = items -1;
            slideList.style.left="-" +count  *  sliderWidth + "px";
            count++;
        }
    };
    
    var nextSlide = function(){
        if(count < items){
            slideList.style.left="-" +count  *  sliderWidth + "px";
            count++;
        }
        else if(count = items ){
           
            slideList.style.left="0px" ;
            count=1;
        }
    };

    next.addEventListener("click",function(){
        nextSlide();
    });

    prev.addEventListener("click",function(){
       prevSlide();
    });
    setInterval(function() {
    nextSlide()
    },5000);

}
window.onload=function(){
    responsiveSlider();
};

// *******Touch slide
const wrapper = document.querySelector('#slideWrap')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
  this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mouseleave', function (e) {
  pressed = false
})

window.addEventListener('mouseup', function (e) {
  pressed = false
  wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
  if(!pressed) {
    return
  }
  this.scrollLeft += startX - e.clientX
})
