<template>
  <footer class="bg-blue-400 mt-12">
    <div class="container px-6 py-4 mx-auto">
      <hr class="mb-3 border-white" />
      <div class="flex flex-col items-center justify-between sm:flex-row">
        <router-link :to="{ name: 'home' }" class="flex gap-2">
          <p class="text-white">LoLInfos</p>
        </router-link>
        <p class="mt-4 text-sm text-white sm:mt-0">© Copyright 2024. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
