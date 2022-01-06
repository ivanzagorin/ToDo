<template>
  <div class="todo-item" :class="completed ? 'active' : ''">
    <div class="checkbox">
      <input
        type="checkbox"
        :checked="completed"
        @change="toggleCompletion()"
        :id="'todo-item-' + id"
      />
      <label :for="'todo-item-' + id" class="checkbox-label"></label>
    </div>
    <div class="todo-item__text">{{ text }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { MutationType } from "@/store/mutations";
export default defineComponent({
  props: {
    id: { type: Number, required: true },
    text: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  setup(props) {
    const store = useStore();
    const toggleCompletion = () => {
      store.commit(MutationType.CompleteItem, {
        id: props.id,
        completed: !props.completed,
      });
    };
    return { toggleCompletion };
  },
});
</script>

<style lang="scss">
.todo-item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(143, 143, 143, 0.3);
  border: 2px solid #fff;
  &.active{
    border: 2px solid #4dba87;
  }
  &:not(:last-child){
    margin-bottom: 20px;
  }
  &__text{
    width: calc(100% - 30px);
  }
  .checkbox{
    input[type="checkbox"]{
      display: none;
      &:checked + .checkbox-label::after{
        opacity: 1;
      }
    }
    &-label{
      display: block;
      position: relative;
      width: 20px;
      height: 20px;
      border-radius: 5px;
      border: 1px solid #4dba87;
      cursor: pointer;
      &::after{
        content: '';
        position: absolute;
        top: 3px;
        left: 1px;
        width: 17px;
        height: 11px;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml,%3Csvg width='17' height='11' viewBox='0 0 17 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3.5L7 9.5L15.5 1' stroke='%234DBA87' stroke-width='2'/%3E%3C/svg%3E%0A");
        transition: opacity 0.3s;
        opacity: 0;
      }
    }
  }
}
</style>