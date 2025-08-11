# Angular 19 Learning Plan: Todo App

This document outlines the steps to learn Angular 19 by building a Todo application that interacts with a local Python API running at `http://localhost:8000`.

## Learning Objectives

*   Understand the fundamentals of Angular components, templates, and data binding.
*   Learn how to create and use Angular services to interact with a REST API.
*   Use Angular's HttpClient to make HTTP requests to the Python backend.
*   Manage application state for the Todo list.
*   Implement basic routing for different views (e.g., all tasks, completed tasks).
*   Style the application using a modern CSS framework.

## Project Setup

1.  **Install Angular CLI:**
    ```bash
    npm install -g @angular/cli
    ```

2.  **Create a new Angular application:**
    ```bash
    ng new todo-app --directory ./
    ```

3.  **Run the development server:**
    ```bash
    ng serve
    ```

## Development Steps

1.  **Create a `Todo` model:** Define a TypeScript interface for the `Todo` object.
2.  **Create a `Todo` component:** This component will display a single todo item.
3.  **Create a `Todo-list` component:** This component will display a list of todo items.
4.  **Create a `Todo-service`:** This service will handle the communication with the Python API.
    *   Implement methods for:
        *   `getTodos()`: Fetch all todos.
        *   `addTodo()`: Add a new todo.
        *   `updateTodo()`: Update an existing todo.
        *   `deleteTodo()`: Delete a todo.
5.  **Integrate the service:** Use the `Todo-service` in the `Todo-list` component to manage todos.
6.  **Implement routing:** Create routes for different views of the todo list.
7.  **Add styling:** Use a CSS framework like Angular Material or Bootstrap to style the application.
