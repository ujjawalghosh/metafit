# Fix Get Started Form Submission (Keeping Mongoose)

## ✅ Files Analyzed
- `app/get-started/page.tsx` ✓ Correct
- `components/form/GetStartedForm.tsx` ✓ Form logic good
- `app/api/lead/route.ts` ✓ API expects correct fields
- `models/Lead.ts` ✓ Schema matches
- `lib/db.ts` ✓ Robust connection

## 🔍 Diagnosis
Form submits to `/api/lead` → calls `connectDB()` → saves Lead.
**Likely Issue**: MongoDB connection failure (env vars, Atlas whitelist, not running).

## 📋 Steps

### 1. Test MongoDB Connection ❌ **FAILED**

**Output:**
```
MONGO_URI: ✓ Present (masked)
💥 Connection failed: querySrv ECONNREFUSED _mongodb._tcp.cluster0.mofqo2a.mongodb.net  
🔥 Firewall/Network - check Atlas IP whitelist
```

**✅ Atlas IP Fixed:** `0.0.0.0/0` added ✓

### 1. Connection Test ❌ **STILL FAILING** (5+ attempts)

**Latest:**
```
💥 querySrv ECONNREFUSED cluster0.mofqo2a.mongodb.net
🔥 Atlas whitelist NOT working
```

**Troubleshoot:**
1. **Atlas Dashboard** → Project → cluster0 → Network Access → Verify `0.0.0.0/0` **Status: Active**
2. **Correct URI?** Share masked MONGO_URI from .env (hide pass): `mongodb+srv://user:****@cluster0.mofqo2a...`
3. **Alternative:** Create **local MongoDB** (Docker/MongoDB Community) - fastest fix
4. **Switch to Prisma/PostgreSQL** - no Atlas hassle

### 2. Test Live Error `[Run now]`
```
npm run dev
```
Submit form → Share:
- Network: /api/lead Status + Response JSON
- Terminal: lib/db.ts retry logs + final error

**Quick Fix Options:**
A. Local Mongo: `docker run -d -p 27017:27017 --name mongo mongo`
B. Fix Atlas URI/whitelist
C. Migrate Prisma (PG)


```bash
node test-mongo.js
```
Expected: ✅ Connection successful + databases list

### 2. Test Form Submission `[Pending]`
```bash
npm run dev
```
- Visit http://localhost:3000/get-started
- Fill: Weight Goal → Gender → Details → Submit
- Check:
  - **Network tab**: /api/lead → 201 Created?
  - **Console**: DB connection logs? Errors?
  - **Form**: Success message shows?

### 3. Fix Connection `[Conditional]`
If test fails:
- Add/update `.env.local`:
```
DATABASE_URL=mongodb+srv://username:password@cluster.xxxxx.mongodb.net/yourdb?retryWrites=true&w=majority
```
- Atlas: Network Access → Add 0.0.0.0/0 (temp for dev)
- Rerun step 1

### 4. Minor Code Improvements `[Pending after tests]`
```
app/api/lead/route.ts:
- Add more logging
components/form/GetStartedForm.tsx:
- Add Content-Type header
- Better error display (no alert)
```

### 5. Verify `[Pending]`
- Multiple successful submissions
- Data visible in MongoDB Compass
