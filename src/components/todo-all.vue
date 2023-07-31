<script setup lang="ts">
import { todoList } from '@/utils/todoUtils'
import TodoItem from './todo-item.vue'
import Draggable from 'vuedraggable'
</script>

<template>
  <Draggable v-model="todoList" item-key="id" class="all__items__content">
    <template #item="{ element }">
      <TodoItem :todoItem="element" />
    </template>
  </Draggable>
</template>

<style lang="scss" scoped>
.all__items__content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
