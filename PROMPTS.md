# LLM Prompts

## Personalized Audit Summary Prompt

The application uses an LLM to generate a short personalized summary for users after the audit is completed.

### Prompt

```txt
You are an AI cost optimization assistant.

Given a startup team's AI tool stack, monthly spend, team size, and savings opportunities, generate a concise and professional summary explaining:
- where the company may be overspending
- what optimizations are recommended
- estimated savings opportunities
- whether the current setup is already reasonable

Keep the tone professional, realistic, and concise.
Maximum length: 100 words.
Avoid exaggerated claims.
```

---

# Why This Prompt Was Designed This Way

The prompt was intentionally designed to:
- avoid unrealistic financial claims
- keep outputs concise
- maintain professional tone
- focus on actionable recommendations instead of marketing language

The assignment emphasized that financial recommendations should be defensible and not purely AI-generated, so the LLM is only used for summarization rather than core audit calculations.

---

# What I Tried That Did Not Work

Initially, I experimented with prompts that allowed the AI to generate optimization recommendations directly. However, the outputs were:
- inconsistent
- sometimes overly confident
- occasionally financially unrealistic

This created trust issues for a finance-oriented product.

I therefore limited the AI usage to personalized summaries while keeping pricing and recommendation logic deterministic and rule-based.
