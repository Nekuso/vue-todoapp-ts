import { computed } from 'vue'
import { todoList } from './todoUtils'
import type { todoItemType } from '@/types'

export const pendingList = computed(() =>
  todoList.value.filter((todo: todoItemType) => !todo.isCompleted)
)

export const completedList = computed(() =>
  todoList.value.filter((todo: todoItemType) => todo.isCompleted)
)

// Counters
export const totalCount = computed(() => todoList.value.length)
export const pendingCount = computed(() => pendingList.value.length)
export const completedCount = computed(() => completedList.value.length)
