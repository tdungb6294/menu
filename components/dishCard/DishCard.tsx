import { LanguageContext, checkLanguage } from '@/pages'
import { Dish } from '../dishes/PopularDishes'
import styles from './dishCard.module.css'
import { useContext, useEffect, useRef, useState } from "react"
import { dish } from '../dishes/dishesData'
import { FilterContext } from '@/pages/menu'

type lineParams = {
  x1: number,
  y1: number,
  x2: number,
  y2: number
}

const defaultLineParams : lineParams = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0
}

function DishCard() {

    const {language} = useContext(LanguageContext)
    const {filter} = useContext(FilterContext)
    
    return (
        <div className={styles.dishContainer}>
            {
            dish.filter((dishes: Dish) => (filter.includes(dishes.en_category))).map((dish: Dish, index) => (
              <div key={index} className={styles.dishCard}>
                <div className={styles.titleContainer}>
                  <div className={styles.dishes}>
                    {checkLanguage(language) ? dish.name : dish.en_name}
                  </div>
                  <div className={styles.line}/>
                  <div className={styles.price}>{new Intl.NumberFormat('lt-LT', { style: 'currency', currency: 'EUR' }).format(dish.price)}</div>
                </div>
                <img className={styles.dish} src={dish.image}
                alt='Photo'/>
                <div className={styles.description}>{checkLanguage(language) ? dish.description : dish.en_description}</div>
              </div>
            ))
            }
        </div>
    )
}

export default DishCard