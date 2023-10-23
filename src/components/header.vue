<template>
  <div
    class="w-full flex justify-between py-3 fixed md:bg-[#27313935] px-6 z-50"
    :class="( { Shadow: !ShowBg }, { show: !ShowBg })"
  >
    <router-link to="Home" class="flex gap-1">
      <h1 class="text-white text-5xl font-display">city</h1>
      <h1 class="text-text text-lg font-semibold">GYm</h1>
    </router-link>
    <ul class="hidden md:flex gap-4 items-center">
      <li>
        <router-link
          to="Aprops"
          class="hover:text-text text-gray-400 duration-150"
          >Aprops</router-link
        >
      </li>
      <li>
        <router-link
          to="CLUBS"
          class="hover:text-text text-gray-400 duration-150"
          >CLUBS</router-link
        >
      </li>
      <li>
        <router-link
          to="BILAN"
          class="hover:text-text text-gray-400 duration-150"
          >BILAN</router-link
        >
      </li>
      <li>
        <router-link
          to="CONTACT"
          class="hover:text-text text-gray-400 duration-150"
          >CONTACT</router-link
        >
      </li>
      <li>
        <router-link to="RECRUTEMENT" class="text-text"
          >RECRUTEMENT</router-link
        >
      </li>
      <li>
        <router-link to="FRANCHISE" class="text-text"
          >DEVENIR FRANCHISE</router-link
        >
      </li>
      <li>
        <router-link to="LOCAL " class="text-text">LOCAL COMERCIAL</router-link>
      </li>
    </ul>
    <div class="flex items-center gap-4">
      <button
        class="md:flex hidden text-white px-6 py-2 border-text duration-200 hover:bg-gradient-to-l from-[#122530] to-text rounded-lg border-[1px]"
      >
        S'inscrire
      </button>
      <button
        class="md:hidden"
        @click="toggleClass()"
        :class="{ MEnuav: MenuIcon }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-9 h-9 text-text"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  </div>
  <div
    class="w-full absolute duration-500 bg-gradient-to-b from-text to-prumry h-screen top-[-100%] z-50"
    :class="{ isActive: classActive }"
  >
    <button class="absolute right-8 top-8" @click="toggleClass()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-9 h-9 text-prumry"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
          
        />
      </svg>
    </button>

    <ul class="flex flex-col gap-8">
      <li>
        <router-link
          to="Aprops"
          class="hover:text-text text-gray-400 duration-150"
          >Aprops</router-link
        >
      </li>
      <li>
        <router-link
          to="CLUBS"
          class="hover:text-text text-gray-400 duration-150"
          >CLUBS</router-link
        >
      </li>
      <li>
        <router-link
          to="BILAN"
          class="hover:text-text text-gray-400 duration-150"
          >BILAN</router-link
        >
      </li>
      <li>
        <router-link
          to="CONTACT"
          class="hover:text-text text-gray-400 duration-150"
          >CONTACT</router-link
        >
      </li>
      <li>
        <router-link to="RECRUTEMENT" class="text-text"
          >RECRUTEMENT</router-link
        >
      </li>
      <li>
        <router-link to="FRANCHISE" class="text-text"
          >DEVENIR FRANCHISE</router-link
        >
      </li>
      <li>
        <router-link to="LOCAL " class="text-text">LOCAL COMERCIAL</router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.isActive {
  top: 0;

  transition-duration: 500ms;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
}
.show{
  background-color: #151a1e;
}
.MEnuav {
  display: none;
}
.Shadow {
  box-shadow: #c5470a 0px 20px 20px -20px;
  transition-duration: 0.5s;
}
</style>
<script setup>
import { ref } from "vue";
const classActive = ref(false);

function toggleClass() {
  classActive.value = !classActive.value;
  console.log(classActive);
}

const ShowBg = ref(true);
const MenuIcon = ref(false);
document.addEventListener("scroll", () => {
  let bodyPostionTop = document.body.getBoundingClientRect().top;
  if (bodyPostionTop < -100) {
    ShowBg.value = false;
    MenuIcon.value = true;
    classActive.value = false;
  } else {
    ShowBg.value = true;
    MenuIcon.value = false;
  }
});
</script>
