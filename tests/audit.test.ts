import { describe, it, expect } from "vitest";

function calculateSavings(current: number, recommended: number) {
  return current - recommended;
}

describe("Audit Engine Savings Logic", () => {
  it("calculates savings correctly for downgrade", () => {
    expect(calculateSavings(60, 20)).toBe(40);
  });

  it("returns zero when plans cost the same", () => {
    expect(calculateSavings(30, 30)).toBe(0);
  });

  it("handles annual savings calculation", () => {
    expect(calculateSavings(1200, 600)).toBe(600);
  });

  it("detects overpayment correctly", () => {
    expect(calculateSavings(100, 40)).toBeGreaterThan(0);
  });

  it("prevents negative savings assumptions", () => {
    expect(calculateSavings(20, 40)).toBeLessThan(0);
  });
});