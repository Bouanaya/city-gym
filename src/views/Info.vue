<template>
  <div
    class="bg-imgInfo w-full h-screen object-cover bg-cover bg-no-repeat relative"
  >
    <div class="md:flex grid grid-cols-2 justify-center md:gap-20 gap-4 container pt-28 cont">
      <div
        class="bg-[#151a1e61] p-2 rounded-md hover:bg-[#1225303d] duration-300"
      >
        <h1 class="text-center text-text font-bold font-display text-5xl">
          +41
        </h1>
        <P class="text-center text-white text-xl">CLUB DE SPORT </P>
      </div>
      <div
        class="bg-[#151a1e61] p-2 rounded-md hover:bg-[#1225303d] duration-300"
      >
        <h1 class="text-center text-text font-bold font-display text-5xl">
          +600
        </h1>
        <P class="text-center text-white text-xl">COACH </P>
      </div>
      <div
        class="bg-[#151a1e61] p-2 rounded-md hover:bg-[#1225303d] duration-300"
      >
        <h1 class="text-center text-text font-bold font-display text-5xl">
          +72
        </h1>
        <P class="text-center text-white text-xl">ACTIVITES </P>
      </div>
      <div
        class="bg-[#151a1e61] p-2 rounded-md hover:bg-[#1225303d] duration-300"
      >
        <h1 class="text-center text-text font-bold font-display text-5xl">
          +1100
        </h1>
        <P class="text-center text-white text-xl">COLLABORATEURS </P>
      </div>
    </div>
 
    <Slider></Slider>
 
   
  </div>
</template>
<script setup>
import Slider from "../components/Slider.vue";
</script>
