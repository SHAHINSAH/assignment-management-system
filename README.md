# 📘 Assignment Management System

A full-stack web application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) to manage users and assignment topics. This project was developed for a technical round assessment.



### 🖥️ Frontend
- **React.js (Vite)**
- **Redux Toolkit** – Global state management
- **Tailwind CSS** – For styling and responsive design
- **React Router DOM** – Client-side routing
- **Axios** – API communication

### 🔙 Backend
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **bcryptjs**
- **dotenv**
- **CORS**

---

## ⚙️ Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/SHAHINSAH/assignment-management-system.git
cd assignment-management-system/server
```

2. **Install Dependencies**

```bash
npm install
```

3. **Create .env File**

Add the following to a `.env` file in the `server` directory:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. **Run the Server**

```bash
npm start
```

Your server will start on `http://localhost:5000`

---

## 🔐 API Endpoints

### Authentication Routes

- `POST /api/auth/register` – Register new users  
- `POST /api/auth/login` – Login existing users  

### Topic Routes (Require Auth)

- `GET /api/topics` – Fetch all topics  
- `POST /api/topics` – Create a topic  
- `PUT /api/topics/:id` – Update topic by ID  
- `DELETE /api/topics/:id` – Delete topic by ID  

🔑 Use the token in request headers:

```
Authorization: Bearer <your_token>
```

---

## 📌 Notes

- The project uses JWT to secure topic routes.
- Passwords are hashed using `bcryptjs`.
- MongoDB connection is handled through Mongoose.

---

## 👨‍💻 Author

**Shahinsah Kumar**  
GitHub: [SHAHINSAH](https://github.com/SHAHINSAH)

