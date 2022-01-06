<template>
  <div class="home">
    <h1>TodoList</h1>
    <TodoForm />
    <TodoList />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";

@Options({
  components: {
    TodoList,
    TodoForm,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
* {
  font-family: sans-serif;
  box-sizing: border-box;
  &:focus {
    outline: #4dba87;
  }
}
.home {
  max-width: 600px;
  margin: 0 auto;
}
</style>