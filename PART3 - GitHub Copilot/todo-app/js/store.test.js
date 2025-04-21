let mockStorage = {};

// Create localStorage mock
const localStorageMock = {
    getItem: jest.fn(key => mockStorage[key] || null),
    setItem: jest.fn((key, value) => {
        mockStorage[key] = value;
    }),
    removeItem: jest.fn(key => {
        delete mockStorage[key];
    }),
    clear: jest.fn(() => {
        mockStorage = {};
    })
};

// Mock localStorage globally before importing TaskStore
beforeAll(() => {
    global.localStorage = localStorageMock;
});

import TaskStore from './store.js';

describe('TaskStore', () => {
  let taskStore;

  beforeEach(() => {
    // Reset mock storage and create new store
    mockStorage = {};
    taskStore = new TaskStore();
    // Explicitly reset tasks array
    taskStore.tasks = [];
  });

  afterEach(() => {
    // Clean up after each test
    taskStore.tasks = [];
    mockStorage = {};
  });

  test('should add a task', () => {
    const task = taskStore.addTask('Test Task');
    expect(task.title).toBe('Test Task');
    expect(task.completed).toBe(false);
    expect(task.id).toBeDefined();
  });

  test('should get all tasks', () => {
    taskStore.addTask('Task 1');
    taskStore.addTask('Task 2');
    const tasks = taskStore.getAllTasks();
    expect(tasks.length).toBe(2);
  });

  test('should toggle task completion', () => {
    const task = taskStore.addTask('Test Task');
    taskStore.toggleTask(task.id);
    const tasks = taskStore.getAllTasks();
    const updatedTask = tasks.find(t => t.id === task.id);
    expect(updatedTask.completed).toBe(true);
  });

  test('should delete a task', () => {
    const task = taskStore.addTask('Test Task');
    const result = taskStore.deleteTask(task.id);
    expect(result).toBe(true);
    const remainingTasks = taskStore.getAllTasks();
    expect(remainingTasks.some(t => t.id === task.id)).toBe(false);
  });
});