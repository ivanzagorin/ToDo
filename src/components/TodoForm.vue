<template>
  <div>
    <form class="todo-form" @submit.prevent="createTask">
      <input 
        class="todo-input" 
        type="text" 
        placeholder="Type new task" 
        v-model="text"
      />
      <button class="todo-btn">Create</button>
    </form>
  </div>
</template> 

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "@/store";
import { TodoItem } from "@/store/state";
import { MutationType } from "@/store/mutations";
export default defineComponent({
  setup() {
    const text = ref("");
    const store = useStore();
    const createTask = () => {
      if (text.value === "") return;
      const item: TodoItem = {
        id: Date.now(),
        text: text.value,
        completed: false,
      };
      store.commit(MutationType.CreateItem, item);
      text.value = "";
    };
    return { createTask, text };
  },
});
</script>

<style lang="scss">
.todo-form {
  display: flex;
  margin-bottom: 20px;
}
.todo-input {
  width: calc(100% - 85px);
  padding: 10px;
  margin-right: auto;
  border-radius: 5px;
  border: 1px solid #4dba87;
}
.todo-btn {
  width: 75px;
  text-align: center;
  padding: 12px;
  border: 0;
  border-radius: 5px;
  color: #fff;
  background: #4dba87;
  font-weight: 700;
}
</style>