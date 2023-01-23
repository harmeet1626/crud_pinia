<template>
  <div class="home">
    <label>This is crud App using pinia</label><br />
    <input placeholder="search here" v-model="search_todo" /><br /><br />
    <input
      placeholder="please enter todo here"
      v-model="add_todo"
    /><br /><br />
    <button v-if="isEditing == false" @click="addTodo">Add</button>
    <button v-if="isEditing == true" @click="Update">Update</button>
    <button @click="DeleteAll">Delete All</button><br /><br />
    <label>Choose priority</label>
    <select v-model="priority">
      <option value="High">High-low</option>
      <option value="Low">Low-high</option>
    </select>

    <button @click="sort">Sort</button><br />
    <div id="app">
      <div id="box-droppable1" @drop="drop" @dragover="allowDrop">
        <hr />

        <div class="" draggable="true" @dragstart="onDragging" id="123"></div>
        <h2
          id="img-draggable"
          v-for="(todos, index) in filteredList"
          :key="index"
          draggable="true"
          @dragstart="drag"
        >
          <li>{{ todos.todo }}</li>
          <button @click="edit_todo(index)">Edit</button>
          <button @click="delete_todo(index)">Delete</button>
          <input type="checkbox" v-model="todos.checked" />
        </h2>
      </div>

      <div id="box-droppable2" @drop="drop" @dragover="allowDrop"></div>
    </div>
  </div>
</template>
<script setup>
import { Store } from "../store/store";
import { ref, computed } from "vue";
const stores = Store();
const isEditing = ref(false);
const All_todos = computed(() => stores.gettodo);
const priority = ref("low");
let temp_index = ref();
let add_todo = ref(null);
let search_todo = ref("");
const addTodo = () => {
  if (add_todo.value == null) {
    alert("please add todo");
  } else {
    stores.Add_Todo(add_todo);
    add_todo.value = null;
  }
};
const delete_todo = (index) => {
  stores.Delete_Todo(index);
};
const edit_todo = (index) => {
  temp_index = index;
  add_todo.value = All_todos.value[index].todo;
  isEditing.value = true;
};

const filteredList = computed(() => {
  return All_todos.value.filter((search) =>
    search.todo.toLowerCase().includes(search_todo.value.toLowerCase())
  );
});

const Update = () => {
  isEditing.value = false;
  stores.todos[temp_index].todo = add_todo.value;
  add_todo.value = null;
};
const sort = () => {
  stores.Sort(priority);
  console.log(priority.value, "priority");
};
const DeleteAll = () => {
  stores.Delete_All();
};

const onDragging = (ev) => {
  console.log(ev);
  ev.dataTransfer.setData("text", ev.target.id);
};
const allowDrop = (ev) => {
  ev.preventDefault();
};
const drag = (ev) => {
  ev.dataTransfer.setData("text", ev.target.id);
};
const drop = (ev) => {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  console.log(data);
  ev.target.appendChild(document.getElementById(data));
};
</script>
