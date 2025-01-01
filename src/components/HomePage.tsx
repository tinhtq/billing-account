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
          "https://4xg0c7nem8.execute-api.us-east-1.amazonaws.com/prod/accounts"
        )
        const accountIds = await response.json()
        console.log("Fetched account IDs:", accountIds)
        const fetchedData = await Promise.all(
          accountIds.map(async (account_id: string, index: number) => {
            // const costResponse = await fetch(
            //   "https://4xg0c7nem8.execute-api.us-east-1.amazonaws.com/prod/accounts",
            //   {
            //     method: "POST",
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({ account_id }),
            //   }
            // )
            // const costData = await costResponse.json()
            return {
              id: index + 1,
              account_id,
              // cost: costData.monthly_billing,
              cost: "10",
            }
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
