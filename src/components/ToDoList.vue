<script>
  export default {
    data () {
      return {
        toDo: "",
        toDos: [{
          id: Math.random(),
          text: "vacuum the house"
        }]
      }
    },
    methods: {
      removeToDoItem (toDoId) {
        this.toDos = this.toDos.filter((toDo) => toDo.id !== toDoId)
      }, 
      addToDoItem () {
        if(this.toDo.length === 0) {
          alert("wait, what did you need to do?");
          return;
        } 
        else {
          this.toDos.push({
            id: Math.random(), 
            text: this.toDo
          });
          this.toDo = ""
        }
      },
      clearAllToDos () {
        this.toDos = [];
      }
    }
  }
</script>

<template>
  <section class="to-do-list">
    <ul>
      <li class="item" v-for="toDo in toDos" :key="toDo.id">
        {{ toDo.text }}
        <button @click="removeToDoItem(toDo.id)">done</button>
      </li>
      <li>
        <input v-model="toDo" type="text" placeholder="pick up cat food">
      </li>
    </ul>

    <button @click="addToDoItem">Add a To-Do</button>
    <button @click="clearAllToDos">clear all items</button>
  </section>
</template>

<style scoped>
  .to-do-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
</style>
