# AI Spend Audit

AI Spend Audit is a web application that helps startups and teams identify overspending across AI tools like ChatGPT, Claude, Cursor, GitHub Copilot, Gemini, and others. Users receive instant recommendations, potential savings estimates, and optimization suggestions based on their team size and use case.

The product is designed as a lead-generation tool for companies like Credex that help organizations reduce AI infrastructure costs through discounted credits and optimization strategies.

## Live Demo

Deployed URL:
https://ai-spend-audit-nbxa92z0w-harinisaladi0-5986s-projects.vercel.app/

## Features

- AI tool spend input form
- Savings estimation engine
- Tool recommendation system
- Monthly and annual savings calculations
- Persistent form state
- Personalized audit summaries
- Responsive UI built with Next.js and Tailwind CSS

## Supported Tools

- ChatGPT
- Claude
- Cursor
- GitHub Copilot
- Gemini
- OpenAI API
- Anthropic API
- Windsurf

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel

## Quick Start

Clone the repository:

```bash
git clone https://github.com/HariniSaladi9/ai-spend-audit.git
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Decisions

### 1. Next.js instead of plain React
I chose Next.js because it provides better routing, deployment experience, and scalability for production-style applications.

### 2. Tailwind CSS for rapid UI development
Tailwind allowed faster iteration and responsive design without spending time on custom CSS architecture.

### 3. Rule-based audit engine instead of full AI reasoning
The assignment specifically emphasized that hardcoded business logic is preferred for financial recommendations because it is more predictable and defensible.

### 4. Simple onboarding flow
The application avoids login requirements so users can receive value immediately before any lead capture.

### 5. Focus on clarity over visual complexity
The UI was intentionally kept simple and readable to prioritize usability and audit comprehension.

## Screenshots

Add screenshots here before submission.

## Future Improvements

- Shareable audit URLs
- Benchmark comparisons
- PDF export
- More advanced recommendation engine
- Real-time pricing updates
