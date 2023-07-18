import { LanguageContext, checkLanguage } from "@/pages"
import { useContext } from "react"
import styles from '../styles/dishes.module.css'

type lang = {
    lt: string,
    en: string
}

const data = {
    lt: 'VIETNAMIETIŠKA VIRTUVĖ',
    en: 'VIETNAMESE CUISINE'
}

function NavBar() {
    const {language, setLanguage} = useContext(LanguageContext)


    if(checkLanguage(language)) {
        return (
            <div className={styles.mainTextContainer}>
                <div className={styles.mainText}>
                    {data.lt}
                </div>
            </div>
            
        )
    } else {
        return (
            <div className={styles.mainTextContainer}>
                <div className={styles.mainText}>
                    {data.en}
                </div>
            </div>
        )
    }
    
}

export default NavBar