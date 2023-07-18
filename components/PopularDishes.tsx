import { Dish, LanguageContext, checkLanguage } from "@/pages"
import { useContext, useEffect, useState } from "react"
import styles from '../styles/dishes.module.css'


function PopularDishes() {
    const [dishes, setDishes] = useState([])
    const {language, setLanguage} = useContext(LanguageContext)
    
    useEffect(() => {
        fetch('http://localhost:3000/api/dishes')
        .then(response => response.json())
        .then(data => setDishes(data))
        
    }, [])

    return (
        <div className={styles.dishContainer}>
            {
            dishes.filter((dishes : Dish) => dishes.popular === true).map((dish: Dish) => (
              <div className={styles.dishCard}>
                <li className={styles.dishes}>
                  {checkLanguage(language) ? dish.name : dish.en_name}
                  
                </li>
                <img className={styles.dish} src={dish.image}
                alt='Photo'/>
              </div>
              
            ))
            }
        </div>
    )
}

export default PopularDishes