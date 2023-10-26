<template>
  <div>
    <button :class="classes"><slot></slot></button>
  </div>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({
  size: String,
  rounded: String,
});
const classes = computed(() => `${size.value}${rounded.value}`);

const size = computed(()=>{
    if (props.size === "outliend") {


        
    }
})
const rounded = computed(()=>{

}) 
</script>
