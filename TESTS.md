# Test Documentation

## Testing Framework

The project uses Vitest for automated testing.

Run all tests with:

```bash
npx vitest run
```

---

# Implemented Tests

## File: tests/audit.test.ts

### 1. calculates savings correctly for downgrade
Checks whether the audit engine correctly calculates savings when a cheaper plan is recommended.

### 2. returns zero when plans cost the same
Ensures the calculation returns zero savings when there is no pricing difference.

### 3. handles annual savings calculation
Verifies savings calculations work correctly for larger yearly totals.

### 4. detects overpayment correctly
Confirms the audit engine identifies cases where current spend exceeds recommended spend.

### 5. prevents negative savings assumptions
Tests situations where the recommended option is more expensive than the current plan.

---

# Test Coverage Focus

The current tests focus on:
- savings calculations
- recommendation logic validation
- financial calculation consistency

These tests were prioritized because the audit engine is the core business logic of the application.
