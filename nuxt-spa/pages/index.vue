<!--
SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>

SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
  <div class="p-5 flex justify-center bg-gray-100">
    <div
      class="flex flex-col items-center mx-2 my-4 xl:mx-0 p-8 border-2 shadow border-black bg-white"
    >
      <h1 class="text-xl mb-8">Welcome to NOI Single Page App Example.</h1>
      <button
        @click="login"
        class="mx-auto px-4 py-4 border-2 border-black hover:bg-black hover:text-white"
      >
        Log in with <strong>NOI Authentication</strong>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  methods: {
    login() {
      this.$auth.loginWith('noi')
    }
  }
}
</script>
