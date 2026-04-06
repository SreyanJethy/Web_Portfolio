// src/data/blogs.ts
// ─────────────────────────────────────────────────────────────
// Single source of truth for all blog posts.
// Structure mirrors a MongoDB document — swap this array for
// a Mongoose/Prisma query and nothing else in the codebase changes.
// ─────────────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;       // markdown-style plain text for now
  tags: string[];
  date: string;          // ISO 8601
  coverImage: string;
  readTime: string;
}

export const blogs: BlogPost[] = [
  {
    id: 1,
    slug: "building-scalable-rest-apis-with-express",
    title: "Building Scalable REST APIs with Node.js & Express",
    summary:
      "A backend-focused breakdown of scalable API design using Node.js and Express — covering routing, middleware, error handling, and production patterns.",
    date: "2024-03-15",
    readTime: "8 min read",
    coverImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    tags: ["Node.js", "Express", "REST API", "Backend"],
    content: `## Why API Design Matters

A well-designed REST API is the backbone of any scalable application. Poor API design leads to tight coupling, hard-to-debug errors, and systems that break under load.

## Project Structure

Organise your Express app in layers — routes, controllers, services, and models. This separation of concerns makes testing and scaling straightforward.

\`\`\`javascript
// routes/users.js
const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');

router.get('/', getUsers);
router.post('/', createUser);

module.exports = router;
\`\`\`

## Middleware Pipeline

Middleware is where Express shines. Chain validation, authentication, and logging cleanly:

\`\`\`javascript
// middleware/auth.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(403).json({ error: 'Invalid token' });
  }
};
\`\`\`

## Global Error Handler

Never let unhandled errors crash your server. A single error-handling middleware catches everything:

\`\`\`javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});
\`\`\`

## Async/Await with Express

Wrap async route handlers to avoid unhandled promise rejections:

\`\`\`javascript
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.get('/users', asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json({ success: true, data: users });
}));
\`\`\`

## Rate Limiting & Security

Always add rate limiting and security headers in production:

\`\`\`javascript
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
\`\`\`

## Conclusion

Scalable APIs are built on consistent patterns — layered architecture, proper middleware, global error handling, and security from day one. These fundamentals apply whether you're building a startup MVP or a production microservice.`,
  },
  {
    id: 2,
    slug: "mongodb-schema-design-for-production",
    title: "MongoDB Schema Design for Production Applications",
    summary:
      "Deep dive into MongoDB document modelling — embedding vs referencing, indexing strategies, and schema patterns that scale in real-world MERN applications.",
    date: "2024-02-20",
    readTime: "10 min read",
    coverImage:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop",
    tags: ["MongoDB", "Database", "MERN", "Schema Design"],
    content: `## The Embedding vs Referencing Decision

The most important decision in MongoDB schema design is whether to embed documents or reference them. Get this wrong and you'll fight your database at scale.

**Embed when:**
- Data is always accessed together
- Child documents have no independent lifecycle
- Array size is bounded and small

**Reference when:**
- Data is accessed independently
- Many-to-many relationships exist
- Documents grow unboundedly

## Embedding Example — Blog Post with Comments

\`\`\`javascript
// Embedded — good for small, bounded comment counts
{
  _id: ObjectId("..."),
  title: "My Post",
  content: "...",
  comments: [
    { author: "Alice", text: "Great post!", createdAt: ISODate("...") },
    { author: "Bob",   text: "Thanks!",     createdAt: ISODate("...") }
  ]
}
\`\`\`

## Referencing Example — Users and Orders

\`\`\`javascript
// User document
{ _id: ObjectId("u1"), name: "Sreyan", email: "s@example.com" }

// Order document — references user
{ _id: ObjectId("o1"), userId: ObjectId("u1"), total: 299, items: [...] }
\`\`\`

## Mongoose Schema with Validation

\`\`\`javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:      { type: String, required: true, trim: true },
  email:     { type: String, required: true, unique: true, lowercase: true },
  role:      { type: String, enum: ['user', 'admin'], default: 'user' },
  createdAt: { type: Date, default: Date.now },
});

// Index for fast email lookups
userSchema.index({ email: 1 });

module.exports = mongoose.model('User', userSchema);
\`\`\`

## Indexing Strategy

Indexes are the single biggest performance lever in MongoDB:

\`\`\`javascript
// Compound index for common query pattern
db.orders.createIndex({ userId: 1, createdAt: -1 });

// Text index for search
db.posts.createIndex({ title: 'text', content: 'text' });

// Explain a query to verify index usage
db.orders.find({ userId: 'u1' }).explain('executionStats');
\`\`\`

## Aggregation Pipeline

For complex analytics, the aggregation pipeline is more powerful than SQL JOINs:

\`\`\`javascript
const result = await Order.aggregate([
  { $match: { status: 'completed' } },
  { $group: { _id: '$userId', totalSpent: { $sum: '$total' } } },
  { $sort: { totalSpent: -1 } },
  { $limit: 10 },
]);
\`\`\`

## Conclusion

Good MongoDB schema design starts with your access patterns, not your data structure. Model for how you query, index what you filter, and embed only what belongs together. These principles will carry your MERN application from prototype to production.`,
  },
  {
    id: 3,
    slug: "python-fastapi-backend-guide",
    title: "Building Production APIs with Python & FastAPI",
    summary:
      "How to build high-performance, type-safe REST APIs with Python and FastAPI — covering Pydantic models, async endpoints, dependency injection, and deployment.",
    date: "2024-01-10",
    readTime: "9 min read",
    coverImage:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    tags: ["Python", "FastAPI", "Backend", "REST API"],
    content: `## Why FastAPI?

FastAPI is the fastest-growing Python web framework for good reason — automatic OpenAPI docs, native async support, and Pydantic type validation out of the box. It's production-ready from day one.

## Project Setup

\`\`\`bash
pip install fastapi uvicorn[standard] pydantic python-dotenv
\`\`\`

## Pydantic Models — Type Safety at the Boundary

\`\`\`python
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    role: Optional[str] = "user"

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    created_at: datetime

    class Config:
        from_attributes = True
\`\`\`

## Async Endpoints

\`\`\`python
from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.ext.asyncio import AsyncSession

app = FastAPI(title="Portfolio API", version="1.0.0")

@app.get("/users/{user_id}", response_model=UserResponse)
async def get_user(user_id: int, db: AsyncSession = Depends(get_db)):
    user = await db.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
\`\`\`

## Dependency Injection — Auth Middleware

\`\`\`python
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import jwt

security = HTTPBearer()

async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security)
):
    try:
        payload = jwt.decode(
            credentials.credentials,
            settings.SECRET_KEY,
            algorithms=["HS256"]
        )
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")

@app.get("/me", response_model=UserResponse)
async def get_me(current_user = Depends(get_current_user)):
    return current_user
\`\`\`

## Background Tasks

\`\`\`python
from fastapi import BackgroundTasks

def send_welcome_email(email: str):
    # send email logic
    pass

@app.post("/register")
async def register(user: UserCreate, background_tasks: BackgroundTasks):
    new_user = await create_user(user)
    background_tasks.add_task(send_welcome_email, user.email)
    return {"message": "Registered successfully"}
\`\`\`

## Deployment with Docker

\`\`\`dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
\`\`\`

## Conclusion

FastAPI gives Python developers a production-grade API framework with minimal boilerplate. Combined with async SQLAlchemy and Pydantic, it's a serious alternative to Node.js for backend services — and often faster.`,
  },
  {
    id: 4,
    slug: "jwt-authentication-mern-stack",
    title: "JWT Authentication in a MERN Stack Application",
    summary:
      "A complete walkthrough of implementing secure JWT-based authentication in a MERN stack app — access tokens, refresh tokens, protected routes, and security best practices.",
    date: "2023-12-05",
    readTime: "12 min read",
    coverImage:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    tags: ["JWT", "Authentication", "MERN", "Security", "Node.js"],
    content: `## The Authentication Flow

A secure JWT auth system has two tokens — a short-lived access token and a long-lived refresh token. The access token authenticates requests; the refresh token silently renews it.

\`\`\`
Login → [access_token (15min), refresh_token (7d)]
Request → Authorization: Bearer <access_token>
Expired → POST /auth/refresh → new access_token
Logout → invalidate refresh_token
\`\`\`

## Backend — Generating Tokens

\`\`\`javascript
const jwt = require('jsonwebtoken');

const generateTokens = (userId) => {
  const accessToken = jwt.sign(
    { userId },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: '15m' }
  );

  const refreshToken = jwt.sign(
    { userId },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );

  return { accessToken, refreshToken };
};
\`\`\`

## Login Route

\`\`\`javascript
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const { accessToken, refreshToken } = generateTokens(user._id);

  // Store refresh token hash in DB
  await user.updateOne({ refreshToken: await bcrypt.hash(refreshToken, 10) });

  // Send refresh token as httpOnly cookie
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({ accessToken, user: { id: user._id, name: user.name } });
});
\`\`\`

## Auth Middleware

\`\`\`javascript
const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.user = await User.findById(decoded.userId).select('-password');
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    res.status(403).json({ error: 'Invalid token' });
  }
};
\`\`\`

## Frontend — Axios Interceptor

\`\`\`javascript
// Automatically refresh expired tokens
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true;
      const { data } = await axios.post('/auth/refresh');
      localStorage.setItem('accessToken', data.accessToken);
      error.config.headers.Authorization = \`Bearer \${data.accessToken}\`;
      return api(error.config);
    }
    return Promise.reject(error);
  }
);
\`\`\`

## Security Checklist

- Store access tokens in memory (not localStorage)
- Store refresh tokens in httpOnly cookies
- Hash refresh tokens before storing in DB
- Implement token rotation on refresh
- Add rate limiting to auth endpoints
- Use HTTPS in production

## Conclusion

JWT authentication done right is secure and scalable. The key is separating concerns — short-lived access tokens for API calls, httpOnly cookies for refresh tokens, and always validating on the server.`,
  },
];
