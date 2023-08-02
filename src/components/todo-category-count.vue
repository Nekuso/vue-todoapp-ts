<script setup lang="ts">
const props = defineProps({
  todoList: Array,
  categoryCount: Number
})
</script>
<template>
  <span class="count"> {{ props.categoryCount }}/{{ props.todoList?.length }} </span>
</template>
