# Reflection

## 1. The hardest bug I hit this week, and how I debugged it

One of the hardest issues I faced was managing dynamic vendor form state while keeping calculations accurate. Initially, when users added or modified multiple AI tools, some values were not updating correctly in the savings calculations. The UI displayed stale totals because state updates were happening asynchronously.

My first hypothesis was that the calculation function itself was incorrect, so I reviewed the pricing logic and added console logs to inspect intermediate values. The math was actually correct. I then suspected the issue was related to React state updates and component re-render timing.

To debug further, I isolated the problem by temporarily simplifying the form structure and testing updates one field at a time. I realized some calculations were referencing outdated state snapshots instead of the latest values. Refactoring the logic into clearer update flows and recalculating values after state updates solved the issue.

This bug taught me the importance of debugging systematically instead of assuming the first visible symptom is the real cause.

---

## 2. A decision you reversed mid-week, and what made you reverse it

Initially, I planned to make the recommendation engine heavily AI-driven. My original idea was to let an LLM generate most of the optimization suggestions dynamically. However, after reviewing the assignment more carefully, I realized the instructions specifically emphasized that financial recommendations should be defensible and predictable.

I reversed this decision and switched to a primarily rule-based audit engine. Instead of relying fully on AI, I used deterministic logic for:
- pricing comparisons
- downgrade recommendations
- annual savings calculations
- plan-fit suggestions

This made the system easier to test and more transparent. I still believe AI summaries can improve user experience, but core financial logic should remain explainable.

This reversal improved both the reliability and credibility of the project.

---

## 3. What I would build in week 2 if I had it

If I had another week, I would focus on turning the project from a functional MVP into a more complete product.

The first improvement would be adding a backend database to store audit reports and captured leads. I would also implement secure shareable audit URLs with Open Graph previews to improve social sharing.

Next, I would expand the recommendation engine with benchmark comparisons such as:
- spend per developer
- company-size averages
- API usage efficiency

I would also improve personalization by combining rule-based recommendations with lightweight AI-generated summaries.

From a product perspective, I would add:
- PDF exports
- email delivery of reports
- analytics dashboards
- better onboarding copy
- stronger mobile polish

Finally, I would spend more time validating assumptions through additional user interviews and testing with real startup users.

---

## 4. How I used AI tools during development

I used AI tools primarily for:
- debugging assistance
- brainstorming UI improvements
- TypeScript troubleshooting
- generating initial implementation ideas
- improving documentation structure

I did not rely on AI to blindly generate the entire application. I reviewed, modified, and tested generated code carefully because AI suggestions were sometimes incorrect or overly generic.

One specific example where AI was wrong involved state management recommendations for the dynamic vendor form. An AI-generated approach introduced unnecessary complexity and caused stale state issues. I caught the problem while testing calculations and rewrote the logic into a simpler and more predictable structure.

I also avoided trusting AI-generated financial reasoning without verification because pricing recommendations require consistency and accuracy.

Overall, AI significantly improved iteration speed, but human review and debugging remained essential.

---

## 5. Self-rating

### Discipline — 7/10
I maintained steady progress throughout the week and completed a deployed MVP, but time management became difficult near the deadline.

### Code Quality — 7/10
The project structure is readable and functional, though there are still areas where abstraction and testing could be improved further.

### Design Sense — 7/10
I focused on clarity and usability instead of visual complexity, especially for displaying financial information.

### Problem Solving — 8/10
I handled multiple debugging and implementation issues independently and improved the architecture after identifying weaknesses.

### Entrepreneurial Thinking — 6/10
I developed a stronger understanding of the business problem during the project, but I would want more real-world user validation and market research in future iterations.
