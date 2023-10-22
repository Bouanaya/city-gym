<template>
  <!-- JIT SUPPORT, for using peer-* below -->

  <div class="h-[70%] p-3 relative">
    <div class="w-96 mx-auto" style="scroll-snap-type: x mandatory;">
      <!-- first -->
      <div class="">
        <input
          class="sr-only peer"
          type="radio"
          name="carousel"
          id="carousel-1"
          checked
        />
        <!-- content #1 -->
        <div
          class="md:w-96 w-64 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0"
        >
          <div
            class="rounded-t-lg 
            md:w-96 w-80  h-0 flex justify-center items-center bg-text bg-card bg-cover object-cover bg-center"
          >
            <img
              class="w-14 h-14 rounded-full"
              src="https://cityclub.fitness/wp-content/uploads/2021/10/testimonial4-1.jpg"
              alt=""
            />
          </div>
          <div class="py-4 px-8">
            <h1
              class="hover:cursor-pointer mt-2 text-text text-center font-bold text-xl tracking-tight"
            >
              ZAKARIYA
            </h1>
            <p class="hover:cursor-pointer py-3 text-gray-600 leading-6">
              Les programmes que j'ai reçu correspondent bien à ma structure
              corporelle, je suis très content de pouvoir suivre mon évolution coach
 
            </p>
          </div>
          <!-- controls -->
          <div class="absolute top-1/2 w-full flex justify-between z-20">
            <label
              for="carousel-3"
              class="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
            <label
              for="carousel-2"
              class="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
      <!-- second -->
      <div class="">
        <input
          class="sr-only peer"
          type="radio"
          name="carousel"
          id="carousel-2"
        />
        <!-- content #2 -->
        <div
          class="md:w-96 w-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0"
        >
          <div
            class="rounded-t-lg md:w-96 w-80 h-0 flex justify-center items-center bg-text bg-card bg-cover object-cover bg-center"
          >
            <img
              class="w-14 h-14 rounded-full"
              src="https://cityclub.fitness/wp-content/uploads/2021/10/testimonial5.jpg"
              alt=""
            />
          </div>
          <div class="py-4 px-8">
            <h1
              class="hover:cursor-pointer mt-2 text-text font-bold text-xl text-center tracking-tight"
            >
              Aicha
            </h1>
            <p class="hover:cursor-pointer py-3 text-gray-600 leading-6">
              Avec le bilan médico-sportif, je peux maintenant cerner mes
              faiblesses pour améliorer mes capacités sportives, merci beaucoup
              City Club !
            </p>
          </div>
          <!-- controls -->
          <div class="absolute top-1/2 w-full flex justify-between z-20">
            <label
              for="carousel-1"
              class="inline-block text-blue-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
            <label
              for="carousel-3"
              class="inline-block text-blue-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
      <!-- three -->
      <div class="">
        <input
          class="sr-only peer"
          type="radio"
          name="carousel"
          id="carousel-3"
        />
        <!-- content #3 -->
        <div
          class="md:w-96 w-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0"
        >
          <div
            class="rounded-t-lg md:w-96 w-80 h-0 flex justify-center items-center bg-text bg-card bg-cover object-cover bg-center"
          >
            <img
              class="w-14 h-14 rounded-full"
              src="https://cityclub.fitness/wp-content/uploads/2021/10/testimonial1.jpg"
              alt=""
            />
          </div>
          <div class="py-4 px-8">
            <h1
              class="hover:cursor-pointer mt-2 text-text font-bold text-xl text-center tracking-tight"
            >
              Sara
            </h1>
            <p class="hover:cursor-pointer py-3 text-gray-600 leading-6">
              Je suis très fière du bilan que j'ai passé au sein du club
              Lissasfa, je me retrouve avec un vrai suivi médico-sportif alliant
              sport et santé.
            </p>
          </div>
          <!-- controls -->
          <div class="absolute top-1/2 w-full flex justify-between z-20">
            <label
              for="carousel-2"
              class="inline-block text-yellow-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
            <label
              for="carousel-1"
              class="inline-block text-yellow-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
