import { todoList } from '@/utils/todoUtils'
import { pendingList } from '@/utils/categories'
import { completedList } from '@/utils/categories'
import { computed } from 'vue'

export const useTodoCounts = () => {
  const totalCount = computed(
    () => todoList.value.length + pendingList.value.length + completedList.value.length
  )
  const pendingCount = computed(() => pendingList.value.length)
  const completedCount = computed(() => completedList.value.length)

  return {
    totalCount,
    pendingCount,
    completedCount
  }
}
