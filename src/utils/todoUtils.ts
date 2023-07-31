import { uid } from 'uid'
import { ref, reactive, watch } from 'vue'
import type { TodoItemType } from '@/types/todoType'

export const todoList = ref<TodoItemType[]>(
  JSON.parse(localStorage.getItem('todoList') || '[]').length > 0
    ? JSON.parse(localStorage.getItem('todoList') || '[]')
    : [
        {
          id: uid(),
          todoTitle: 'Make Breakfast',
          todoDescription: 'Make breakfast and eat before going to work',
          isCompleted: false
        },
        {
          id: uid(),
          todoTitle: 'Go to work',
          todoDescription: 'Go to work and do some work',
          isCompleted: false
        },
        {
          id: uid(),
          todoTitle: 'Go to gym',
          todoDescription: 'Go to gym and do some workout',
          isCompleted: false
        }
      ]
)

watch(
  todoList,
  (todoList) => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
    console.log('todoList updated')
  },
  { deep: true }
)

export const todoItem = reactive<TodoItemType>({
  id: '',
  todoTitle: '',
  todoDescription: '',
  isCompleted: false
})

export const viewMode = ref<boolean>(true)
export const createMode = ref<boolean>(true)

export const toggleViewMode = () => void (viewMode.value = !viewMode.value)
{
  viewMode.value = !viewMode.value
}

export const toggleCreateMode = () => void (createMode.value = !createMode.value)
{
  createMode.value = !createMode.value
}

export const viewTodo = (todo: TodoItemType) => {
  const index = todoList.value.findIndex((item) => item.id === todo.id)
  todoItem.id = todoList.value[index].id
  todoItem.todoTitle = todoList.value[index].todoTitle
  todoItem.todoDescription = todoList.value[index].todoDescription
  todoItem.isCompleted = todoList.value[index].isCompleted
  toggleViewMode()
}

export const createTodo = (todoTitle: string, todoDescription: string) => {
  const newTodo: TodoItemType = {
    id: uid(),
    todoTitle,
    todoDescription,
    isCompleted: false
  }
  todoList.value.unshift(newTodo)
}

export const updateTodo = (todo: TodoItemType) => {
  const index = todoList.value.findIndex((item) => item.id === todo.id)
  todoList.value[index] = todo
}

export const deleteTodo = (todo: TodoItemType) => {
  const index = todoList.value.findIndex((item) => item.id === todo.id)
  todoList.value.splice(index, 1)
}

export const completeTodo = (todo: TodoItemType) => {
  const index = todoList.value.findIndex((item) => item.id === todo.id)
  todoList.value[index].isCompleted = !todoList.value[index].isCompleted
}
