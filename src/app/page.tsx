"use client"

import { useEffect, useState } from "react"
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export default function Home() {
  const [vendor, setVendor] = useState("")
  const [plan, setPlan] = useState("")
  const [spend, setSpend] = useState("")
  const [seats, setSeats] = useState("")
  const [useCase, setUseCase] = useState("")

  const [vendors, setVendors] = useState<any[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("vendors")
      return saved ? JSON.parse(saved) : []
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem(
      "vendors",
      JSON.stringify(vendors)
    )
  }, [vendors])

  const addVendor = () => {
    if (!vendor || !spend) return

    const newVendor = {
      name: vendor,
      plan,
      spend: Number(spend),
      seats: Number(seats),
      useCase,
    }

    setVendors([...vendors, newVendor])

    setVendor("")
    setPlan("")
    setSpend("")
    setSeats("")
    setUseCase("")
  }

  const removeVendor = (index: number) => {
    const updated = vendors.filter((_, i) => i !== index)
    setVendors(updated)
  }

  const totalSpend = vendors.reduce(
    (acc, curr) => acc + curr.spend,
    0
  )

  const totalSavings = vendors.reduce(
    (acc, curr) => acc + curr.spend * 0.25,
    0
  )

  const annualSavings = totalSavings * 12

  const chartData = vendors.map((v) => ({
    name: v.name,
    value: v.spend,
  }))

  const COLORS = [
    "#2563eb",
    "#16a34a",
    "#dc2626",
    "#9333ea",
    "#f59e0b",
  ]

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          AI Spend Audit
        </h1>

        <p
          style={{
            color: "#555",
            marginBottom: "30px",
          }}
        >
          Analyze SaaS and AI tool spending to identify cost savings.
        </p>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "16px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            marginBottom: "30px",
          }}
        >
          <input
            type="text"
            placeholder="Vendor Name (e.g. ChatGPT)"
            value={vendor}
            onChange={(e) => setVendor(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="text"
            placeholder="Plan (Plus, Team, Pro...)"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="number"
            placeholder="Monthly Spend"
            value={spend}
            onChange={(e) => setSpend(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="number"
            placeholder="Number of Seats"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          />

          <select
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          >
            <option value="">Select Use Case</option>
            <option value="coding">Coding</option>
            <option value="writing">Writing</option>
            <option value="research">Research</option>
            <option value="data">Data</option>
            <option value="mixed">Mixed</option>
          </select>

          <button
            onClick={addVendor}
            style={{
              background: "#2563eb",
              color: "white",
              padding: "12px 20px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Add Vendor
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "14px",
            }}
          >
            <h3>Total Spend</h3>
            <h2>${totalSpend}</h2>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "14px",
            }}
          >
            <h3>Potential Savings</h3>
            <h2>${totalSavings.toFixed(2)}</h2>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "14px",
            }}
          >
            <h3>Annual Savings</h3>
            <h2>${annualSavings.toFixed(2)}</h2>
          </div>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "16px",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>
            Spend Breakdown
          </h2>

          {vendors.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  outerRadius={100}
                  label
                >
                  {chartData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[index % COLORS.length]
                      }
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p>No vendor data available.</p>
          )}
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "16px",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>
            Audit Results
          </h2>

          {vendors.length === 0 ? (
            <p>No vendors added yet.</p>
          ) : (
            vendors.map((v, index) => {
              const savings = v.spend * 0.25

              return (
                <div
                  key={index}
                  style={{
                    padding: "20px",
                    border: "1px solid #eee",
                    borderRadius: "12px",
                    marginBottom: "15px",
                  }}
                >
                  <h3>
                    {v.name} — ${v.spend}
                  </h3>

                  <p>
                    <strong>Plan:</strong> {v.plan}
                  </p>

                  <p>
                    <strong>Seats:</strong> {v.seats}
                  </p>

                  <p>
                    <strong>Use Case:</strong>{" "}
                    {v.useCase}
                  </p>

                  <p>
                    <strong>
                      Save ${savings.toFixed(2)}
                    </strong>
                  </p>

                  <p>
                    You are likely overpaying based on
                    your current usage pattern.
                  </p>

                  <p>
                    Recommendation: Consider switching
                    to a lower-cost plan or optimizing
                    seat allocation.
                  </p>

                  <button
                    onClick={() =>
                      removeVendor(index)
                    }
                    style={{
                      marginTop: "10px",
                      background: "#dc2626",
                      color: "white",
                      border: "none",
                      padding: "10px 16px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}