export default class TaskStore {
    constructor(storage) {
        this.STORAGE_KEY = 'todo-tasks';
        this.storage = storage || localStorage;
        this.tasks = this.loadTasks();
    }

    loadTasks() {
        const tasks = this.storage.getItem(this.STORAGE_KEY);
        return tasks ? JSON.parse(tasks) : [];
    }

    saveTasks() {
        this.storage.setItem(this.STORAGE_KEY, JSON.stringify(this.tasks));
    }

    addTask(title) {
        const task = {
            id: Date.now().toString(),
            title,
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        this.tasks.push(task);
        this.saveTasks();
        return task;
    }

    updateTask(id, updates) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) return null;

        this.tasks[taskIndex] = {
            ...this.tasks[taskIndex],
            ...updates,
            updatedAt: new Date().toISOString()
        };
        this.saveTasks();
        return this.tasks[taskIndex];
    }

    deleteTask(id) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) return false;
        
        this.tasks.splice(taskIndex, 1);
        this.saveTasks();
        return true;
    }

    getTask(id) {
        return this.tasks.find(task => task.id === id);
    }

    getAllTasks() {
        return [...this.tasks];
    }

    toggleTask(id) {
        const task = this.getTask(id);
        if (!task) return null;

        return this.updateTask(id, { completed: !task.completed });
    }
}
