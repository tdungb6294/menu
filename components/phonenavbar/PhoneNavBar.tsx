import { LanguageContext, PhoneContext, checkLanguage } from "@/pages"
import { useContext } from "react"
import styles from './phonenavbar.module.css'
import Link from "next/link"
import { usePathname } from 'next/navigation'

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
function PhoneNavBar() {
    const pathname = usePathname()
    const {language, setLanguage} = useContext(LanguageContext)
    const {phone, setPhone} = useContext(PhoneContext)
    
    function handleOnClick() {
        if(phone === true) setPhone(false)
        else setPhone(true)
    }

    if(checkLanguage(language)) {
        return (
            <div className={!phone ? styles.listContainer : styles.listContainerClosed}>
                <div className={styles.list}>
                    {
                        data.map((value : lang, index) => (
                            <Link href={value.link} key={index} className={styles.textContainer} onClick={() => {handleOnClick()}}>
                                <div className={pathname === value.link ? styles.highlight : styles.text}>{value.lt}</div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            
        )
    } else {
        return (
            <div className={!phone ? styles.listContainer : styles.listContainerClosed}>
                <div className={styles.list}>
                    {
                        data.map((value : lang, index) => (
                            <Link href={value.link} key={index} className={styles.textContainer} onClick={() => {handleOnClick()}}>
                                <div className={pathname === value.link ? styles.highlight : styles.text}>{value.en}</div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
    
}

export default PhoneNavBar