/**
 * @jest-environment jsdom
 */

let mockTasks = [];

// Mock the taskStore before importing UI
jest.mock('./store.js', () => {
  const mockStore = {
    getAllTasks: jest.fn(() => mockTasks),
    addTask: jest.fn((title) => {
      const task = { id: String(mockTasks.length + 1), title, completed: false };
      mockTasks.push(task);
      return task;
    }),
    toggleTask: jest.fn((id) => {
      const task = mockTasks.find(t => t.id === id);
      if (task) {
        task.completed = !task.completed;
      }
      return task;
    }),
    deleteTask: jest.fn((id) => {
      const index = mockTasks.findIndex(t => t.id === id);
      if (index !== -1) {
        mockTasks.splice(index, 1);
        return true;
      }
      return false;
    })
  };
  return {
    __esModule: true,
    default: jest.fn(() => mockStore)
  };
});

import TaskUI from './ui.js';

describe('TaskUI', () => {
  let ui;

  beforeEach(() => {
    // Reset mock tasks
    mockTasks.length = 0;
    
    // Set up DOM
    document.body.innerHTML = `
      <form id="task-form">
        <input id="task-input" type="text" />
      </form>
      <div id="task-list"></div>
      <button id="filter-all" class="filter-button">All</button>
      <button id="filter-not-done" class="filter-button">Not Done</button>
      <button id="filter-completed" class="filter-button">Completed</button>
    `;

    // Initialize UI
    ui = new TaskUI();
  });

  test('should render a task', () => {
    const task = { id: '1', title: 'Test Task', completed: false };
    mockTasks.push(task);
    ui.renderTasks();
    const taskElement = document.querySelector('.task-item');
    expect(taskElement).not.toBeNull();
    expect(taskElement.querySelector('.task-title').textContent.trim()).toBe('Test Task');
  });

  test('should update a task', () => {
    const task = { id: '1', title: 'Test Task', completed: false };
    mockTasks.push(task);
    task.title = 'Updated Task';
    ui.renderTasks();
    const taskElement = document.querySelector('.task-item');
    expect(taskElement.querySelector('.task-title').textContent.trim()).toBe('Updated Task');
  });

  test('should delete a task', () => {
    const task = { id: '1', title: 'Test Task', completed: false };
    mockTasks.push(task);
    ui.renderTasks();
    expect(document.querySelector('.task-item')).not.toBeNull();
    
    mockTasks.splice(0, 1);
    ui.renderTasks();
    expect(document.querySelector('.task-item')).toBeNull();
  });

  test('should toggle task completion', () => {
    const task = { id: '1', title: 'Test Task', completed: false };
    mockTasks.push(task);
    task.completed = true;
    ui.renderTasks();
    const taskTitle = document.querySelector('.task-item .task-title');
    expect(taskTitle.classList.contains('completed')).toBe(true);
  });
});