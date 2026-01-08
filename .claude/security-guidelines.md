# 🔒 AI-Pulse Security Guidelines for Claude Code

## Purpose
These guidelines prevent common security vulnerabilities from being introduced in AI-Pulse. Follow these rules when writing code.

---

## 1. INPUT SANITIZATION & XSS PREVENTION

### ❌ DO NOT:
- Use simple regex `.replace(/<[^>]*>/g, '')` to sanitize HTML
- Directly insert user input into `innerHTML`, `eval()`, or script content
- Trust URL query parameters without validation
- Use `Math.random()` for security-sensitive values

### ✅ DO:
- **Always use DOMPurify** for HTML sanitization:
  ```js
  const clean = DOMPurify.sanitize(userInput, { ALLOWED_TAGS: [] });
  ```
- **Escape HTML entities** after DOMPurify:
  ```js
  function htmlEscape(input) {
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
  ```
- **Validate URLs before iframe.src**:
  ```js
  function isValidHttpUrl(string) {
    try {
      const url = new URL(string);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (_) {
      return false;
    }
  }
  ```

---

## 2. CRYPTOGRAPHIC OPERATIONS

### ❌ DO NOT:
- Use `Math.random()` for session IDs, tokens, or any security value
- Generate predictable values with timestamps alone

### ✅ DO:
- Use `crypto.getRandomValues()` for random values:
  ```js
  const randomBytes = new Uint8Array(6);
  crypto.getRandomValues(randomBytes);
  const randomHex = Array.from(randomBytes)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
  ```

---

## 3. SECRET MANAGEMENT

### ❌ DO NOT:
- Hardcode emails, API keys, or credentials in code
- Expose personal data in README or comments
- Commit `.env` files or private keys

### ✅ DO:
- **Use GitHub Secrets** for:
  - `GIT_AUTHOR_EMAIL` → phoenix.project@outlook.fr
  - `LINKEDIN_CLIENT_ID`, `LINKEDIN_CLIENT_SECRET`
  - `LINKEDIN_ACCESS_TOKEN`, `LINKEDIN_USER_ID`
  - `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
- **Check .gitignore** excludes:
  - `.env*` (except .env.example)
  - `*.key`, `*.pem`
  - `**/credentials/`, `**/secrets/`

---

## 4. DEPENDENCY VERSIONS

### ❌ DO NOT:
- Use unversioned dependencies (`latest`)
- Ignore security warnings from npm audit

### ✅ DO:
- Pin versions in package.json
- Use Dependabot for automated updates
- Review CVE alerts from CodeQL

---

## 5. URL HANDLING

### ❌ DO NOT:
- Use user input directly in:
  - `window.location`
  - `iframe.src`
  - `fetch()` URLs
  - Redirect targets

### ✅ DO:
- Validate URLs with `isValidHttpUrl()` BEFORE use
- Use relative URLs when possible
- Explicitly assign only after validation:
  ```js
  let safeUrl = null;
  if (userUrl && isValidHttpUrl(userUrl)) {
    safeUrl = userUrl;
  }
  iframe.src = safeUrl; // Now safe to use
  ```

---

## 6. CODE REVIEW CHECKLIST

Before submitting any code, verify:

- [ ] No regex-only HTML sanitization (use DOMPurify)
- [ ] No hardcoded secrets or emails
- [ ] No `Math.random()` for security values
- [ ] URLs validated before iframe/redirect
- [ ] No `innerHTML` with unsanitized input
- [ ] All user input escaped with `htmlEscape()`
- [ ] No exposed personal data in comments
- [ ] `.gitignore` includes all sensitive patterns
- [ ] Dependabot configured (2x daily updates)
- [ ] CodeQL alerts reviewed and fixed

---

## 7. KNOWN VULNERABILITIES (DO NOT REPEAT)

### Previously Fixed:
1. **Incomplete Multi-Character Sanitization** (aggregator.js:68)
   - Fixed with: DOMPurify + htmlEscape

2. **Unvalidated URL Redirection** (reader.html:496)
   - Fixed with: Explicit validation before iframe.src assignment

3. **Insecure Randomness** (tracker.js:8)
   - Fixed with: crypto.getRandomValues()

---

## 8. TOOLS & RESOURCES

- **DOMPurify**: Sanitize HTML safely
- **crypto API**: Secure random generation
- **CodeQL**: Detect XSS, injection, randomness issues
- **GitHub Secrets**: Store sensitive values
- **Dependabot**: Automate dependency updates

---

## 9. DEPLOYMENT SECURITY

### For Vercel:
- [ ] All secrets in Vercel Environment Variables
- [ ] No .env files in repo (use .env.example)
- [ ] ALLOWED_TAGS in DOMPurify explicitly set to []
- [ ] Content-Security-Policy headers configured
- [ ] CORS properly restricted

---

## Questions?

If unsure about security implications:
1. Ask this guide first
2. Check CodeQL rules
3. Consult OWASP Top 10
4. Run `npm audit`

**Remember**: Security is not a feature, it's a requirement.
