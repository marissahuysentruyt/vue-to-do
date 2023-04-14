<script>
export default {
  created() {
    this.$emit("created")
  }
}
</script>

<template>
   <button class="remove-button">Remove Completed To-Dos</button>
</template>

<style scoped>
  .remove-button {
    text-transform: uppercase;
    border: none;
    padding: 0.5rem 1rem;
    transition: all 150ms ease-in-out;
    letter-spacing: 0.02rem;
    font-weight: 700;
  }

  .remove-button:hover {
    background-color: #3fb883;
    color: #fff;
  }
</style>
