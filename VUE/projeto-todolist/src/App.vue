<template>
  <div id="app">
    <TodoList />
  </div>
</template>
<script>

import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
