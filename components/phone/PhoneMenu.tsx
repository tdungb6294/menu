import {BiMenu, BiPhone} from 'react-icons/bi'
import {ImCross} from 'react-icons/im'
import styles from './phone.module.css'
import { useContext, useState } from 'react'
import { LanguageContext, PhoneContext, checkLanguage } from '@/pages'

function PhoneMenu() {
    const {language, setLanguage} = useContext(LanguageContext)
    const {phone, setPhone} = useContext(PhoneContext)

    function handleLanguage() {
        if(language === 'lt') setLanguage('en')
        else setLanguage('lt')
    }

    function handleOnClick() {
        if(phone === true) setPhone(false)
        else setPhone(true)
    }

    return (
        <div className={styles.menuContainer}>
            {phone ? <BiMenu className={styles.bimenu} onClick={() => {handleOnClick()}}/> : <ImCross className={styles.imcross} onClick={() => {handleOnClick()}}/>}
            <span className={styles.lt}>
                LT
            </span>
            <label className={styles.switch}>
                <input id='checkBOXPhone' type="checkbox" onChange={() => {handleLanguage()}} checked={!checkLanguage(language)}></input>
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