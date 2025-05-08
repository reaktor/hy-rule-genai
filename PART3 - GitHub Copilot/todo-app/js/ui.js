import TaskStore from './store.js';

const taskStore = new TaskStore();

class TaskUI {
    constructor() {
        this.taskForm = document.getElementById('task-form');
        this.taskInput = document.getElementById('task-input');
        this.taskList = document.getElementById('task-list');
        this.filter = 'all'; // Default filter

        this.bindEvents();
        this.renderTasks();
    }

    bindEvents() {
        this.taskForm.addEventListener('submit', (e) => this.handleSubmit(e));

        // Bind filter buttons
        document.getElementById('filter-all').addEventListener('click', () => this.setFilter('all'));
        document.getElementById('filter-not-done').addEventListener('click', () => this.setFilter('not-done'));
        document.getElementById('filter-completed').addEventListener('click', () => this.setFilter('completed'));
    }

    setFilter(filter) {
        this.filter = filter;
        this.updateFilterButtons();
        this.renderTasks();
    }

    updateFilterButtons() {
        document.querySelectorAll('.filter-button').forEach(button => {
            button.classList.remove('active');
        });
        document.getElementById(`filter-${this.filter}`).classList.add('active');
    }

    handleSubmit(e) {
        e.preventDefault();
        const title = this.taskInput.value.trim();
        
        // Reject tasks that only contain numbers
        if (!title || /^\d+$/.test(title)) {
            alert("Task cannot be empty or contain only numbers.");
            return;
        }

        if (title) {
            const task = taskStore.addTask(title);
            this.renderTask(task);
            this.taskInput.value = '';
        }
    }

    renderTasks() {
        this.taskList.innerHTML = '';
        taskStore.getAllTasks().filter(task => {
            if (this.filter === 'not-done') return !task.completed;
            if (this.filter === 'completed') return task.completed;
            return true; // 'all' filter
        }).forEach(task => this.renderTask(task));
    }

    renderTask(task) {
        const taskElement = document.createElement('div');
        taskElement.className = 'task-item';
        taskElement.dataset.id = task.id;
        
        taskElement.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
            <span class="task-title ${task.completed ? 'completed' : ''}">${task.title}</span>
            <button class="task-delete">Delete</button>
        `;

        // Bind task-specific events
        const checkbox = taskElement.querySelector('.task-checkbox');
        checkbox.addEventListener('change', () => {
            taskStore.toggleTask(task.id);
            this.renderTasks();
        });

        const deleteButton = taskElement.querySelector('.task-delete');
        deleteButton.addEventListener('click', () => {
            taskStore.deleteTask(task.id);
            this.renderTasks();
        });

        this.taskList.appendChild(taskElement);
    }
}

// Initialize UI when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TaskUI();
});

export default TaskUI;
