<script>
import AddButton from './AddButton.vue';
import RemoveCompletedToDos from "./RemoveCompletedToDos.vue"
import ClearAllToDos from "./ClearAllToDos.vue";

  export default {
    data() {
      return {
        toDo: "",
        toDos: [{
          id: Math.random(),
          text: "vacuum the house",
          checked: false,
        }],
        completedToDos: [],
        props: {
            placeholder: "add your to-do here",
        }
      };
    },
    methods: {
        crossOutItem(toDo) {
          toDo.checked = !toDo.checked;
          if(toDo.checked) {
            this.completedToDos.push(toDo);
          }
          else {
            this.completedToDos.pop(toDo);
          }
        },
        // remove completed todo from list
        removeCompletedToDos() {
          this.toDos.forEach((todo) => {
            if(todo.checked) {
              this.toDos = this.toDos.filter((todo) => todo.checked !== true);
            }
          })
        },
        // add new todo to list
        addToDoItem() {
          if (this.toDo.length === 0) {
              alert("wait, what did you need to do?");
              return;
          }
          else {
              this.toDos.push({
                  id: Math.random(),
                  text: this.toDo
              });
              this.toDo = "";
          }
        },
        // completely remove all todos from list
        clearAllToDos() {
            this.toDos = [];
        }
    },
    components: { AddButton, ClearAllToDos, RemoveCompletedToDos }
}
</script>

<template>
  <section class="to-do-list">
    <ul>
      <li class="item" v-for="toDo in toDos" :key="toDo.id" :class="{ strikethrough : toDo.checked }">
        {{ toDo.text }}
        <input @click="crossOutItem(toDo)" type="checkbox">
      </li>
      <li>
        <input v-model="toDo" type="text" :placeholder="props.placeholder">
      </li>
    </ul>

    <AddButton @created="addToDoItem" @click="addToDoItem"></AddButton>
    <RemoveCompletedToDos @created="removeCompletedToDos" @click="removeCompletedToDos"></RemoveCompletedToDos>
    <ClearAllToDos :clearAllToDos="clearAllToDos"></ClearAllToDos>
  </section>
</template>

<style scoped>
  .to-do-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  p {
    display: inline;
  }

  .strikethrough {
    text-decoration: line-through;
  }
</style>
