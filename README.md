# Grocery Bud 🛒

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Bundler-purple?logo=vite)
![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-green?logo=netlify)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

A sleek and intuitive grocery list manager built with React. Perfect for keeping track of your shopping items with persistent storage and a clean, responsive interface. Built to practice React state management, component architecture, and modern CSS techniques.

## 🚀 Live Demo

**View Live on Netlify:**  
[Grocery Bud Demo ](https://grocery-bud-gpdev.netlify.app/)

## 🎯 Problem This App Solves:

- Provides a simple way to manage grocery shopping lists
- Eliminates the need for paper lists that can be lost or forgotten
- Offers item completion tracking to mark purchased items
- Includes persistent storage so your list survives browser refreshes
- Saves time and reduces shopping stress with organized item management

👥 Perfect For:

- 🛒 Everyday shoppers organizing their grocery trips
- 👨‍👩‍👧‍👦 Families coordinating shopping needs
- 📋 Meal planners tracking ingredients
- 📱 Anyone who wants a digital alternative to paper shopping lists

## 🎓 Key Learning Outcomes

- **State Management:** Developed proficiency with the useState hook to manage complex state (arrays of objects) and implement full CRUD (Create, Read, Update, Delete) operations.
- **Component Architecture:** Designed a clear component hierarchy (App → Items → SingleItem) and established effective communication through props for passing state and callback functions.
- **State Management Strategy:** Applied the "lifting state up" pattern by refactoring component state to the application level, ensuring data consistency and simplifying persistence.
- **Form Handling:** Implemented controlled input components managed by React state, creating a predictable data flow and debugging experience.
- **Data Persistence:** Integrated the browser's Local Storage API to maintain application state across sessions, enhancing user experience with persistent data.
- **User Experience:** Enhanced UI/UX by implementing react-toastify for actionable user feedback during add, edit, and delete operations.
- **Build Tools & Libraries:** Gained practical experience with modern frontend development tools including Vite, Nanoid for unique ID generation, and dynamic CSS techniques.

## ✨ Features

- **Add Items** - Quickly add new grocery items to your list
- **Mark Complete** - Check off items as you shop with visual strikethrough
- **Remove Items** - Delete items you no longer need
- **Persistent Storage** - Your list saves automatically and persists between sessions
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **Visual Feedback** - Toast notifications for actions and errors
- **Clean UI** - Modern, minimalist interface focused on usability

## 📸 Project Preview

<table align="center">
  <tr>
    <td align="center"><strong>💻 Desktop View</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="./src/assets/demo/Web-Screenshot.png" width="100%" alt="Desktop View showing Color Palette Generator"/></td>
  </tr>
  
  <tr>
    <td align="center"><strong>📱 Mobile View</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="./src/assets/demo/Mobile-Screenshot.png" height="400" alt="Mobile View showing responsive design"/></td>
  </tr>
  <tr>
    <td align="center"><em>Mobile responsive view </em></td>
  </tr>
</table>

## 🛠️ Built With

| Tool / Library         | Purpose                      |
| ---------------------- | ---------------------------- |
| ⚡ **Vite**            | Fast build tool & dev server |
| ⚛️ **React 19**        | Component-based UI           |
| 📋 **React-Toastify**  | Notification system          |
| 💾 Local Storage       | Persistent data storage      |
| 🔑 **Nanoid**          | Unique ID generation         |
| 🎨 **CSS3**            | Flexbox, Grid, animations    |
| 📜 **JavaScript ES6+** | Modern language features     |

## 💡 Implemented Concepts

### State Management

- **useState Hook** - Managing grocery items state
- **Component Communication** - Parent-child data flow through props
- **Lifting State Up** - Global state management for item completion

### Component Architecture

- **Modular Components** - Separated Form, Items, and SingleItem components
- **Reusable Components** - SingleItem component for consistent rendering
- **Conditional Rendering** - Dynamic styling based on completion status

### User Experience

- **Form Validation** - Prevents empty submissions with error feedback
- **Visual Feedback** - Toast notifications for user actions
- **Accessibility** - Semantic HTML and proper form labels
- **Persistence** - Local storage integration for data retention

## 🎨 Design

Figma design provided by the course instructor.
[View Figma Design](https://www.figma.com/file/8rXGl68NoEmAhHpcV7aB5o/Grocery-bud?node-id=0%3A1&t=IMjjwDExGWpXdpQL-1)

## 📦 Project Structure

```text
src/
├── components/
│   ├── Form.jsx
│   ├── Items.jsx
│   └── SingleItem.jsx
├── App.jsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.0.0
- **npm** or **yarn** package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/pro804/Grocery-Bud.git
```

2. Navigate to the project directory

```bash
cd Grocery-Bud
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open http://localhost:5173 to view it in the browser.

## 🔧 Available Scripts

- `npm run dev` — Runs the development server (Vite)
- `npm run build` — Builds the app for production
- `npm run preview` — Previews the production build locally

## 📄 License

This project was created for educational purposes as part of a React learning journey.
This project is licensed under the MIT License.
See the [LICENSE](LICENSE) file for details.
