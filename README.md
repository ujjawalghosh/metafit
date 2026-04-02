# MetaFit Web App

A Next.js application with backend APIs for handling **Contact** and **Lead** form submissions.  
This project uses **MongoDB Atlas + Mongoose** for database operations (migrated from Prisma/PostgreSQL).

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/metafit-web-app.git
cd metafit-web-app

2. Install dependencies

npm install
# or
yarn install
# or
pnpm install

3. Environment variables

Create a .env file in the root directory with the following values:
MONGO_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority"
JWT_SECRET="your-strong-secret-key"
PORT=3000


⚠️ Make sure to also set these variables in your Vercel dashboard when deploying.

4. Run the development server

npm run dev
Open http://localhost:3000 in your browser.

📂 Project Structure
- lib/db.ts → MongoDB connection setup using Mongoose
- models/Contact.ts → Mongoose schema for Contact form submissions
- models/Lead.ts → Mongoose schema for Lead form submissions
- app/api/contact/route.ts → API route to handle Contact form POST requests
- app/api/lead/route.ts → API route to handle Lead form POST requests

🛠️ Tech Stack
- Frontend: Next.js (App Router)
- Backend: Node.js + Mongoose
- Database: MongoDB Atlas
- Deployment: Vercel

📬 API Endpoints
Contact Form
- POST /api/contact
Saves a new contact submission to MongoDB.
Lead Form
- POST /api/lead
Saves a new lead submission to MongoDB.

🧪 Testing
You can test the API routes using Postman or cURL:
# Contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","details":"Interested in services"}'

# Lead form
curl -X POST http://localhost:3000/api/lead \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Jane","lastName":"Smith","email":"jane@example.com","phone":"1234567890","gender":"Female","weightGoal":"Lose 5kg"}'



📖 Learn More
- Next.js Documentation
- Mongoose Documentation
- MongoDB Atlas

🚀 Deployment
The easiest way to deploy your Next.js app is via Vercel.
Make sure to set environment variables (MONGO_URL, JWT_SECRET, PORT) in the Vercel dashboard.


---
