<template>
  <div id="app">
    <div class="container-fluid col-centered todo-app">
      <center><h1><strong>todos</strong></h1></center>
      <input class="form-control" v-model="newTodo" v-on:keyup.enter="addTodo(newTodo)">
      <h3><i>uncompleted </i>({{ remaining.length }})</span></h3>
      <ul class="list-group">
        <li class="list-group-item list-group-item-info" v-for="todo in remaining">
          <span>{{ todo.content }}</span>
          <button class="btn btn-default" @click="deleteTodo(todo)"><span class="glyphicon glyphicon-remove" />
          </button>
          <button class="btn btn-default" @click="toggleStatus(todo)"><span class="glyphicon glyphicon-ok" />
          </button>
        </li>
      </ul>
      <p>Start hacking and add some tasks!</p>
      <div v-if="completed.length">
      <h3><i>completed</i> ({{ completed.length }})</h3>
      <ul class="list-group">
      <li class="list-group-item list-group-item-success" v-for="todo in completed">
      {{ todo.content }}
      <button class="btn btn-default" @click="toggleStatus(todo)"><i class="fa fa-ban"></i></button>
      </li>
      </ul>
      <button class="btn btn-danger" @click=clearCompleted()>clear <span class="glyphicon glyphicon glyphicon-remove-sign" /></button>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'app',
  data() {
    return {
      newTodo : ''
    }
  },
  computed: mapGetters(['remaining', 'completed']),
  methods: mapActions(['addTodo','toggleStatus','deleteTodo', 'clearCompleted'])
}
</script>

<style lang="scss">
body {
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #DEDEDE;
}

.todo-app {
  height: relative;
  width: 500px;
  position: relative;
}

.btn {
  float: right;
  font-size: 10px;
  line-height: 1px;
}

.footer {
  height: relative;
  width: 600px;
  position: relative;
}
</style>
