import { useEffect, useState } from "react"

type Dish = {
  _id: string,
  name: string
}

export default function Page() {
  const [dishes, setDishes] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/dishes')
    .then(response => response.json())
    .then(data => setDishes(data))
  }, [])
  
  return (
    <div>
      {
        dishes.map((dish: Dish) => (
          <li>
            {dish.name}
          </li>
        ))
      }
    </div>
  )
}