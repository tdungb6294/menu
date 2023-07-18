import {BiMenu, BiPhone} from 'react-icons/bi'
import styles from '../styles/phone.module.css'
import { useContext, useState } from 'react'
import { LanguageContext, PhoneContext, checkLanguage } from '@/pages'

function PhoneMenu() {
    const {language, setLanguage} = useContext(LanguageContext)
    const {phone, setPhone} = useContext(PhoneContext)
    const [lang, setLang] = useState(true)

    function handleLanguage() {
        if(lang === true) setLang(false)
        else setLang(true)
        if(language === 'lt') setLanguage('en')
        else setLanguage('lt')
    }

    function handleOnClick() {
        if(phone === true) setPhone(false)
        else setPhone(true)
    }

    return (
        <div className={styles.menuContainer}>
            <BiMenu className={styles.bimenu} onClick={() => {handleOnClick()}}/>
            
            <span className={styles.lt}>
                LT
            </span>
            <label className={styles.switch}>
                <input type="checkbox" onClick={() => {handleLanguage()}} checked={!checkLanguage(language)}></input>
                <span className={styles.slider}></span>
            </label>
            <span className={styles.en}>
                EN
            </span>

            <div className={styles.phoneContainer}>
                <BiPhone className={styles.phoneIcon} size={16}/>
                <span className={styles.phone}>
                    +370 647 26198
                </span>
            </div>
            
        </div>
    )
}

export default PhoneMenu