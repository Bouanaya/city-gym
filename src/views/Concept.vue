<template>
  <div class="bg-[#151a1e] py-10 z-10 w-full">
    <div class="text-center">
      <h1 class="text-white text-3xl">DECOUVREZ NOTRE CONCEPT</h1>
      <h1 class="text-text text-3xl mt-2">& PARTAGEZ NOTRE PASSION</h1>
    </div>
    <ConseptCard></ConseptCard>
    <Engagements></Engagements>
    <div class="w-full container flex justify-center">
      <button
        class="md:flex  text-white px-6 py-2 border-text duration-500 hover:bg-gradient-to-l from-[#122530] to-text rounded-lg  border-[1px]"
      >
        S'inscrire
      </button>
    </div>
  </div>
</template>
<script setup>
import ConseptCard from "../components/ConseptCard.vue";
import Engagements from "../components/Engagements.vue";
</script>
