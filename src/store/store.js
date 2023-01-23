import { defineStore } from "pinia";
export const Store = defineStore("todos", {
  state: () => ({
    todos: [
      { todo: "Walk", checked: false, priority: "low" },
      { todo: "Run", checked: false, priority: "high" },
      { todo: "sleep", checked: false, priority: "high" },
    ],
  }),
  getters: {
    gettodo: (state) => state.todos,
  },
  actions: {
    Add_Todo(payload) {
      this.todos.push({ todo: payload.value, checked: false, priority: "low" });
    },
    Delete_Todo(index) {
      this.todos.splice(index, 1);
    },
    Delete_All() {
      const newArray = [];
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].checked == false) {
          newArray.push(this.todos[i]);
        }
      }
      this.todos = newArray;
    },
    Sort(payload) {
      const high_priority = [];
      const low_priority = [];
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].priority == "high") {
          high_priority.push(this.todos[i]);
        }
        if (this.todos[i].priority == "low") {
          low_priority.push(this.todos[i]);
        }
      }
      if (payload.value == "High") {
        const newArray = high_priority.concat(low_priority);
        this.todos = newArray;
      }
      if (payload.value == "Low") {
        const newArray = low_priority.concat(high_priority);
        this.todos = newArray;
      }
    },
  },
});
