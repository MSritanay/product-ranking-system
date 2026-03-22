# 🏆 Product Ranking System (MERN Stack)

A full-stack web application that allows users to add products, rate them, and automatically ranks them based on average ratings.

---

## 🚀 Features

- Add new products
- Rate products (1–5 ⭐)
- Automatic ranking based on ratings
- Dynamic UI updates
- Top 3 products highlighted 🥇🥈🥉
- Clean and responsive UI

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- Axios
- CSS (inline styling)

### Backend:
- Node.js
- Express.js

### Database:
- MongoDB (Atlas)

---

## 📂 Project Structure

product-ranking-system/

│

├── backend/

│ ├── models/

│ ├── server.js

│

├── frontend/

│ ├── src/

│ ├── App.js

└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/product-ranking-system.git
cd product-ranking-system
2️⃣ Backend Setup
cd backend
npm install
node server.js
3️⃣ Frontend Setup
cd frontend
npm install
npm start
🌐 API Endpoints
Method	Endpoint	    Description
POST	  /add-product	Add new product
POST	  /rate/:id	    Rate product
GET	    /products	    Get ranked products
```
---
💡 Future Improvements
- User authentication (JWT)
- Admin dashboard
- Charts & analytics
- Real-time updates (Socket.io)
