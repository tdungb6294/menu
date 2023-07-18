import { LanguageContext, PhoneContext, checkLanguage } from "@/pages"
import { useContext } from "react"
import styles from '../styles/navbar.module.css'

type lang = {
    lt: string,
    en: string
}

const data = [
    {
        lt: 'PRADŽIA',
        en: 'HOME'
    },
    {
        lt: 'MENIU',
        en: 'MENU'
    },
    {
        lt: 'APIE MUS',
        en: 'ABOUT US'
    },
    {
        lt: 'KONTAKTAI',
        en: 'CONTACTS'
    }
]

function NavBar() {
    const {language, setLanguage} = useContext(LanguageContext)


    if(checkLanguage(language)) {
        return (
            <div className={styles.listContainer}>
                <div className={styles.list}>
                    {
                        data.map((value : lang) => (
                            <li className={styles.text}>{value.lt}</li>
                        ))
                    }
                </div>
            </div>
            
        )
    } else {
        return (
            <div className={styles.listContainer}>
                <div className={styles.list}>
                    {
                        data.map((value : lang) => (
                            <li className={styles.text}>{value.en}</li>
                        ))
                    }
                </div>
            </div>
        )
    }
    
}

export default NavBar