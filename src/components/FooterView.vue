<template>
  <footer class="mt-8 bg_lol_black">
    <div class="container px-6 py-4 mx-auto">
      <hr class="mb-3 border_or" />
      <div class="flex flex-col items-center justify-between sm:flex-row">
        <router-link :to="{ name: 'home' }" class="flex gap-2">
          <p class="lol_or font-bold">LoLInfos</p>
        </router-link>
        <p class="mt-4 text-sm lol_or sm:mt-0">© Copyright 2024. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
