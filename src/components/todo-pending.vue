<script setup lang="ts">
import { pendingList } from '@/utils/categories'
import TodoItem from './todo-item.vue'
import draggable from 'vuedraggable'
</script>

<template>
  <draggable v-model="pendingList" item-key="id" class="all__items__content">
    <template #item="{ element }">
      <TodoItem :todoItem="element" />
    </template>
  </draggable>
</template>

<style lang="scss" scoped>
.pending__items__content {
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
