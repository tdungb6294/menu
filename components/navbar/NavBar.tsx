import { LanguageContext, PhoneContext, checkLanguage } from "@/pages"
import { useContext } from "react"
import styles from './navbar.module.css'
import Link from "next/link"

type lang = {
    lt: string,
    en: string,
    link: string
}

const data = [
    {
        lt: 'PRADŽIA',
        en: 'HOME',
        link: '/'
    },
    {
        lt: 'MENIU',
        en: 'MENU',
        link: '/menu'
    },
    {
        lt: 'APIE MUS',
        en: 'ABOUT US',
        link: '/about'
    },
    {
        lt: 'KONTAKTAI',
        en: 'CONTACTS',
        link: '/contacts'
    }
]

function NavBar() {
    const {language, setLanguage} = useContext(LanguageContext)


    if(checkLanguage(language)) {
        return (
            <div className={styles.listContainer}>
                <div className={styles.list}>
                    {
                        data.map((value : lang, index) => (
                            <Link key={index} className={styles.text} href={value.link}>{value.lt}</Link>
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
                        data.map((value : lang, index) => (
                            <Link key={index} className={styles.text} href={value.link}>{value.en}</Link>
                        ))
                    }
                </div>
            </div>
        )
    }
    
}

export default NavBar