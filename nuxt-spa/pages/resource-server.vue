<!--
SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>

SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
  <div class="p-5 flex justify-center bg-gray-100">
    <div
      class="flex flex-col flex-grow items-center mx-2 my-4 xl:mx-0 p-8 border-2 shadow border-black bg-white"
    >
      <h1 class="text-xl mb-8">Resource server</h1>
      <div class="mb-8">
        <dl>
          <div>
            <dt class="descTitle">Email:</dt>
            <dd class="inline-block">
              {{ me.email }}
            </dd>
          </div>
        </dl>
      </div>
      <nuxt-link
        to="/profile"
        class="mx-auto px-4 py-4 border-2 border-black hover:bg-black hover:text-white"
        >Show my profile</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const data = await $axios.$get(process.env.resource + '/me')
    return { me: data }
  }
}
</script>

<style scoped>
.descTitle {
  @apply inline-block font-bold;
  min-width: 100px;
}
</style>
