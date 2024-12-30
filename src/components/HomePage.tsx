import React from "react"
import "../assets/css/HomePage.css"

interface Data {
  id: number
  name: string
  age: number
}

const HomePage: React.FC = () => {
  const data: Data[] = [
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 34 },
    { id: 3, name: "Sam Johnson", age: 45 },
  ]

  return (
    <div>
      <h1>Home Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HomePage
