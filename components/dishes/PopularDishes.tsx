import { LanguageContext, RefContext, checkLanguage } from "@/pages"
import { useContext, useEffect, useRef, useState } from "react"
import styles from './dishes.module.css'
import LogoPattern from "../logopattern/LogoPattern"
import router from "next/router"
import { dish } from "./dishesData"

const title = {
  lt: 'MŪSŲ POPULIARIAUSI PATIEKALAI',
  en: 'OUR MOST POPULAR DISHES'
}

const viewMenu = {
  lt: 'RODYTI MENIU',
  en: 'VIEW MENU'
}

export type Dish = {
  name: string,
  en_name: string, 
  image: string,
  popular: boolean,
  price: number,
  description: string,
  en_description: string,
  category: string,
  en_category: string
}

function PopularDishes() {
    const currentRef = useRef(null)
    const {language, setLanguage} = useContext(LanguageContext)
    const {ref, setRef} = useContext(RefContext)

    useEffect(() => {
      setRef(currentRef)
    }, [])

    function handleClick() {
      router.push('/menu')
    }

    return (
      <div className={styles.popularPage} ref={currentRef}>
        <div className={styles.popularTitle}>
          {checkLanguage(language) ? title.lt : title.en}
        </div>
        <LogoPattern/>
        <div className={styles.dishContainer}>
            {
            dish.filter((dishes : Dish) => (dishes.popular === true))
            .map((dish: Dish, index) => (
              <div key={index} className={styles.dishCard}>
                <li className={styles.dishes}>
                  {checkLanguage(language) ? dish.name : dish.en_name}
                </li>
                <img className={styles.dish} src={dish.image}
                alt='Photo'/>
                <div className={styles.price}>{new Intl.NumberFormat('lt-LT', { style: 'currency', currency: 'EUR' }).format(dish.price)}</div>
                <div className={styles.viewMenu} onClick={() => {handleClick()}}>{checkLanguage(language) ? viewMenu.lt : viewMenu.en}</div>
              </div>
            ))
            }
        </div>
      </div>
      
    )
}

export default PopularDishes