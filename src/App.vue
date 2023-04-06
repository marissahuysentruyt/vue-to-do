<script>
  import WelcomeMessage from './components/WelcomeMessage.vue';
  import ToDoList from "./components/ToDoList.vue";
  
  export default {
    data () {
      return {
        "altText": "Vue logo",
        "logoSrc": "./src/assets/logo.svg",
      }
    },
    components: {
      WelcomeMessage,
      ToDoList,
    }
  }
</script>

<template>
  <header>
    <img :alt="altText" class="logo" :src="logoSrc" width="125" height="125" />
    <div class="wrapper">
      <WelcomeMessage greetingMessage="What do you have to do today?" />
    </div>
  </header>

  <main>
    <ToDoList />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
