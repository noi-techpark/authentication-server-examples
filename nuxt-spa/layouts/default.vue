<!--
SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>

SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
  <div id="layout" class="font-sans">
    <div class="mb-4">
      <div class="mb-4 xl:mb-0 flex content-end border-b border-gray-500">
        <div class="p-4 flex flex-col justify-center">
          <nuxt-link to="/"
            ><img src="~/static/noi.svg" alt="NOI" class="image-noi"
          /></nuxt-link>
        </div>
        <div
          class="flex flex-1 flex-col justify-center p-4 border-l border-gray-500 leading-tight font-light text-3xl sm:text-4xl"
        >
          <nuxt-link to="/">
            NOI SPA Example App
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="px-0 xl:px-4">
      <nuxt />
    </div>
  </div>
</template>

<style>
#layout {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply text-black;
}

.image-noi {
  width: auto;
  height: 40px;

  @screen sm {
    height: 50px;
  }

  @screen xl {
    height: 65px;
  }
}
</style>
