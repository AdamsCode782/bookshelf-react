# 📚 BookShelf
*A modern React app for discovering, saving, and tracking books.*

---

## 🖥️ Live Demo
👉 [View the Demo](https://demo .com)  

---

## ✨ Overview
**BookShelf** is a responsive web application that lets users explore books via the **Google Books API**, build a personalized reading list, and manage their saved titles — all in a clean, modern interface.  

The project demonstrates end-to-end **React + Redux Toolkit** architecture, persistent state management, and modular UI design using **Vite** and **Tailwind CSS**.  

Built with a component-driven React architecture, BookShelf has been designed as a **modern book discovery and reading list manager.**

---

## 🧠 Features
- 🔍 **Search** for books by title or author using the Google Books API  
- 🎲 **Rotating default genres** — each visit loads a random category like *Fantasy*, *Mystery*, or *Biography*  
- 💾 **Reading List management** — add, remove, and update reading status  
- 💬 **Responsive modals** for detailed book previews  
- 💻 **Dynamic footer** updates automatically when you add or remove items  
- 💾 **Persistent state** using Redux + localStorage  
- 🪶 **Modern stack:** React Router v6, Redux Toolkit, TailwindCSS, Vite  

---

## 🏗️ Tech Stack
| Category | Technologies |
|-----------|---------------|
| **Frontend Framework** | React (Vite) |
| **State Management** | Redux Toolkit |
| **Routing** | React Router v6 |
| **Styling** | Tailwind CSS |
| **Data Source** | Google Books API |
| **Persistence** | localStorage |
| **Deployment** | Vercel / Netlify (recommended) |

---

## 🧩 Project Structure
```bash
src/
 ├─ features/
 │   ├─ browse/           # Book browsing & API integration
 │   │   ├─ Browse.jsx
 │   │   └─ BookCard.jsx
 │   ├─ readinglist/      # Reading list Redux slice & components
 │   │   ├─ ReadingList.jsx
 │   │   ├─ DeleteItem.jsx
 │   │   └─ readingListSlice.js
 │   └─ user/             # Simple username state
 ├─ services/
 │   └─ googleBooksApi.js # Fetches & normalizes book data
 ├─ ui/
 │   ├─ Header.jsx
 │   ├─ Modal.jsx
 │   ├─ Button.jsx
 │   ├─ ReadingListFooter.jsx
 │   └─ Home.jsx
 ├─ store.js              # Redux store configuration
 └─ main.jsx              # React entrypoint
```
## 🚀 Getting Started

### 1️⃣ Install dependencies  
Run this command in your project directory:

```bash
npm install
```

### 2️⃣ Run locally  
Start the development server:

```bash
npm run dev
```

Your app will start at:  
[http://localhost:5173](http://localhost:5173)

### 3️⃣ Build for production  
Create an optimized production build:

```bash
npm run build
```

---

## ⚙️ Environment Setup  

No API key is required — BookShelf uses the **public Google Books API** for demo purposes.

If you want to use your own Google Books API key, register one and update the fetch URL in  
`src/services/googleBooksApi.js` like this:

```js
`${GOOGLE_BOOKS_API}?q=${q}&key=YOUR_API_KEY}`
```
