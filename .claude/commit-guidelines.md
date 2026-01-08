# Commit Message Guidelines for Claude

## STRICT RULES

1. **NEVER expose implementation details**
   - ❌ NO: "Add XSS protection with DOMPurify"
   - ✅ YES: "Add input sanitization"

2. **NEVER mention specific technologies in security context**
   - ❌ NO: "Add RLS policies with Supabase"
   - ✅ YES: "Add database security"

3. **Keep commits SHORT and GENERIC**
   - Maximum 3 lines for description
   - Focus on WHAT changed, not HOW

4. **NEVER expose:**
   - Security mechanisms
   - Database schemas
   - API implementations
   - Infrastructure details
   - Internal architecture

5. **Example of acceptable commits:**
   ```
   Add analytics feature

   Improve article summaries

   Update UI components

   Fix navigation bug
   ```

6. **FORBIDDEN words in commits:**
   - RLS, Row Level Security
   - XSS, CSRF, SQL injection
   - DOMPurify, sanitization
   - Supabase, PostgreSQL, database schema
   - API keys, secrets, credentials
   - Security policy, GDPR compliance details

## When creating commits:

READ THIS FILE FIRST, then write a SHORT, GENERIC commit message.

Author: ThePhoenixAgency
