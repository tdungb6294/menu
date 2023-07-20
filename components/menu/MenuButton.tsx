import { LanguageContext, RefContext, checkLanguage } from '@/pages'
import styles from './menu.module.css'
import { useContext, useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const data = {
    lt: 'MENIU',
    en: 'MENU'
}

const scroll = {
    lt: 'Slinkite žemyn',
    en: 'Scroll down'
}

function MenuButton() {
    const {language, setLanguage} = useContext(LanguageContext)
    const {ref, setRef} = useContext(RefContext)

    function handleOnClick() {
        if(ref.current) {
            window.requestAnimationFrame(() => {
                ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            })
        }
    }

    if(checkLanguage(language)) {
        return (
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => handleOnClick()}>
                    {data.lt}
                </button>
                <div className={styles.scroll}>
                    {scroll.lt}
                </div>
                <IoIosArrowDown className={styles.arrow}/>
            </div>
        )
    } else {
        return (
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => handleOnClick()}>
                    {data.en}
                </button>
                <div className={styles.scroll}>
                    {scroll.en}
                </div>
                <IoIosArrowDown className={styles.arrow}/>
            </div>
        )
    }
}

export default MenuButton