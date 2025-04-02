class TaskUI {
    constructor() {
        this.taskForm = document.getElementById('task-form');
        this.taskInput = document.getElementById('task-input');
        this.taskList = document.getElementById('task-list');
        
        this.bindEvents();
        this.renderTasks();
    }

    bindEvents() {
        this.taskForm.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        const title = this.taskInput.value.trim();
        
        if (title) {
            const task = taskStore.addTask(title);
            this.renderTask(task);
            this.taskInput.value = '';
        }
    }

    renderTasks() {
        this.taskList.innerHTML = '';
        taskStore.getAllTasks().forEach(task => this.renderTask(task));
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
