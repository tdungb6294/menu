import { SetStateAction, createContext, useEffect, useState } from "react"
import styles from '../styles/dishes.module.css'
import Header from "@/components/Header"
import NavBar from "@/components/NavBar"
import LogoPattern from "@/components/LogoPattern"
import VietnameseCuisine from "@/components/VietnameseCuisine"
import PhoneMenu from "@/components/PhoneMenu"
import MenuButton from "@/components/MenuButton"
import PhoneNavBar from "@/components/PhoneNavBar"

type Dish = {
  _id: string,
  name: string,
  en_name: string, 
  image: string
}

type language = {
  language: string
  setLanguage: React.Dispatch<React.SetStateAction<string>>
}

type phone = {
  phone: boolean
  setPhone: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultLanguage = {
  language: 'lt',
  setLanguage: () => {}
}

const defaultPhone = {
  phone: false,
  setPhone: () => {}
}

export function checkLanguage(language : string) {
  if(language === 'lt') return true;
  else return false;
}

export const LanguageContext = createContext<language>(defaultLanguage)
export const PhoneContext = createContext<phone>(defaultPhone)

export default function Page() {
  const [language, setLanguage] = useState<string>('lt')
  const [phone, setPhone] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean>(false)

  const [dishes, setDishes] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/dishes')
    .then(response => response.json())
    .then(data => setDishes(data))
  }, [])
  
  return (
    <>
      <div className={styles.background}></div>
      <PhoneContext.Provider value={{phone, setPhone}}>
        <LanguageContext.Provider value={{language, setLanguage}}>
          {phone ? <PhoneNavBar/> : <></>}
          <Header/>
          <PhoneMenu/>
          <NavBar/>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src='/logo.png' alt='logo'/>
          </div>
          <LogoPattern/>
          <VietnameseCuisine/>
          <MenuButton/>

          {
            /*
            dishes.map((dish: Dish) => (
              <>
                <li>
                  {checkLanguage(language) ? dish.name : dish.en_name}
                  
                </li>
                <img className={styles.dish} src={dish.image}
                alt='Photo'/>
              </>
              
            ))*/
          }
        </LanguageContext.Provider>
      </PhoneContext.Provider>
    </>
    
    
  )
}