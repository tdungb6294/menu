import Header from "@/components/header/Header";
import LogoPattern from "@/components/logopattern/LogoPattern";
import NavBar from "@/components/navbar/NavBar";
import PhoneMenu from "@/components/phone/PhoneMenu";
import PhoneNavBar from "@/components/phonenavbar/PhoneNavBar";
import styles from '../../components/dishes/dishes.module.css'
import menuStyles from './menu.module.css'
import { LanguageContext, checkLanguage } from "..";
import { createContext, useContext, useState } from "react";
import DishCard from "@/components/dishCard/DishCard";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import FilterBar from "@/components/filterBar/FilterBar";

type filter = {
    filter: string[]
    setFilter: React.Dispatch<React.SetStateAction<string[]>>
}
  
const defaultFilters = {
    filter: [],
    setFilter: () => {}
}

export const FilterContext = createContext<filter>(defaultFilters)

export default function Page() {
    const [filter, setFilter] = useState<string[]>(['Soup', 'Chicken', 'Beef', 'Other'])
    const {language} = useContext(LanguageContext)
    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            <div className={menuStyles.background}></div>
            <PhoneNavBar/>
            <Header/>
            <PhoneMenu/>
            <NavBar/>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src='/logo.png' alt='logo'/>
            </div>
            <LogoPattern/>
            <div className={menuStyles.menu}>
                {checkLanguage(language) ? 'MENIU' : 'MENU'}
            </div>
            <div className={menuStyles.menuContainer}>
                {/*
                    <FilterBar/>*/
                    <DishCard/>
                }
            </div>
            <ScrollToTop/>
        </FilterContext.Provider>
      )
}