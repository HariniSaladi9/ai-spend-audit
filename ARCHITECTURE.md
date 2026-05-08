# ARCHITECTURE.md

## System Overview

AI Spend Audit is a lightweight web application that helps users analyze their monthly AI tool subscriptions and identify potential cost savings.

It follows a simple 3-layer architecture:

1. UI Layer (Next.js + React)
2. Business Logic Layer (Audit Engine)
3. Data Layer (In-memory + optional persistence extension)

---

## Data Flow

User Input → Vendor Form → State Update → Audit Engine → Recommendations → UI Rendering

### Flow:

1. User enters vendor name + monthly spend
2. Data is stored in React state (frontend)
3. On update, `runAudit()` is triggered
4. Audit engine compares spend vs benchmark pricing
5. System generates:
   - total spend
   - potential savings
   - per-vendor recommendation
6. UI renders results instantly

---

## Why Next.js

- Fast development with file-based routing
- Built-in server/client separation
- Easy deployment (Vercel)
- Good balance of frontend + backend flexibility

---

## Why Rule-Based Audit Engine (NOT AI)

The audit logic is intentionally deterministic:

- Pricing comparison must be accurate and explainable
- Financial recommendations cannot hallucinate
- AI is only used for optional summary generation (future scope)

This ensures:
- transparency
- consistency
- trust in financial output

---

## Scalability Plan

If system scales to 10k+ audits/day:

- Move audit engine to server-side API route
- Store audits in PostgreSQL (Supabase)
- Cache benchmark pricing in Redis
- Add rate limiting per IP
- Move AI summary generation to background queue

---

## Future Enhancements

- AI-generated optimization report (LLM layer)
- Benchmark comparison across companies
- Team-based dashboards
- Export PDF reports
- Referral-based sharing system

---

## Key Design Decision

We prioritize:
- speed over complexity
- explainability over AI abstraction
- deterministic financial logic over probabilistic outputs