<template>
  <div class="p-5 flex justify-center bg-gray-100">
    <div
      class="flex flex-col flex-grow items-center mx-2 my-4 xl:mx-0 p-8 border-2 shadow border-black bg-white"
    >
      <h1 class="text-xl mb-8">Your Profile</h1>
      <div class="mb-8">
        <dl>
          <div>
            <dt class="descTitle">Name:</dt>
            <dd class="inline-block">
              {{ user.name }}
            </dd>
          </div>
          <div>
            <dt class="descTitle">Username:</dt>
            <dd class="inline-block">
              {{ user.preferred_username }}
            </dd>
          </div>
          <div>
            <dt class="descTitle">Emai:</dt>
            <dd class="inline-block">
              {{ user.email }}
            </dd>
          </div>
        </dl>
      </div>
      <nuxt-link
        to="/resource-server"
        class="mx-auto px-4 py-4 border-2 border-black hover:bg-black hover:text-white"
        >Get my email from resource server</nuxt-link
      >
      <button
        @click="logout"
        class="mx-auto mt-4 px-4 py-4 border-2 border-black hover:bg-black hover:text-white"
      >
        Log out
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$auth.user
    }
  },
  methods: {
    logout() {
      this.$auth.logout()
    }
  }
}
</script>

<style scoped>
.descTitle {
  @apply inline-block font-bold;
  min-width: 100px;
}
</style>
