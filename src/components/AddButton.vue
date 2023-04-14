<script>
export default {
  // props: {
  //   addToDoItem: { type: Function },
  // },
  // mounted() {
  //   // Use the parent function directly here
  //   this.addToDoItem();
  // }

  created() {
    this.$emit('created')
  }

}
</script>

<template>
  <button class="add-button">Add a To-Do</button>
</template>

<style scoped>
  .add-button {
    text-transform: uppercase;
    border: none;
    padding: 0.5rem 1rem;
    transition: all 150ms ease-in-out;
    letter-spacing: 0.02rem;
    font-weight: 700;
  }

  .add-button:hover {
    background-color: #3fb883;
    color: #fff;
  }
</style>
