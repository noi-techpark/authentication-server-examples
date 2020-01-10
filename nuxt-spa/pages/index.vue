<template>
  <div class="p-5 flex justify-center bg-gray-100">
    <div class="mx-2 my-4 xl:mx-0 p-5 border-3 border-black bg-white">
      <h1>You are not logged in!</h1>
      <button @click="login">Log in</button>
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
