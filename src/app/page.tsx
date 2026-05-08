'use client';

import { useState, useEffect } from 'react';

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

export default function Home() {
  const [vendor, setVendor] = useState('');
  const [amount, setAmount] = useState('');

  const [vendors, setVendors] = useState<
    { name: string; amount: number; savings: number }[]
  >([]);

  useEffect(() => {
    const saved = localStorage.getItem('vendors');

    if (saved) {
      setVendors(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('vendors', JSON.stringify(vendors));
  }, [vendors]);

  const addVendor = () => {
    if (!vendor || !amount) return;

    const monthlyAmount = Number(amount);

    let savings = 0;

    if (monthlyAmount >= 20) {
      savings = 5;
    } else if (monthlyAmount >= 10) {
      savings = 2;
    }

    const newVendor = {
      name: vendor,
      amount: monthlyAmount,
      savings,
    };

    setVendors([...vendors, newVendor]);

    setVendor('');
    setAmount('');
  };

  const removeVendor = (index: number) => {
    const updated = vendors.filter((_, i) => i !== index);
    setVendors(updated);
  };

  const totalSpend = vendors.reduce((sum, v) => sum + v.amount, 0);

  const totalSavings = vendors.reduce((sum, v) => sum + v.savings, 0);

  const annualSavings = totalSavings * 12;

  const COLORS = [
    '#2563eb',
    '#16a34a',
    '#7c3aed',
    '#ea580c',
    '#dc2626',
    '#0891b2',
  ];

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: '40px auto',
        padding: '30px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '10px',
          color: '#0f172a',
        }}
      >
        AI Spend Audit
      </h1>

      <p
        style={{
          color: '#475569',
          marginBottom: '40px',
          fontSize: '18px',
        }}
      >
        Analyze SaaS and AI tool spending to identify cost savings.
      </p>

      <div
        style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '16px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
          marginBottom: '30px',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <input
            type="text"
            placeholder="Vendor Name (e.g. ChatGPT)"
            value={vendor}
            onChange={(e) => setVendor(e.target.value)}
            style={{
              flex: 1,
              minWidth: '250px',
              padding: '14px',
              borderRadius: '10px',
              border: '1px solid #cbd5e1',
              fontSize: '16px',
            }}
          />

          <input
            type="number"
            placeholder="Monthly Spend"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              width: '200px',
              padding: '14px',
              borderRadius: '10px',
              border: '1px solid #cbd5e1',
              fontSize: '16px',
            }}
          />

          <button
            onClick={addVendor}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              padding: '14px 22px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '16px',
            }}
          >
            Add Vendor
          </button>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          marginBottom: '40px',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '16px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
          }}
        >
          <h3>Total Spend</h3>

          <h2
            style={{
              fontSize: '32px',
              color: '#2563eb',
              marginTop: '10px',
            }}
          >
            ${totalSpend}
          </h2>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '16px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
          }}
        >
          <h3>Potential Savings</h3>

          <h2
            style={{
              fontSize: '32px',
              color: '#16a34a',
              marginTop: '10px',
            }}
          >
            ${totalSavings.toFixed(2)}
          </h2>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '16px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
          }}
        >
          <h3>Annual Savings</h3>

          <h2
            style={{
              fontSize: '32px',
              color: '#7c3aed',
              marginTop: '10px',
            }}
          >
            ${annualSavings.toFixed(2)}
          </h2>
        </div>
      </div>

      {vendors.length > 0 && (
        <div
          style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '16px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
            marginBottom: '40px',
          }}
        >
          <h2
            style={{
              marginBottom: '20px',
              color: '#0f172a',
            }}
          >
            Spend Breakdown
          </h2>

          <div style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={vendors}
                  dataKey="amount"
                  nameKey="name"
                  outerRadius={120}
                  label
                >
                  {vendors.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      <h2
        style={{
          marginBottom: '20px',
          color: '#0f172a',
          fontSize: '28px',
        }}
      >
        Audit Results
      </h2>

      {vendors.length === 0 ? (
        <div
          style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '16px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
          }}
        >
          No vendors added yet.
        </div>
      ) : (
        vendors.map((v, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '16px',
              marginBottom: '20px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <h3
                  style={{
                    marginBottom: '10px',
                    textTransform: 'capitalize',
                    fontSize: '24px',
                    color: '#0f172a',
                  }}
                >
                  {v.name} — ${v.amount}
                </h3>

                <p
                  style={{
                    color: '#16a34a',
                    fontWeight: 'bold',
                    fontSize: '18px',
                  }}
                >
                  Save ${v.savings.toFixed(2)}
                </p>

                <p
                  style={{
                    color: '#475569',
                    marginTop: '14px',
                    lineHeight: '1.6',
                  }}
                >
                  You are likely overpaying based on your current
                  usage pattern.
                </p>

                <p
                  style={{
                    color: '#334155',
                    marginTop: '10px',
                    lineHeight: '1.6',
                  }}
                >
                  Recommendation: Consider switching to a lower-cost
                  plan or optimizing seat allocation.
                </p>
              </div>

              <button
                onClick={() => removeVendor(index)}
                style={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                  border: 'none',
                  padding: '12px 18px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}