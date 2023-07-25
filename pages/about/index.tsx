import Header from "@/components/header/Header";
import LogoPattern from "@/components/logopattern/LogoPattern";
import NavBar from "@/components/navbar/NavBar";
import PhoneMenu from "@/components/phone/PhoneMenu";
import PhoneNavBar from "@/components/phonenavbar/PhoneNavBar";
import styles from '../../components/dishes/dishes.module.css'
import aboutStyles from './about.module.css'
import { useContext } from "react";
import { LanguageContext, checkLanguage } from "..";

export default function Page() {
    const {language} = useContext(LanguageContext)
    return (
        <>
        <div className={aboutStyles.background}></div>
            <PhoneNavBar/>
            <Header/>
            <PhoneMenu/>
            <NavBar/>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src='/logo.png' alt='logo'/>
            </div>
            <LogoPattern/>
            <div className={aboutStyles.title}>
                {checkLanguage(language) ? 'APIE MUS' : 'ABOUT US'}
            </div>
        </>
      )
}