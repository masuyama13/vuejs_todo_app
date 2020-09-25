const app = new Vue({
  el: '#app',
  data: {
    newTask: '',
    tasks: []
  },
  mounted () {
    if (localStorage.getItem('tasks')) {
      try {
        this.tasks = JSON.parse(localStorage.getItem('tasks'))
      } catch (e) {
        localStorage.removeItem('tasks')
      }
    }
  },
  methods: {
    addTask () {
      if (!this.newTask) return
      const todo = this.newTask
      this.tasks.push(todo)
      this.newTask = ''
      this.saveTasks()
    },
    deleteTask (index) {
      this.tasks.splice(index, 1)
      this.saveTasks()
    },
    saveTasks () {
      const parsed = JSON.stringify(this.tasks)
      localStorage.setItem('tasks', parsed)
    }
  }
})
