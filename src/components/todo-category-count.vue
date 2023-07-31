<script setup lang="ts">
const props = defineProps({
  todoList: Array,
  categoryCount: Number
})
</script>
<template>
  <span class="count"> {{ categoryCount }}/{{ todoList?.length }} </span>
</template>
