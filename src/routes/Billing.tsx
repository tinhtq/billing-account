import React, { useState, useEffect } from "react"
import "../styles/Billing.css"

interface Data {
  id: number
  account_id: string
  cost: number
}

const fakeData = [
  { id: 1, name: "Account 1", balance: 1000 },
  { id: 2, name: "Account 2", balance: 2000 },
  { id: 3, name: "Account 3", balance: 3000 },
]

const Billing: React.FC = () => {
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = fakeData
        setData(fetchedData)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((account) => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.name}</td>
              <td>${account.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Billing
