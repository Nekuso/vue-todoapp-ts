import { computed } from 'vue'
import { todoList } from './todoUtils'
import type { TodoItemType } from '@/types/todoType'

export const pendingList = computed(() =>
  todoList.value.filter((todo: TodoItemType) => !todo.isCompleted)
)

export const completedList = computed(() =>
  todoList.value.filter((todo: TodoItemType) => todo.isCompleted)
)
