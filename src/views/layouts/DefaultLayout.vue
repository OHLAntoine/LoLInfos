<script setup>
import { RouterView } from 'vue-router'
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
</script>

<template>
  <header-view />
  <main class="flex flex-col flex-grow">
    <router-view />
  </main>
  <footer-view />
</template>
