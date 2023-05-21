<template>
  <div v-if="!userStore.getters.isLoggedIn">
    <FormLogin />
  </div>
  <div v-else>
    <h2>Welcome, {{ userStore.state.name }}</h2>
    <Counter />
    <button @click="userStore.logout()">Log Out</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Counter from "./components/Counter.vue";
import FormLogin from "./components/FormLogin.vue";
import userStore from "@/stores/user";

export default defineComponent({
  name: 'App',
  components: { FormLogin, Counter },
  setup() {
    onMounted(userStore.getUser)
    return { userStore }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
