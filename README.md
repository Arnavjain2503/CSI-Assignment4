# 🚀 CSI-Assignment 4: Express Advanced Server

A modular and professional-grade **Express.js web server** with clean routing, middleware, form handling, and multiple API endpoints. Built to demonstrate **industry-level backend architecture** and stand out in competitive internship assignments.

---

## 📁 Project Structure
```
Web-Server/
├── index.js # Main server entry point
├── .env # Environment variables
├── package.json # Project metadata & dependencies
├── public/
│ └── index.html # Homepage UI with form and route links
├── routes/
│ └── mainRoutes.js # Modular API routes
├── middleware/
│ ├── logger.js # Request logger middleware
│ └── errorHandler.js # Centralized error handler
```

---

## ✅ Features

- 🌐 Serves a styled **homepage** at `/`
- 📦 Implements **modular routing** via `express.Router`
- 🧠 Includes **custom middleware** for logging and error handling
- 📬 Accepts **form POST data** to `/api/submit`
- 🧾 Returns clean **JSON responses** from API endpoints
- 🔄 Easily extendable to include **auth**, **database**, or **session support**

---

## 📌 Routes Overview

| Method | Endpoint          | Description                          |
|--------|-------------------|--------------------------------------|
| GET    | `/`               | Static homepage                      |
| GET    | `/api/about`      | Returns basic about info (JSON)      |
| GET    | `/api/contact`    | Returns contact info (JSON)          |
| POST   | `/api/submit`     | Accepts form data & returns JSON     |

---

## 🖥️ Homepage Functionality

Visit [`/`](http://localhost:3000) to:
- 🔗 Click buttons that link to `/api/about` and `/api/contact`
- 📨 Submit a form with Name & Email to `/api/submit`

---

## 🧪 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/express-advanced-server.git
cd express-advanced-server
```
2️⃣ Install Dependencies
```bash
npm install
```
3️⃣ Run the Server
```bash
npm start
```
4️⃣ Access in Browser
🔹 http://localhost:3000

🔹 http://localhost:3000/api/about

🔹 http://localhost:3000/api/contact

⚙️ Environment Variables
Create a .env file in the root:
```
PORT=3000
APP_NAME=ExpressWebApp
```
