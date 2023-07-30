import { computed, ref } from "vue";
import { todoList } from "./todoUtils";
import type { todoItemType } from '@/types'

export const pendingList = computed(() => todoList.value.filter((todo: todoItemType) => !todo.isCompleted))

export const completedList = computed(() => todoList.value.filter((todo: todoItemType) => todo.isCompleted))