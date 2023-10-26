<template>
  <div class="container">
    <div class="flex justify-center items-center pt-9 gap-2 font-display">
      <h1 class="md:text-3xl text-xl text-text">SUIVEZ</h1>
      <h1 class="md:text-3xl text-xl">NOTRE ACTUALITE</h1>
    </div>
    <!-- Component: Slider with indicators outside -->

    <!-- Component: Slider with indicators inside -->
  <!-- Component: Slider with controls outside -->
  
    
   
      <div class="sliderAx h-auto">
          <div id="slider-1" class="container mx-auto">
            <slicompo></slicompo>
          <br>
          </div>
    
          <div id="slider-2" class="container mx-auto">
            <div class="flex flex-col overflow-hidden bg-white rounded shadow-md sm:flex-row text-slate-500 shadow-slate-200 md:p-20 ">
        <!-- Image -->
        <figure class="flex-1">
          <img src="https://cityclub.fitness/wp-content/uploads/2023/05/b623eea7e0dffb598115b85d9525889f.jpg" alt="card image" class="object-cover min-h-full aspect-auto" />
        </figure>
        <!-- Body-->
        <div class="flex-1 p-6 sm:mx-6 sm:px-0">
          <header class="flex gap-4 mb-4">
            <a href="#" class="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full">
              <img src="https://i.pravatar.cc/48?img=24" alt="user name" title="user name" width="48" height="48" class="max-w-full rounded-full" />
            </a>
            <div>
              <h3 class="text-xl font-medium text-slate-700">A day in the sun</h3>
              <p class="text-sm text-slate-400"> By Sue, jun 3 2023</p>
            </div>
          </header>
          <p>
            After a walk through history, there is nothing left to do but admire the hypnotizing landscapes that exist in every direction. From vast deserts to rainbow mountains, and everything in between.
          </p>
        </div>
      </div>
            
          <br>
          </div>
        </div>
     <div  class="flex gap-2 w-12 mx-auto pb-2">
        <button id="sButton1" onclick="sliderButton1()" class="bg-text rounded-full w-4 pb-2 " ></button>
        <button id="sButton2" onclick="sliderButton2() " class="bg-text rounded-full w-4 p-2"></button>
        <button id="sButton3" onclick="sliderButton3() " class="bg-text rounded-full w-4 p-2"></button>
      </div>
    
    




<!-- End Slider with controls outside -->
  
  
  
  
  </div>
</template>

<script setup>
import slicompo from '../components/slicompo.vue'
  var cont=0;
function loopSlider(){
var xx= setInterval(function(){
      switch(cont)
      {
      case 0:{
          $("#slider-1").fadeOut(400);
          $("#slider-2").delay(400).fadeIn(400);
          $("#sButton1").removeClass("bg-text");
          $("#sButton2").addClass("bg-text");
      cont=1;
      
      break;
      }
      case 1:
      {
      
          $("#slider-2").fadeOut(400);
          $("#slider-1").delay(400).fadeIn(400);
          $("#sButton2").removeClass("bg- bg-gray-300");
          $("#sButton1").addClass(" bg-gray-300");
         
      cont=0;
      
      break;
      }
      
      
      }},9000);

}

function reinitLoop(time){
clearInterval(xx);
setTimeout(loopSlider(),time);
}



function sliderButton1(){

  $("#slider-2").fadeOut(400);
  $("#slider-1").delay(400).fadeIn(400);
  $("#sButton2").removeClass("bg-purple-800");
  $("#sButton1").addClass("bg-purple-800");
  reinitLoop(4000);
  cont=0
  
  }
  
  function sliderButton2(){
  $("#slider-1").fadeOut(400);
  $("#slider-2").delay(400).fadeIn(400);
  $("#sButton1").removeClass("bg-purple-800");
  $("#sButton2").addClass("bg-purple-800");
  reinitLoop(4000);
  cont=1
  
  }

  $(window).ready(function(){
      $("#slider-2").hide();
      $("#sButton1").addClass("bg-purple-800");
      

      loopSlider();
   
      
  
  
  
  
  });


</script>
 
