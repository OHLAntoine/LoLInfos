<script setup>
import { RouterView } from 'vue-router'
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
</script>

<template>
  <header-view />
  <main>
    <router-view />
  </main>
  <footer-view />
</template>
