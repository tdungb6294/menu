import { createContext, useState } from "react"
import styles from '../components/dishes/dishes.module.css'
import Header from "@/components/header/Header"
import NavBar from "@/components/navbar/NavBar"
import LogoPattern from "@/components/logopattern/LogoPattern"
import VietnameseCuisine from "@/components/VietnameseCuisine"
import PhoneMenu from "@/components/phone/PhoneMenu"
import MenuButton from "@/components/menu/MenuButton"
import PhoneNavBar from "@/components/phonenavbar/PhoneNavBar"
import PopularDishes from "@/components/dishes/PopularDishes"

type language = {
  language: string
  setLanguage: React.Dispatch<React.SetStateAction<string>>
}

type phone = {
  phone: boolean
  setPhone: React.Dispatch<React.SetStateAction<boolean>>
}

type refs = {
  ref: any
  setRef: React.Dispatch<React.SetStateAction<any>>
}

const defaultLanguage = {
  language: 'en',
  setLanguage: () => {}
}

const defaultPhone = {
  phone: false,
  setPhone: () => {}
}

const defaultRef = {
  ref: null,
  setRef: () => {}
}

export function checkLanguage(language : string) {
  if(language === 'lt') return false;
  else return true;
}

export const RefContext = createContext<refs>(defaultRef)
export const LanguageContext = createContext<language>(defaultLanguage)
export const PhoneContext = createContext<phone>(defaultPhone)

export default function Page() {
  const [ref, setRef] = useState({});

  return (
    <RefContext.Provider value={{ref, setRef}}>
      <div className={styles.background}></div>
        <PhoneNavBar/>
        <Header/>
        <PhoneMenu/>
        <NavBar/>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src='/logo.png' alt='logo'/>
        </div>
        <LogoPattern/>
        <VietnameseCuisine/>
        <MenuButton/>
        <PopularDishes/>
    </RefContext.Provider>
  )
}