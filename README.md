# CSI-Assignment4
🚀 Express Advanced Server
A modular and professional-grade Express.js web server with clean routing, middleware, form handling, and multiple API endpoints. Built to demonstrate industry-level backend architecture and stand out in competitive internship assignments.

📁 Project Structure
bash
Copy
Edit
Web-Server/
├── index.js                    # Main server entry
├── .env                        # Environment variables
├── package.json                # Project metadata & dependencies
├── public/
│   └── index.html              # Homepage UI with form and links
├── routes/
│   └── mainRoutes.js           # Modular API routes
├── middleware/
│   ├── logger.js               # Custom request logger middleware
│   └── errorHandler.js         # Centralized error handler
✅ Features
🌐 Serves a styled homepage at /

📦 Implements modular routing via express.Router

🧠 Includes middleware for logging and error handling

📬 Accepts form POST data to /api/submit

🧾 Returns clean JSON responses from API endpoints

🔄 Easily extendable to add auth, database, or sessions

📌 Routes Overview
Method	Endpoint	Description
GET	/	Static homepage
GET	/api/about	Returns basic about info (JSON)
GET	/api/contact	Returns contact info (JSON)
POST	/api/submit	Accepts form data & responds in JSON

🖥️ Homepage Functionality
Access the root URL (/) to:

Click buttons to navigate to /api/about and /api/contact

Submit name & email to /api/submit via a form

🧪 Quick Start
Clone or Download
```
git clone https://github.com/your-username/express-advanced-server.git
cd express-advanced-server
```
Install Dependencies
```
npm install
Run the Server
```
npm start
Access in Browser

http://localhost:3000

http://localhost:3000/api/about

http://localhost:3000/api/contact
```
⚙️ Environment Variables
.env file:

env
Copy
Edit
PORT=3000
APP_NAME=ExpressAdvancedApp
🛠️ Tech Stack
Node.js

Express.js

HTML/CSS

dotenv

Modular JS structure

