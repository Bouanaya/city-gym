<template>
    <div class="bg-white p-6 text-prumry  md:w-[600px] rounded-md my-4 md:my-10 ">
    
      <form>
        <div class=" md:flex justify-between items-center gap-8 my-4">
          <div class="flex flex-col w-full mb-4 ">
            <label>FirstName {{ isValidationemail }}</label>
            <input type="text" class="outline-none" placeholder="FirstName" v-model="firstName" />
          </div>
          <div class="flex flex-col w-full mb-4  ">
            <label>LastName</label>
            <input type="text" placeholder="LastName" v-model="lastName" class="outline-none" />
          </div>
        </div>
        <div class="flex flex-col w-full mb-4 ">
          <label>Email</label>
          <input type="email" placeholder="Email" v-model="email" class="outline-none" />
        </div>
  
        <div class="flex flex-col w-full mb-4 inp">
          <label>Password {{isValidationPassword}}</label>
          <div class="passwod-in">
            <input
              type="password"
              class="password outline-none"
              placeholder="Password"
              v-model="password"
             
            />
          </div>
        </div>
        <div class="flex flex-col w-full mb-4">
          <label>Date of Brith</label>
          <input type="date"  class="outline-none"/>
        </div>
        <div class="flex flex-col w-full mb-4">
          <label>Phone Number </label>
  
          <input
            type="tel"
            placeholder="Number Phone"
            id="phone"
            ref="phoneInput"
            v-model="numberPhone"
            class="outline-none"
          />
        </div>
  <div class="flex justify-center">
        <button
        class="flex  hover:text-white text-prumry px-8 py-2 border-text duration-200 hover:bg-gradient-to-l from-[#122530]  to-text rounded-lg border-[1px]"
      >
        Save
      </button>
    </div>
      </form>
    </div>
  </template>
  <style scoped>
  
  
 
    label {
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 8px;
    }
    input {
      padding: 10px 18px;
      color: #122530;
       
     border: 1px solid #c5480a63 ;
      border-radius: 5px;
      
    }
    #phone {
      width: 100%;
    }
  
     
    
    h1 {
      font-weight:bold;
    }
     
    .save {
      margin-top: 20px;
    }
  
    .passwod-in {
      position: relative;
    }
    .password {
      width: 100%;
    }
    .eays {
      position: absolute;
      right: 12px;
      bottom: 10px;
      background-color: transparent;
      color: black;
      width: 20px;
      height: 20px;
      padding: 0;
    }
 
  </style>
  
  <script setup>
  // import "intl-tel-input/build/css/intlTelInput.css"; // Import the CSS file
  // import intlTelInput from "intl-tel-input"; // Import the script file
  
  // export default {
  //   mounted() {
  //     // Initialize intl-tel-input on the mounted hook
  //     intlTelInput(this.$refs.phoneInput, {
  //       // Options can be added here (optional)
  //     });
  
  //   },
  
  // };
  
  import { ref, computed } from "vue";
  const starValidation = ref(false);
  const firstName = ref("");
  const lastName = ref("");
  const email = ref("");
  const password = ref("");
  const numberPhone = ref("");
  const re =
    /^(([^<script>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const pas = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  function sbmit() {
    starValidation.value = true;
  }
  const isValidationemail = computed(() => {
    return starValidation.value ? re.test(email.value) : null;
  });
  const isValidationPassword = computed(() => {
    return starValidation.value ? pas.test(password.value) : "";
  });
  
  
  
  </script>
  