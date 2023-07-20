import { LanguageContext, RefContext, checkLanguage } from "@/pages"
import { useContext, useEffect, useRef, useState } from "react"
import styles from './dishes.module.css'
import LogoPattern from "../logopattern/LogoPattern"

const title = {
  lt: 'MŪSŲ POPULIARIAUSI PATIEKALAI',
  en: 'OUR MOST POPULAR DISHES'
}

export type Dish = {
  name: string,
  en_name: string, 
  image: string,
  popular: boolean,
  price: number
}

const dish = [
  {
    name:"PHO su jautiena",
    image:"https://lh3.googleusercontent.com/pw/AIL4fc9rcnSr3wUzcyGLyOIGaXxMU1fzNEeRgFbDl-vv6BRYksvPBPbseYwarkeDgzoQyuD-rdmXHH0I9WJqd1bIgcqnEkBNkV03iThmcM6a-k77-EO4Uy1oYkkzrVWKE1jlkp-yaye8UonrwTCfbal59TKI=w656-h656-s-no?authuser=0",
    en_name:"PHO with beef",
    popular:true,
    price:7
  },
  {
    name:"NEM",
    image:"https://lh3.googleusercontent.com/pw/AIL4fc9OQs2uiLRI6VAzXfnm1v4mPLTVkr4HuGtvBHcqYRyWxVagh6qqWlKLnk-sywGYw66SsZMuojYnPgeqmBw2GWNAiGz2aDyQrXxtpCzFuaZPKkU2pm8wFXRr8-VIKdRmPDrsOHmHlVDYwKslnUjpUN-9=w656-h656-s-no?authuser=0",
    en_name:"NEM",
    popular:true,
    price:7
  },
  {
    name:"Traški antis su daržovėmis",
    image:"https://lh3.googleusercontent.com/pw/AIL4fc_zcSKlhAJwbWZYeerNAddoTxWUF-80BeDmgZMv6f1qDSvbRYKY79q_89YUsyWJ6il0szZqikuKaZjj-ZYpHlKmcpmZUYRRaKPkONkx3TmVCtLPyvTVMKcFTNKt2vNTTdvfdsdn9ZZYIlD-x1mxS-cI=w656-h656-s-no?authuser=0",
    en_name:"Crispy fried duck with vegetables",
    popular:false,
    price:9
  }
]

function PopularDishes() {
    const currentRef = useRef(null)
    const [dishes, setDishes] = useState(dish)
    const {language, setLanguage} = useContext(LanguageContext)
    const {ref, setRef} = useContext(RefContext)

    useEffect(() => {
      setRef(currentRef)
      /*
        fetch('http://localhost:3000/api/dishes')
        .then(response => response.json())
        .then(data => setDishes(data))*/
    }, [])

    function handleClick() {
      
    }

    return (
      <div className={styles.popularPage} ref={currentRef}>
        <div className={styles.popularTitle}>
          {checkLanguage(language) ? title.lt : title.en}
        </div>
        <LogoPattern/>
        <div className={styles.dishContainer}>
            {
            dishes.filter((dishes : Dish) => (dishes.popular === true || dishes.popular === false))
            .map((dish: Dish, index) => (
              <div key={index} className={styles.dishCard}>
                <li className={styles.dishes}>
                  {checkLanguage(language) ? dish.name : dish.en_name}
                </li>
                <img className={styles.dish} src={dish.image}
                alt='Photo'/>
                <div className={styles.price}>{new Intl.NumberFormat('lt-LT', { style: 'currency', currency: 'EUR' }).format(dish.price)}</div>
                <div className={styles.viewMenu} onClick={() => {handleClick}}>VIEW MENU</div>
              </div>
            ))
            }
        </div>
      </div>
      
    )
}

export default PopularDishes