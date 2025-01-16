import React, { useState, useEffect } from "react"
import "../styles/Billing.css"

interface Data {
  id: number
  account_id: string
  cost: number
  business_unit?: string
}

const fakeData = [
  { id: 1, account_id: "Account 1", cost: 1000, business_unit: "Management" },
  { id: 2, account_id: "Account 2", cost: 2000, business_unit: "Finance" },
  { id: 3, account_id: "Account 3", cost: 3000, business_unit: "Audit" },
]

// Business unit mapping
const businessUnitMapping: Record<string, string[]> = {
  Management: ["207567773379", "00002"],
  Audit: ["00004", "00005"],
  Finance: ["00006", "00007"],
}

const mapBusinessUnit = (accountId: string): string => {
  for (const [unit, accounts] of Object.entries(businessUnitMapping)) {
    if (accounts.includes(accountId)) {
      return unit
    }
  }
  return "Unknown" // Default if no match is found
}

const Billing: React.FC = () => {
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = fakeData

        // const response = await fetch(
        //   "https://p9s0cgjj6j.execute-api.us-east-1.amazonaws.com/prod/accounts"
        // )
        // const accountCosts = await response.json()
        // console.log("Fetched account costs:", accountCosts)

        // const fetchedData = accountCosts.map(
        //   (account: { account_id: string; cost: number }, index: number) => ({
        //     id: index + 1,
        //     account_id: account.account_id,
        //     cost: account.cost,
        //     business_unit: mapBusinessUnit(account.account_id),
        //   })
        // )

        setData(fetchedData)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Home Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Account ID</th>
            <th>Business Unit</th>
            <th>Amounts</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.account_id}</td>
              <td>{item.business_unit}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Billing
