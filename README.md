# React To-Do App 📝

A fully functional and interactive To-Do List application built with React.  
This project allows users to **add, edit, delete, and manage tasks** with different priority levels, demonstrating modern React practices and clean state management.

---

## 🚀 Features
- Add new tasks with unique IDs
- Edit existing tasks (task name and priority)
- Delete tasks
- Mark tasks as completed
- Filter tasks: All, Active, Completed
- Dynamic UI updates using React state
- Priority indicators: High, Low, None

---

## 🛠 Tech Stack
- **React** (Functional Components + Hooks)
- **JavaScript (ES6+)**
- **CSS / Tailwind CSS** (for styling)
- Focus on **immutability** and **state management best practices**

---

## 📂 Project Structure

# Project Structure

to-do_list/
├── public/
│ └── vite.svg
├── src/
│ ├── assets/
│ │ └── react.svg
│ ├── components/
│ │ ├── Button.jsx
│ │ ├── DisplayTask.jsx
│ │ ├── EditingSection.jsx
│ │ ├── Header.jsx
│ │ ├── ListTask.jsx
│ │ ├── Task.jsx
│ │ └── TodoInput.jsx
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── README.md

---

## 📦 Installation

1. **Clone the repository**


git clone https://github.com/Chiran36/todo-react.git
Navigate to the project folder

2. **Installing required dependencies in the project folder**

 ```bash
cd todo-react


3. **Intalling npm**

npm install


4.**running the project**

npm run dev.
Open in your browser at http://localhost:5173/ (or the port shown in terminal).
 ```

---

## 💡 Key Learnings from This Project


1. Arrow Functions & Object Return: ()=>{ ...obj } is treated as a block, not an object;
   use parentheses: () => ({ ...obj })  for an object.

2. Component-first Development: Build a static UI first before adding logic for easier workflow.

3. State Management Best Practices:

   i.Use useState in local components first, then lift state to parent only when necessary.

   ii.Avoid calling a state setter (setState) inside another setState to prevent 
      re-rendering   issues.

   iii.Component Organization: Separate components into different files for clarity
       and maintainability.

   iv.Immutability in React: Always clone arrays and objects when updating state to follow React’s immutability rules.

