import React, { useState, useEffect } from "react"
import "../assets/css/HomePage.css"

interface Data {
  id: number
  account_id: string
  cost: number
}

const HomePage: React.FC = () => {
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://p9s0cgjj6j.execute-api.us-east-1.amazonaws.com/prod/accounts"
        )
        const accountCosts = await response.json()
        console.log("Fetched account costs:", accountCosts)

        const fetchedData = accountCosts.map(
          (account: { account_id: string; cost: number }, index: number) => ({
            id: index + 1,
            account_id: account.account_id,
            cost: account.cost,
          })
        )

        setData(fetchedData)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const addData = () => {
    const newData: Data = {
      id: data.length + 1,
      account_id: `NewAccount${data.length + 1}`,
      cost: Math.floor(Math.random() * 1000) + 100, // Random cost for demonstration
    }
    setData([...data, newData])
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={addData}>Add More</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Account ID</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.account_id}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HomePage
