<script>
export default {
  props: {
    clearAllToDos: { type: Function}
  }
}
</script>

<template>
  <button @click="clearAllToDos" class="clear-list-button">Clear My List!</button>
</template>

<style scoped>
  .clear-list-button {
    text-transform: uppercase;
    border: none;
    padding: 0.5rem 1rem;
    transition: all 150ms ease-in-out;
    letter-spacing: 0.02rem;
    font-weight: 700;
  }

  .clear-list-button:hover {
    background-color: #3fb883;
    color: #fff;
  }
</style>
