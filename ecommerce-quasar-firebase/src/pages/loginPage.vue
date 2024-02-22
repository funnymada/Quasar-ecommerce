<template>
    <div align="center" class="formLogin">
      <div class="nomeInput">
        <q-input
          filled
          v-model="name"
          label="Your name"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
      </div>
      <div class="nomeInput">
        <q-input
          filled
          v-model="password"
          label="password"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
      </div>
      <div class="bottone" align="center">
        <q-btn @click="confirmLogin" flat style="color: black" label="confirm" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const name = ref();
  const password = ref();
  
  const confirmLogin = () => {};
  </script>
  <style scoped>
  .nomeInput {
    margin-top: 10%;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 20px;
  }
  
  .formLogin {
    margin-top: 20%;
    margin-left: 40%;
    margin-right: 40%;
    border: 1px;
    border-style: solid;
    border-color: black;
    width: fit-content;
  }
  </style>
  