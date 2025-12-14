FitPlanHub is a MERN stack fitness platform where trainers can create workout plans and users can subscribe to them, follow trainers, and access premium content based on subscription status.
This project demonstrates authentication, role-based access control, CRUD operations, subscriptions, and follow/unfollow functionality.

🛠 Tech Stack
Frontend

React (Vite)
Tailwind CSS
Axios
React Router DOM

Backend

Node.js
Express.js
MongoDB Atlas
Mongoose
JWT Authentication
bcrypt

⚙️ Prerequisites

Make sure you have installed:
Node.js (v16+ recommended)
MongoDB Atlas account
npm

🔑 Environment Variables
Backend .env

Create a .env file inside backend/

PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key


Example MongoDB URI:
mongodb+srv://<username>:<password>@cluster0.mongodb.net/fitplanhub

▶️ How to Run the Project
1️⃣ Clone the Repository
git clone https://github.com/your-username/fitplanhub.git
cd fitplanhub

2️⃣ Backend Setup
cd backend
npm install
npm run dev


Backend will run at:

http://localhost:5000

3️⃣ Frontend Setup

Open a new terminal:

cd frontend
npm install
npm run dev


Frontend will run at:

http://localhost:5173
