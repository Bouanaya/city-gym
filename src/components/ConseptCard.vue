<template>
  <div
  
    class="md:flex grid grid-cols-2 md:justify-between container w-full  gap-4 md:gap-8 mt-14"
  >
    <div class="relative overflow-hidden ali">
      <img
        src="https://cityclub.fitness/wp-content/uploads/2022/08/concept.jpg"
        alt=""
        class="md:w-80 md:h-96 rounded-md object-cover"
      />
     
      <nav
        class="flex px-2 absolute justify-center items-center duration-500 w-full text h-full bg-gradient-to-t from-text to-[#151a1e48] top-[-100%]"
      >
        <router-link to="CONCEPT">
          <h1
            class="text-white hover:text-text font-semibold duration-200  text-2xl"
          >
            CONCEPT
          </h1>
        </router-link>
      </nav>
    </div>
    <div class="relative ali overflow-hidden">
      <img
        src="https://cityclub.fitness/wp-content/uploads/2022/08/activites.jpg"
        alt=""
        class="md:w-80 md:h-96 rounded-md object-cover"
      />
      <nav
        class="flex px-2 absolute justify-center items-center duration-500 w-full text h-full bg-gradient-to-t from-text to-[#151a1e48] top-[-100%]"
      >
        <router-link to="ACTIVITES">
          <h1
            class="text-white hover:text-text font-semibold duration-200 text-2xl"
          >
            ACTIVITES
          </h1>
        </router-link>
      </nav>
    </div>
    <div class="relative ali overflow-hidden">
      <img
        src="https://cityclub.fitness/wp-content/uploads/2022/08/clubs.jpg"
        alt=""
        class="md:w-80 md:h-96 rounded-md object-cover"
      />
      <nav
        class="flex px-2 justify-center items-center absolute duration-500 w-full text h-full bg-gradient-to-t from-text to-[#151a1e48] top-[-100%]"
      >
        <router-link to="CLUBS">
          <h1
            class="text-white hover:text-text font-semibold duration-200  text-2xl"
          >
            CLUBS
          </h1>
        </router-link>
      </nav>
    </div>
    <div class="relative overflow-hidden ali">
      <img
        src="https://cityclub.fitness/wp-content/uploads/2022/08/Tarifs-v2-1.jpg"
        alt=""
        class="md:w-80 md:h-96 rounded-md object-cover"
      />
      <nav
        class="flex px-2 absolute duration-500 w-full justify-center items-center text h-full bg-gradient-to-t from-text to-[#151a1e48] top-[-100%]"
      >
        <router-link to=" ABONNEMENT"
          ><h1
            class="text-white hover:text-text font-semibold duration-200 text-2xl"
          >
            ABONNEMENT
          </h1></router-link
        >
      </nav>
    </div>
  </div>
</template>
<style scoped>
.ali:hover .text {
  top: 0;
}
</style>
