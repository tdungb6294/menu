import Header from "@/components/header/Header";
import LogoPattern from "@/components/logopattern/LogoPattern";
import NavBar from "@/components/navbar/NavBar";
import PhoneMenu from "@/components/phone/PhoneMenu";
import PhoneNavBar from "@/components/phonenavbar/PhoneNavBar";
import VietnameseCuisine from "@/components/VietnameseCuisine";
import styles from '../../components/dishes/dishes.module.css'
import { LanguageContext } from "..";
import { useContext } from "react";

export default function Page() {
    const {language} = useContext(LanguageContext)
    return (
        <>
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
        </>
      )
}