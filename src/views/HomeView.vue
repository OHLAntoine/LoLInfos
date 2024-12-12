<template>
  <section class="lg:px-24 px-6 text-center">
    <h1 class="font-bold text-5xl">
      Bienvenue dans ce site d'informations sur les champions adverses !
    </h1>
    <p class="mt-6 text-lg">
      Ce site a pour but de vous aider à connaitre davantage les champions de l'équipe adverse afin
      de pouvoir réagir au mieux durant votre partie et obtenir la victoire !!
    </p>
  </section>

  <div class="border-double border-4 border_or lg:mx-24 mx-6 my-8"></div>

  <section class="lg:px-24 px-6">
    <div
      class="flex items-center justify-around content-center flex-col gap-8 md:flex-row md:gap-4"
    >
      <router-link
        :to="{ name: 'team' }"
        class="bg-gray-200 rounded-lg overflow-hidden shadow-lg shadow-black transition-transform transform hover:scale-105 max-w-96"
      >
        <div class="p-1 bg_lol_or"></div>
        <div class="p-8">
          <h2 class="text-3xl font-bold mb-4">Composition d'équipe</h2>
          <p class="mb-6">Obtenez des informations sur tous les champions de la team adverse.</p>
          <ul class="text-sm mb-6">
            <li class="mb-2 flex items-center">
              <svg
                class="w-6 h-6 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Tous les rôles
            </li>
          </ul>
        </div>
      </router-link>
      <router-link
        :to="{ name: 'champion' }"
        class="bg-gray-200 rounded-lg overflow-hidden shadow-lg shadow-black transition-transform transform hover:scale-105 max-w-96"
      >
        <div class="p-1 bg_lol_or"></div>
        <div class="p-8">
          <h2 class="text-3xl font-bold mb-4">Champion unique</h2>
          <p class="mb-6">Obtenez des informations sur un champion de la team adverse.</p>
          <ul class="text-sm mb-6">
            <li class="mb-2 flex items-center">
              <svg
                class="w-6 h-6 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              1 champion en particulier
            </li>
          </ul>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
