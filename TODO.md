# Fix Vercel EROFS Error - Remove JSON Fallbacks, Use MongoDB Only

## Steps (Approved MongoDB Plan)

- [ ] **Step 1**: Update `.gitignore` to ignore data/*.json
- [x] **Step 3**: Edit `app/api/contact/route.ts` - JSON append (file upload kept)
- [x] **Step 3**: Edit `app/api/contact/route.ts` - Remove JSON read/write blocks
- [x] **Step 4**: Edit `app/api/contacts/route.ts` - Replace JSON read with MongoDB `Contact.find()`
- [x] **Step 5**: Edit `app/api/lead/route.ts` - Replace JSON with MongoDB `Lead.create()`
- [ ] **Step 6**: Test locally (`npm run dev`)
- [ ] **Step 7**: Build & test prod (`npm run build && npm run start`)
- [ ] **Step 8**: Deploy to Vercel with `DATABASE_URL` env var set
- [ ] **Step 9**: Verify forms work on Vercel, check Atlas data

**Current Progress**: Code edits complete. Testing in progress (npm run dev running on port 3001).

**Next**: Test contact/lead forms → check Atlas.

**Vercel Setup Reminder**:
- Add `DATABASE_URL` = `mongodb+srv://username:pass@cluster...`
- Atlas: Network Access → 0.0.0.0/0
