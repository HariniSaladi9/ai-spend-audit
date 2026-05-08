
export type Vendor = {
  name: string;
  monthlySpend: number;
};

export type AuditResult = {
  vendor: string;
  currentSpend: number;
  recommendation: string;
  suggestedSpend: number;
  savings: number;
};

export function runAudit(vendors: Vendor[]) {
  const results: AuditResult[] = [];

  for (const v of vendors) {
    let suggestedSpend = v.monthlySpend;
    let recommendation = "Your pricing is aligned with market standards.";

    // SIMPLE BUT DEFENSIBLE RULES (IMPORTANT FOR INTERVIEW)
    if (v.monthlySpend >= 20) {
      suggestedSpend = Math.max(10, v.monthlySpend - 5);
      recommendation =
        "You are likely overpaying based on typical individual usage tiers.";
    }

    if (v.name.toLowerCase().includes("notion")) {
      suggestedSpend = 8;
      recommendation =
        "Lower-cost plan available for light usage users.";
    }

    const savings = Math.max(0, v.monthlySpend - suggestedSpend);

    results.push({
      vendor: v.name,
      currentSpend: v.monthlySpend,
      suggestedSpend,
      savings,
      recommendation,
    });
  }

  const totalSpend = vendors.reduce((a, b) => a + b.monthlySpend, 0);
  const totalSuggested = results.reduce(
    (a, b) => a + b.suggestedSpend,
    0
  );

  return {
    results,
    totalSpend,
    totalSavings: totalSpend - totalSuggested,
  };
}