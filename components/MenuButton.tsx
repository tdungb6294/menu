import { LanguageContext, checkLanguage } from '@/pages'
import styles from '../styles/menu.module.css'
import { useContext } from 'react'
import { BiDownArrowAlt } from 'react-icons/bi'

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

    function handleOnClick() {
        
    }

    if(checkLanguage(language)) {
        return (
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => handleOnClick}>
                    {data.lt}
                </button>
                <div className={styles.scroll}>
                    {scroll.lt}
                </div>
                <BiDownArrowAlt className={styles.arrow}/>
            </div>
        )
    } else {
        return (
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => handleOnClick}>
                    {data.en}
                </button>
                <div className={styles.scroll}>
                    {scroll.en}
                </div>
                <BiDownArrowAlt className={styles.arrow}/>
            </div>
        )
    }
}

export default MenuButton